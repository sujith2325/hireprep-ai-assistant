const fs = require('fs');
const path = require('path');
const os = require('os');

const rawPath = path.join(os.homedir(), 'elevenlabs_debug.raw');
const wavPath = path.join(os.homedir(), 'elevenlabs_debug.wav');

if (!fs.existsSync(rawPath)) {
    console.error(`File not found: ${rawPath}`);
    process.exit(1);
}

const rawBuffer = fs.readFileSync(rawPath);
const sampleRate = 16000;
const numChannels = 1;
const bitsPerSample = 16;

const wavHeader = Buffer.alloc(44);
wavHeader.write('RIFF', 0);
wavHeader.writeUInt32LE(36 + rawBuffer.length, 4);
wavHeader.write('WAVE', 8);
wavHeader.write('fmt ', 12);
wavHeader.writeUInt32LE(16, 16); // Subchunk1Size
wavHeader.writeUInt16LE(1, 20);  // AudioFormat (PCM)
wavHeader.writeUInt16LE(numChannels, 22);
wavHeader.writeUInt32LE(sampleRate, 24);
wavHeader.writeUInt32LE(sampleRate * numChannels * (bitsPerSample / 8), 28);
wavHeader.writeUInt16LE(numChannels * (bitsPerSample / 8), 32);
wavHeader.writeUInt16LE(bitsPerSample, 34);
wavHeader.write('data', 36);
wavHeader.writeUInt32LE(rawBuffer.length, 40);

const finalBuffer = Buffer.concat([wavHeader, rawBuffer]);
fs.writeFileSync(wavPath, finalBuffer);

console.log(`Successfully created WAV file: ${wavPath}`);
