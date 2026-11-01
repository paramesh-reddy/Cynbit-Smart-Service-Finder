import React from 'react';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  showReset: boolean;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset, showReset, onNavigateSection }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              if (onNavigateSection) onNavigateSection('landing');
              onReset();
            }}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
            aria-label="Cynbit Technologies Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/35 transition-all">
              <span className="font-bold text-white text-lg tracking-tight font-mono">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              Cynbit<span className="text-cyan-400">.</span>Technologies
            </span>
          </button>
        </div>

        {/* Zone 2: 4 Clean Single-Line Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigateSection && onNavigateSection('services-preview')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => onNavigateSection && onNavigateSection('finder-tool')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Service Finder
          </button>
          <button
            onClick={() => onNavigateSection && onNavigateSection('how-it-works')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            How It Works
          </button>
          <a
            href="https://www.cynbit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            Official Website
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (with optional subtle reset when active) */}
        <div className="flex items-center gap-3 shrink-0">
          {showReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              title="Reset questionnaire"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart Finder</span>
            </button>
          )}

          <a
            href="https://www.cynbit.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-sm hover:shadow-cyan-400/25 transition-all whitespace-nowrap"
          >
            <span>Contact Cynbit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
