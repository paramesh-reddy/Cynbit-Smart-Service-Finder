import React from 'react';
import { ArrowRight, Bot, Globe, Cloud, TrendingUp, CheckCircle, Sparkles, ChevronDown } from 'lucide-react';
import { CYNBIT_SERVICES } from '../data/servicesData';
import { ServiceDetail } from '../types';

interface HeroLandingProps {
  onStartDiscovery: () => void;
  onSelectDirectService: (serviceKey: string) => void;
  onOpenServiceModal: (service: ServiceDetail) => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onStartDiscovery,
  onSelectDirectService,
  onOpenServiceModal
}) => {
  const pillars = [
    {
      key: 'ai-automation',
      title: 'AI Automation & Agents',
      subtitle: 'Autonomous workflows, LLMs & RPA',
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      tag: 'Autonomous AI',
      color: 'from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/15 border-cyan-500/30'
    },
    {
      key: 'web-dev',
      title: 'Web & Mobile Engineering',
      subtitle: 'React, Next.js, Flutter & Node.js',
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      tag: 'Full Stack',
      color: 'from-indigo-500/10 to-purple-500/5 hover:border-indigo-500/50',
      iconBg: 'bg-indigo-500/15 border-indigo-500/30'
    },
    {
      key: 'cloud-solutions',
      title: 'Cloud Infrastructure',
      subtitle: 'DevOps, AWS, GCP & Kubernetes',
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      tag: 'Resilient Cloud',
      color: 'from-sky-500/10 to-blue-500/5 hover:border-sky-500/50',
      iconBg: 'bg-sky-500/15 border-sky-500/30'
    },
    {
      key: 'digital-marketing',
      title: 'Digital Marketing & SEO',
      subtitle: 'Technical SEO & Inbound Funnels',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      tag: 'Organic Growth',
      color: 'from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/15 border-emerald-500/30'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtle kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-6 shadow-sm">
            <span className="text-cyan-400 font-semibold">Cynbit Discovery Engine</span>
            <span className="text-slate-600">·</span>
            <span>Technical Requirements Matching</span>
          </div>

          {/* Mandatory Exact Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Find the Right Solution <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              for Your Business.
            </span>
          </h1>

          {/* Subtitle explaining the service finder */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Cynbit offers specialized AI automation, full-stack web and mobile engineering, cloud
            infrastructure, and digital marketing. Answer 3 quick questions to discover your
            optimal technical match, key deliverables, and execution roadmap.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartDiscovery}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Start Discovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services-preview"
              className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Feature highlights bar */}
          <div className="mt-12 pt-8 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>3-minute guided technical assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Tailored deliverables & tech stack roadmap</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Exportable project requirements brief</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Grid */}
      <section id="services-preview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
              Cynbit Service Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Full-Spectrum Technology Delivery
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Click any core capability to view in-depth scope and architecture, or use our interactive finder for automated matching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const serviceData = CYNBIT_SERVICES[pillar.key];
            return (
              <div
                key={pillar.key}
                className="group relative rounded-2xl bg-[#0b1120] border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.iconBg}`}>
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {serviceData?.tagline ?? pillar.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => serviceData && onOpenServiceModal(serviceData)}
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onSelectDirectService(pillar.key)}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Match Goals
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            Discovery Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How the Cynbit Smart Service Finder Works
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Engineered to remove friction and connect your business requirements directly with technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 relative">
            <div className="text-2xl font-black text-cyan-400/40 mb-3 font-mono">01</div>
            <h3 className="text-base font-semibold text-white mb-2">Select Domain & Context</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Choose your targeted technical discipline (AI, Web, Mobile, Cloud, SEO) or select "Not Sure Yet" if you need architectural triage.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 relative">
            <div className="text-2xl font-black text-blue-400/40 mb-3 font-mono">02</div>
            <h3 className="text-base font-semibold text-white mb-2">Define Business Objectives</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specify whether you aim to eliminate manual tasks, build greenfield products, modernize legacy code, optimize cloud spend, or acquire customers.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 relative">
            <div className="text-2xl font-black text-indigo-400/40 mb-3 font-mono">03</div>
            <h3 className="text-base font-semibold text-white mb-2">Receive Solution Blueprint</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Review a deterministic recommendation complete with architectural rationale, deliverables, tech stack, and direct Cynbit contact integration.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onStartDiscovery}
            className="px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-400/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Service Finder Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
