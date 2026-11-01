import React from 'react';
import {
  Bot,
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  Compass,
  Zap,
  Code2,
  Wrench,
  Server,
  Target,
  Sparkles,
  Flame,
  Calendar,
  Clock,
  Search,
  Check
} from 'lucide-react';

interface StepCardProps {
  id: string;
  label: string;
  description: string;
  badge?: string;
  iconName: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({
  id,
  label,
  description,
  badge,
  iconName,
  isSelected,
  onSelect
}) => {
  // Map icon names safely to Lucide components
  const renderIcon = () => {
    const props = { className: `w-5 h-5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}` };
    switch (iconName) {
      case 'Bot':
        return <Bot {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      case 'Search':
      default:
        return <Search {...props} />;
    }
  };

  return (
    <button
      type="button"
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-pressed={isSelected}
      className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border cursor-pointer relative flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        isSelected
          ? 'bg-[#0f1b33] border-cyan-400 shadow-lg shadow-cyan-500/15 ring-1 ring-cyan-400/40'
          : 'bg-[#0b1120] border-slate-800 hover:border-slate-700 hover:bg-[#0e162a]'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors border ${
              isSelected
                ? 'bg-cyan-500/20 border-cyan-400/40'
                : 'bg-slate-900 border-slate-800 group-hover:border-slate-700'
            }`}
          >
            {renderIcon()}
          </div>

          <div className="flex items-center gap-2">
            {badge && (
              <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                {badge}
              </span>
            )}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                isSelected
                  ? 'bg-cyan-400 border-cyan-400 text-slate-950 scale-105'
                  : 'border-slate-700 bg-slate-900/80 group-hover:border-slate-600'
              }`}
            >
              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
          </div>
        </div>

        <h4
          className={`text-base font-semibold leading-snug mb-1.5 transition-colors ${
            isSelected ? 'text-cyan-200' : 'text-white group-hover:text-cyan-100'
          }`}
        >
          {label}
        </h4>

        <p className="text-xs text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </button>
  );
};
