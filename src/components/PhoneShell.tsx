import React, { useState } from 'react';
import { Smartphone, RotateCw, Sparkles, SlidersHorizontal } from 'lucide-react';

interface PhoneShellProps {
  children: React.ReactNode;
  title?: string;
}

export const PhoneShell: React.FC<PhoneShellProps> = ({ children, title = "HirePrep Mobile Shell" }) => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [deviceSkin, setDeviceSkin] = useState<'dark' | 'silver' | 'gold'>('dark');
  const [scale, setScale] = useState<number>(0.95);
  const [showShellControls, setShowShellControls] = useState<boolean>(true);

  const getSkinBorderClass = () => {
    switch (deviceSkin) {
      case 'silver':
        return 'border-slate-300 bg-slate-900 shadow-slate-400/20';
      case 'gold':
        return 'border-amber-700/60 bg-slate-950 shadow-amber-900/20';
      case 'dark':
      default:
        return 'border-slate-800 bg-slate-950 shadow-cyan-950/30';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 w-full h-full min-h-screen bg-slate-950 text-slate-100 select-none overflow-auto">
      {/* Shell Toolbar / Controls */}
      <div className="flex items-center gap-2 mb-3 px-4 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-800 shadow-xl text-xs z-50">
        <span className="font-semibold text-slate-200 flex items-center gap-1.5 mr-2">
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          {title}
        </span>

        <button
          onClick={() => setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait')}
          className="p-1.5 hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-cyan-400 flex items-center gap-1"
          title="Rotate Orientation"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline capitalize">{orientation}</span>
        </button>

        <div className="flex items-center gap-1 bg-slate-950/60 p-0.5 rounded-full border border-slate-800/80">
          <button
            onClick={() => setDeviceSkin('dark')}
            className={`w-4 h-4 rounded-full bg-slate-800 border ${deviceSkin === 'dark' ? 'ring-2 ring-cyan-500 border-cyan-400' : 'border-slate-700'}`}
            title="Dark Titanium"
          />
          <button
            onClick={() => setDeviceSkin('silver')}
            className={`w-4 h-4 rounded-full bg-slate-200 border ${deviceSkin === 'silver' ? 'ring-2 ring-cyan-500 border-slate-400' : 'border-slate-300'}`}
            title="Silver Aluminum"
          />
          <button
            onClick={() => setDeviceSkin('gold')}
            className={`w-4 h-4 rounded-full bg-amber-600 border ${deviceSkin === 'gold' ? 'ring-2 ring-cyan-500 border-amber-400' : 'border-amber-700'}`}
            title="Gold Finish"
          />
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 ml-2 border-l border-slate-800 pl-2">
          <button
            onClick={() => setScale(s => Math.max(0.6, parseFloat((s - 0.05).toFixed(2))))}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-mono"
          >
            -
          </button>
          <span className="text-[11px] w-9 text-center font-mono text-slate-300">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale(s => Math.min(1.2, parseFloat((s + 0.05).toFixed(2))))}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-mono"
          >
            +
          </button>
        </div>
      </div>

      {/* Smartphone Frame Wrapper */}
      <div 
        style={{ transform: `scale(${scale})` }}
        className={`transition-all duration-300 relative shadow-2xl rounded-[50px] border-[14px] ${getSkinBorderClass()} ${
          orientation === 'portrait' 
            ? 'w-[390px] h-[812px]' 
            : 'w-[812px] h-[390px]'
        }`}
      >
        {/* Hardware Notch / Dynamic Island */}
        {orientation === 'portrait' ? (
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-inner">
            <div className="w-2.5 h-2.5 bg-slate-950 rounded-full border border-slate-800/80" />
            <div className="w-2 h-2 bg-blue-900/60 rounded-full ring-1 ring-blue-500/20" />
          </div>
        ) : (
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-28 bg-black rounded-full z-50 flex flex-col items-center justify-between py-3 shadow-inner">
            <div className="w-2.5 h-2.5 bg-slate-950 rounded-full border border-slate-800/80" />
            <div className="w-2 h-2 bg-blue-900/60 rounded-full ring-1 ring-blue-500/20" />
          </div>
        )}

        {/* Screen Content Window */}
        <div className="w-full h-full overflow-hidden rounded-[38px] bg-slate-950 relative flex flex-col border border-slate-800/50">
          {/* Status Bar */}
          <div className="h-10 pt-2.5 px-7 flex items-center justify-between text-[11px] font-semibold text-slate-400 z-40 bg-gradient-to-b from-slate-950/90 to-transparent">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-cyan-400 font-mono text-[9px] px-1 rounded bg-cyan-950/60 border border-cyan-800/50">5G</span>
              <div className="w-5 h-2.5 border border-slate-400/80 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-full bg-slate-200 rounded-px" />
              </div>
            </div>
          </div>

          {/* Child Content */}
          <div className="flex-1 overflow-y-auto relative w-full h-full">
            {children}
          </div>

          {/* iOS Bottom Home Bar */}
          <div className="h-6 flex items-center justify-center z-40 bg-gradient-to-t from-slate-950/90 to-transparent">
            <div className="w-32 h-1 bg-slate-600/80 rounded-full hover:bg-slate-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShell;
