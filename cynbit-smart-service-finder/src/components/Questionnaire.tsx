import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import {
  QUESTIONNAIRE_STEPS,
  SERVICE_OPTIONS,
  GOAL_OPTIONS,
  TIMELINE_OPTIONS
} from '../data/questionnaireData';
import { BusinessGoal, ExpectedTimeline, QuestionnaireAnswers, ServiceType } from '../types';
import { StepCard } from './StepCard';

interface QuestionnaireProps {
  answers: QuestionnaireAnswers;
  onUpdateAnswers: (updated: Partial<QuestionnaireAnswers>) => void;
  onComplete: () => void;
  onBackToLanding: () => void;
  onReset: () => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  answers,
  onUpdateAnswers,
  onComplete,
  onBackToLanding,
  onReset
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [validationError, setValidationError] = useState<string | null>(null);

  const stepDef = QUESTIONNAIRE_STEPS[currentStep - 1];

  // Helper to check if current step is answered
  const isCurrentStepAnswered = () => {
    if (currentStep === 1) return Boolean(answers.service);
    if (currentStep === 2) return Boolean(answers.goal);
    if (currentStep === 3) return Boolean(answers.timeline);
    return false;
  };

  const handleNext = () => {
    if (!isCurrentStepAnswered()) {
      setValidationError('Please select one of the options below to proceed.');
      return;
    }
    setValidationError(null);

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    setValidationError(null);
    if (currentStep === 1) {
      onBackToLanding();
    } else {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (id: ServiceType) => {
    onUpdateAnswers({ service: id });
    setValidationError(null);
  };

  const handleSelectGoal = (id: BusinessGoal) => {
    onUpdateAnswers({ goal: id });
    setValidationError(null);
  };

  const handleSelectTimeline = (id: ExpectedTimeline) => {
    onUpdateAnswers({ timeline: id });
    setValidationError(null);
  };

  const progressPercentage = Math.round((currentStep / 3) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Bar with Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider">
              Step {currentStep} of 3
            </span>
            <span className="text-slate-600">·</span>
            <span>
              {currentStep === 1
                ? 'Service Domain'
                : currentStep === 2
                ? 'Business Objective'
                : 'Project Timeline'}
            </span>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Start questionnaire over"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restart</span>
          </button>
        </div>

        {/* Animated Progress Bar */}
        <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"
            initial={false}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        </div>

        {/* Step Checkpoints */}
        <div className="grid grid-cols-3 gap-2 mt-3 text-center text-[11px] font-medium text-slate-400">
          <div className={`transition-colors ${currentStep >= 1 ? 'text-cyan-400' : 'text-slate-600'}`}>
            1. Service Domain
          </div>
          <div className={`transition-colors ${currentStep >= 2 ? 'text-cyan-400' : 'text-slate-600'}`}>
            2. Business Goal
          </div>
          <div className={`transition-colors ${currentStep >= 3 ? 'text-cyan-400' : 'text-slate-600'}`}>
            3. Timeline
          </div>
        </div>
      </div>

      {/* Main Step Content with Motion */}
      <div className="bg-[#080d1a] border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[90px] pointer-events-none -z-10" />

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {stepDef.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            {stepDef.subtitle}
          </p>
        </div>

        {/* Validation Error Banner if user tries to proceed without answering */}
        {validationError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-sm animate-in fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Step Question Options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* STEP 1: Service Domain */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICE_OPTIONS.map((option) => (
                  <StepCard
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    description={option.description}
                    iconName={option.iconName}
                    isSelected={answers.service === option.id}
                    onSelect={() => handleSelectService(option.id)}
                  />
                ))}
              </div>
            )}

            {/* STEP 2: Business Goal */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GOAL_OPTIONS.map((option) => (
                  <StepCard
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    description={option.description}
                    iconName={option.iconName}
                    isSelected={answers.goal === option.id}
                    onSelect={() => handleSelectGoal(option.id)}
                  />
                ))}
              </div>
            )}

            {/* STEP 3: Expected Timeline */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TIMELINE_OPTIONS.map((option) => (
                  <StepCard
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    description={option.description}
                    badge={option.badge}
                    iconName={option.iconName}
                    isSelected={answers.timeline === option.id}
                    onSelect={() => handleSelectTimeline(option.id)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Actions Footer */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentStep === 1 ? 'Back to Overview' : 'Previous Step'}</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            {!isCurrentStepAnswered() && (
              <span className="hidden lg:inline text-xs text-slate-400">
                Selection required to continue
              </span>
            )}
            <button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentStepAnswered()}
              className={`w-full sm:w-auto px-7 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isCurrentStepAnswered()
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-md shadow-cyan-400/25 hover:from-cyan-300 hover:to-cyan-200'
                  : 'bg-slate-800 text-slate-400 cursor-not-allowed opacity-60 border border-slate-700/50'
              }`}
            >
              <span>{currentStep === 3 ? 'Generate Recommendation' : 'Continue to Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
