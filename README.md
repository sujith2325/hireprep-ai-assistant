# HirePrep AI Assistant

An AI-powered desktop application designed to help users prepare for interviews and improve their professional skills through intelligent assistance, meeting notes, and knowledge management.

## 🚀 Features

- **AI-Powered Interview Assistance** - Get real-time suggestions and feedback during interviews
- **Meeting Notes & Summaries** - Automatically capture, transcribe, and summarize meetings
- **Knowledge Management** - Build and maintain a personal knowledge base with OKF (Open Knowledge Format)
- **Screen Understanding** - Vision-based analysis of on-screen content for contextual assistance
- **Multi-LLM Support** - Integrate with multiple AI providers (Claude, OpenAI, Gemini, etc.)
- **Profile Intelligence** - Create and maintain professional profiles for targeted assistance
- **Cross-Platform** - Runs on both macOS and Windows
- **Browser Extension** - Capture context from your web browser
- **Speech-to-Text** - Real-time transcription capabilities
- **Customizable Modes** - Tailor the assistant to your specific needs

## 📋 Prerequisites

- **Node.js** 18+ and npm/yarn
- **Python** 3.8+ (for certain AI features)
- **Git**
- **Electron** (installed via dependencies)

### Platform-Specific Requirements

**macOS:**
- Xcode Command Line Tools
- Rust (for native modules)

**Windows:**
- Visual Studio Build Tools
- Rust (for native modules)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sujith2325/hireprep-ai-assistant.git
   cd hireprep-ai-assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Download required models:**
   ```bash
   npm run download-models
   ```

4. **Build native modules:**
   ```bash
   npm run build-native
   ```

## 💻 Development

### Running in Development Mode

```bash
# Start the Electron app
npm run dev

# In another terminal, start the web build watcher
npm run dev:web
```

### Build for Production

```bash
# macOS
npm run build:mac

# Windows
npm run build:win

# Both platforms
npm run build:all
```

## 📁 Project Structure

```
hireprep-ai-assistant/
├── electron/              # Electron main process and backend services
│   ├── services/         # Core service implementations
│   ├── llm/             # LLM provider integrations
│   ├── audio/           # Audio processing and STT
│   ├── db/              # Database operations
│   └── utils/           # Utility functions
├── renderer/            # React-based UI (deprecated - see src/)
├── src/                 # Main React application
│   ├── components/      # React components
│   ├── lib/            # Utility libraries
│   └── hooks/          # React hooks
├── natively-browser/    # Browser extension
├── native-module/       # Rust native bindings
├── tests/              # Test suites
└── scripts/            # Build and utility scripts
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## 🔌 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# LLM Provider Keys
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
GOOGLE_API_KEY=your_key_here

# STT Configuration
STT_PROVIDER=openai  # or other supported providers

# Database
DATABASE_PATH=./data/natively.db
```

See `.env.example` for all available options.

### Settings

Configure the application through:
1. **UI Settings** - Accessible from the Settings overlay (⚙️)
2. **Mode Selection** - Choose from predefined or custom modes
3. **Provider Configuration** - Set up AI providers and API keys

## 🎯 Usage

### Interview Preparation
1. Launch the application
2. Select "Interview Mode"
3. Allow microphone and screen permissions
4. Start your interview preparation session
5. Get real-time suggestions and feedback

### Meeting Notes
1. Start a meeting through Zoom, Teams, or other platforms
2. Click the Natively icon to activate meeting capture
3. Receive automatic transcription and AI-generated notes
4. Export or save meeting summaries

### Knowledge Management
1. Create a new profile in the Knowledge section
2. Add documents, JD (Job Descriptions), or thesis documents
3. Use the RAG (Retrieval-Augmented Generation) system for contextual assistance
4. Export your knowledge base

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the terms specified in [LICENSE](./LICENSE).

## 🛡️ Privacy & Security

Your privacy is important to us. Please review our [PRIVACY.md](./PRIVACY.md) for information about data handling and our [SECURITY.md](./SECURITY.md) for security practices.

## 💬 Support

For issues, questions, or suggestions:
- **GitHub Issues:** [Report a bug](https://github.com/sujith2325/hireprep-ai-assistant/issues)
- **Discussions:** [Start a discussion](https://github.com/sujith2325/hireprep-ai-assistant/discussions)

## 🗺️ Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and improvements.

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- UI powered by [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)
- Audio processing with [Whisper](https://openai.com/research/whisper)
- LLM integration with [LiteLLM](https://litellm.ai/) and direct provider APIs
- Vector search using [sqlite-vec](https://github.com/asg017/sqlite-vec)

## 📧 Contact

For business inquiries or partnerships, please reach out to the maintainers through GitHub.

---

**Made with ❤️ by the Natively team**
