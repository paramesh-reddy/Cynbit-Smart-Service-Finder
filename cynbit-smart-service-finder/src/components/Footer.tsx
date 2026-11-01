import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050811] text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              C
            </div>
            <span className="font-semibold text-white tracking-tight">Cynbit Technologies</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <p className="text-slate-400">
            Smart Service Finder — Interactive Technical Assessment Prototype
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.cynbit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Official Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.cynbit.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Contact Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>© {new Date().getFullYear()} Cynbit Technologies. All rights reserved.</div>
        <div>Built for Cynbit Full Stack Developer Technical Assessment.</div>
      </div>
    </footer>
  );
};
