import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  RotateCcw,
  ExternalLink,
  Layers,
  Calendar,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { QuestionnaireAnswers, RecommendationResult, ServiceDetail } from '../types';
import { generateRequirementBrief } from '../data/recommendationRules';
import { SERVICE_OPTIONS, GOAL_OPTIONS, TIMELINE_OPTIONS } from '../data/questionnaireData';

interface RecommendationViewProps {
  answers: QuestionnaireAnswers;
  recommendation: RecommendationResult;
  onRestart: () => void;
  onExploreService: (service: ServiceDetail) => void;
  onOpenDirectInquiry: () => void;
  onShowToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export const RecommendationView: React.FC<RecommendationViewProps> = ({
  answers,
  recommendation,
  onRestart,
  onExploreService,
  onOpenDirectInquiry,
  onShowToast
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.id === answers.service)?.label ?? 'Service Domain';
  const goalLabel = GOAL_OPTIONS.find((g) => g.id === answers.goal)?.label ?? 'Business Goal';
  const timelineLabel =
    TIMELINE_OPTIONS.find((t) => t.id === answers.timeline)?.label ?? 'Expected Timeline';

  const handleCopyBrief = async () => {
    try {
      const brief = generateRequirementBrief(answers, recommendation);
      await navigator.clipboard.writeText(brief);
      setHasCopied(true);
      onShowToast('Project requirements copied to clipboard!', 'success');
      setTimeout(() => setHasCopied(false), 3000);
    } catch {
      onShowToast('Unable to copy automatically. Please select text manually.', 'error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top action strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <span>Recommendation Engine Output</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Rule-Based Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Recommended Cynbit Solution
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Discovery</span>
          </button>
        </div>
      </div>

      {/* Client Input Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <div className="p-3.5 rounded-xl bg-[#0b1120] border border-slate-800/80 text-xs">
          <div className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1">
            Selected Domain
          </div>
          <div className="text-white font-medium truncate">{serviceLabel}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0b1120] border border-slate-800/80 text-xs">
          <div className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1">
            Core Business Objective
          </div>
          <div className="text-white font-medium truncate">{goalLabel}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0b1120] border border-slate-800/80 text-xs">
          <div className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1">
            Target Execution Pace
          </div>
          <div className="text-white font-medium truncate">{timelineLabel}</div>
        </div>
      </div>

      {/* Marquee Recommendation Hero Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0e172a] via-[#090e1c] to-[#070b14] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden mb-8 glow-card">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {recommendation.matchTier}
            </span>
            <span className="text-xs text-slate-400">
              Service: {recommendation.serviceDetail.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {recommendation.serviceName}
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {recommendation.whyItMatches}
          </p>

          {recommendation.strategicContext && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed mb-8 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Strategic Assessment: </span>
                {recommendation.strategicContext}
              </div>
            </div>
          )}

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={recommendation.serviceDetail.cynbitContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-lg shadow-cyan-400/20 flex items-center gap-2"
            >
              <span>Contact Cynbit</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onExploreService(recommendation.serviceDetail)}
              className="px-5 py-3 rounded-xl text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore Service Scope</span>
            </button>

            <button
              onClick={handleCopyBrief}
              className="px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              {hasCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Requirements</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenDirectInquiry}
              className="px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-2 cursor-pointer ml-auto"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Direct Inquiry Form</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two Column Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Core Value & Benefits */}
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Targeted Solution Benefits</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-4">
            Why This Solution Fits Your Operations
          </h4>
          <ul className="space-y-3">
            {recommendation.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cynbit Key Deliverables */}
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
            <FileText className="w-4 h-4" />
            <span>Engineering Deliverables</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-4">
            Tangible Outcomes Cynbit Delivers
          </h4>
          <ul className="space-y-3">
            {recommendation.keyDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline & Recommended Tech Stack Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Recommended Tech Stack */}
        <div className="md:col-span-2 rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>Recommended Technology Stack</span>
          </div>
          <h4 className="text-base font-bold text-white mb-3">
            Architectural Tooling & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.recommendedTechStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Advisory */}
        <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Scoping & Timeline</span>
          </div>
          <h4 className="text-base font-bold text-white mb-2">Execution Guidance</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {recommendation.timelineAdvisory}
          </p>
        </div>
      </div>

      {/* Next Steps Card & Official Contact Callout */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="text-base font-bold text-white mb-1">
            Ready to discuss your project with Cynbit?
          </h4>
          <p className="text-xs text-slate-400 max-w-xl">
            You can copy the generated project requirements brief to paste in your initial outreach or connect directly through Cynbit’s contact portal.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={handleCopyBrief}
            className="flex-1 md:flex-none px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{hasCopied ? 'Copied' : 'Copy Requirements'}</span>
          </button>

          <a
            href="https://www.cynbit.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2"
          >
            <span>Visit cynbit.in/contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
