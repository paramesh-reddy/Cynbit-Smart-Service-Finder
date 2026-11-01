import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, ExternalLink, Mail, User, Building, MessageSquare } from 'lucide-react';
import { QuestionnaireAnswers, RecommendationResult } from '../types';
import { generateRequirementBrief } from '../data/recommendationRules';

interface DirectInquiryModalProps {
  answers: QuestionnaireAnswers;
  recommendation: RecommendationResult;
  onClose: () => void;
  onShowToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export const DirectInquiryModal: React.FC<DirectInquiryModalProps> = ({
  answers,
  recommendation,
  onClose,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      onShowToast('Please provide your name', 'error');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid work email address');
      return;
    }
    setEmailError('');

    // Prepare full inquiry
    const inquiryPayload = {
      client: { name, email, company, notes },
      answers,
      recommendation: {
        service: recommendation.serviceName,
        matchTier: recommendation.matchTier
      },
      submittedAt: new Date().toISOString()
    };

    // Attempt backend POST if running full-stack, fallback gracefully
    try {
      fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryPayload)
      }).catch(() => {
        // Silently handled by local storage fallback
      });
    } catch {
      // Ignore network errors in static mode
    }

    // Store in localStorage for demonstration and persistency
    try {
      const existing = JSON.parse(localStorage.getItem('cynbit_inquiries') || '[]');
      existing.push(inquiryPayload);
      localStorage.setItem('cynbit_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setIsSubmitted(true);
    onShowToast('Inquiry prepared successfully!', 'success');
  };

  const handleCopyFullInquiry = async () => {
    const brief = generateRequirementBrief(answers, recommendation);
    const fullText = `CYNBIT INQUIRY SUBMISSION
Client Name: ${name}
Work Email: ${email}
Company: ${company || 'Not Specified'}
Additional Notes: ${notes || 'None'}

${brief}`;

    try {
      await navigator.clipboard.writeText(fullText);
      onShowToast('Full inquiry copied to clipboard!', 'success');
    } catch {
      onShowToast('Unable to copy to clipboard', 'error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-[#0a101f] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiry Connect</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Connect with Cynbit Solutions Team
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Attach your discovery output for{' '}
              <span className="text-cyan-300 font-medium">{recommendation.serviceName}</span> and
              request a consultation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Work Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="alex@company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                {emailError && <p className="text-xs text-rose-400 mt-1">{emailError}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Additional Context or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any existing systems, architectural constraints, or specific team requirements..."
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Prepare & Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Inquiry Ready for Cynbit</h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="text-cyan-300 font-semibold">{name}</span>! Your
              discovery brief for <span className="text-white font-medium">{recommendation.serviceName}</span> is
              ready. You can copy the full text package or navigate directly to the official Cynbit
              contact channel.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleCopyFullInquiry}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>Copy Complete Inquiry Package</span>
              </button>

              <a
                href="https://www.cynbit.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2"
              >
                <span>Proceed to cynbit.in/contact</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-200 underline pt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
