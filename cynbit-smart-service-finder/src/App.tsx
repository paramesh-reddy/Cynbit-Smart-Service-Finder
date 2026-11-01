/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroLanding } from './components/HeroLanding';
import { Questionnaire } from './components/Questionnaire';
import { RecommendationView } from './components/RecommendationView';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DirectInquiryModal } from './components/DirectInquiryModal';
import { Footer } from './components/Footer';
import { Toast, ToastProps } from './components/Toast';
import { QuestionnaireAnswers, ServiceDetail, ServiceType } from './types';
import { calculateRecommendation } from './data/recommendationRules';
import { CYNBIT_SERVICES } from './data/servicesData';

type ViewMode = 'landing' | 'questionnaire' | 'results';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);
  const [isDirectInquiryOpen, setIsDirectInquiryOpen] = useState(false);
  const [toast, setToast] = useState<Omit<ToastProps, 'onClose'> | null>(null);

  const recommendation = useMemo(() => {
    return calculateRecommendation(answers);
  }, [answers]);

  const handleShowToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  };

  const handleStartDiscovery = () => {
    setViewMode('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDirectService = (serviceKey: string) => {
    let serviceId: ServiceType = 'ai-automation';
    if (serviceKey === 'ai-automation') serviceId = 'ai-automation';
    else if (serviceKey === 'web-dev') serviceId = 'website-dev';
    else if (serviceKey === 'cloud-solutions') serviceId = 'cloud-solutions';
    else if (serviceKey === 'digital-marketing') serviceId = 'digital-marketing';

    setAnswers((prev) => ({ ...prev, service: serviceId }));
    setViewMode('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleShowToast(`Selected ${serviceId}. Now choose your primary business goal.`, 'info');
  };

  const handleUpdateAnswers = (updated: Partial<QuestionnaireAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...updated }));
  };

  const handleCompleteQuestionnaire = () => {
    setViewMode('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleShowToast('Recommendation calculated based on your requirements!', 'success');
  };

  const handleReset = () => {
    setAnswers({});
    setViewMode('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleShowToast('Service Finder reset to beginning.', 'info');
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'finder-tool') {
      setViewMode('questionnaire');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (viewMode !== 'landing') {
      setViewMode('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060a14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar Navigation */}
      <Header
        onReset={handleReset}
        showReset={viewMode !== 'landing'}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {viewMode === 'landing' && (
          <HeroLanding
            onStartDiscovery={handleStartDiscovery}
            onSelectDirectService={handleSelectDirectService}
            onOpenServiceModal={(service) => setSelectedServiceModal(service)}
          />
        )}

        {viewMode === 'questionnaire' && (
          <Questionnaire
            answers={answers}
            onUpdateAnswers={handleUpdateAnswers}
            onComplete={handleCompleteQuestionnaire}
            onBackToLanding={() => setViewMode('landing')}
            onReset={handleReset}
          />
        )}

        {viewMode === 'results' && (
          <RecommendationView
            answers={answers}
            recommendation={recommendation}
            onRestart={handleReset}
            onExploreService={(service) => setSelectedServiceModal(service)}
            onOpenDirectInquiry={() => setIsDirectInquiryOpen(true)}
            onShowToast={handleShowToast}
          />
        )}
      </main>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onSelectInFinder={(serviceId) => {
          handleSelectDirectService(serviceId);
        }}
      />

      {/* Direct Inquiry Modal */}
      {isDirectInquiryOpen && (
        <DirectInquiryModal
          answers={answers}
          recommendation={recommendation}
          onClose={() => setIsDirectInquiryOpen(false)}
          onShowToast={handleShowToast}
        />
      )}

      {/* Floating Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
