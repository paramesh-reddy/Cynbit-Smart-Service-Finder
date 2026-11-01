import React, { useEffect } from 'react';
import { X, Check, ExternalLink, ArrowRight, Layers, Cpu, Clock, ShieldCheck } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectInFinder?: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectInFinder
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090f1d] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              {service.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1">{service.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Service Scope & Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {service.fullDescription}
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Core Technical Capabilities
          </h4>
          <ul className="space-y-2.5">
            {service.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Key Client Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Typical Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-slate-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-md bg-slate-800/90 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Typical Timeline</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
              {service.typicalTimeline}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          {onSelectInFinder && (
            <button
              onClick={() => {
                onSelectInFinder(service.id);
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              Select in Service Finder
            </button>
          )}

          <a
            href={service.cynbitContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto ml-auto px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2"
          >
            <span>Inquire on cynbit.in</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
