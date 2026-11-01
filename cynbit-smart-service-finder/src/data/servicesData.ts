import { ServiceDetail } from '../types';

export const CYNBIT_SERVICES: Record<string, ServiceDetail> = {
  'ai-automation': {
    id: 'ai-automation',
    name: 'AI Automation & Autonomous Agents',
    tagline: 'Custom intelligent workflows, LLM agents, and robotic task automation.',
    category: 'Artificial Intelligence & Automation',
    fullDescription:
      'Cynbit designs and deploys custom AI automation pipelines and multi-agent systems that autonomously handle complex workflows, document parsing, customer interactions, and data processing. We transform repetitive manual operations into scalable, self-healing digital pipelines.',
    capabilities: [
      'Multi-agent workflow orchestration with autonomous task routing',
      'Custom LLM fine-tuning, RAG (Retrieval-Augmented Generation) knowledge bases',
      'Automated invoice, document, and unstructured data extraction',
      'Intelligent voice, email, and chat assistant agents with CRM integrations',
      'Enterprise guardrails, observability, and human-in-the-loop validation'
    ],
    deliverables: [
      'End-to-end automated agent pipeline integrated with your existing tools',
      'Knowledge retrieval repository tailored to proprietary business documents',
      'Real-time analytics dashboard monitoring agent runs, latency, and success rates',
      'Comprehensive API documentation, runbooks, and staff training sessions'
    ],
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI/Gemini APIs', 'FastAPI', 'Redis', 'Docker'],
    typicalTimeline: '2 to 6 weeks for MVP agent; phased production rollouts',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  },
  'web-dev': {
    id: 'web-dev',
    name: 'Full Stack Web Application Development',
    tagline: 'High-performance, modern, scalable web applications and SaaS platforms.',
    category: 'Full Stack Engineering',
    fullDescription:
      'Cynbit builds production-ready, lightning-fast web applications engineered for scalability, security, and exceptional user experience. From greenfield SaaS platforms to modernizing legacy web portals, our engineering team adheres to clean code standards and rigorous testing.',
    capabilities: [
      'Custom SaaS platforms, client portals, and administrative dashboards',
      'Microservices and modular monolithic backend architectures',
      'Robust relational & NoSQL database design with optimized indexing',
      'Enterprise authentication, role-based access control (RBAC), and security',
      'Responsive, accessible, and conversion-optimized UI/UX design'
    ],
    deliverables: [
      'Full-stack production codebase with high test coverage and CI/CD pipelines',
      'Figma design system and responsive frontend component library',
      'Secure REST and GraphQL API layer with OpenAPI/Swagger documentation',
      'Automated staging and production deployment configurations'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    typicalTimeline: '4 to 12 weeks depending on feature scope and data models',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  },
  'mobile-dev': {
    id: 'mobile-dev',
    name: 'Full Stack Mobile Application Development',
    tagline: 'Native and cross-platform iOS and Android apps with frictionless UX.',
    category: 'Mobile Engineering',
    fullDescription:
      'Cynbit engineers high-retention mobile applications across iOS and Android. Whether building consumer apps or field operations tools, we deliver native-grade fluid animations, offline caching, push notifications, and seamless device hardware integrations.',
    capabilities: [
      'Cross-platform development with unified codebase (React Native / Flutter)',
      'Native iOS (Swift) and Android (Kotlin) performance-critical modules',
      'Offline-first architecture with background synchronization',
      'Secure payment gateway integrations, biometrics, and push notification systems',
      'App Store and Google Play Store end-to-end submission and compliance'
    ],
    deliverables: [
      'Compiled, signed production binaries for Apple App Store and Google Play Store',
      'Reusable mobile UI component kit matching brand design guidelines',
      'Scalable backend mobile API endpoints with rate limiting and token auth',
      'Crash analytics, crashlytics monitoring, and app store release management'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    typicalTimeline: '6 to 14 weeks from design sprint to store publishing',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  },
  'cloud-solutions': {
    id: 'cloud-solutions',
    name: 'Cloud Infrastructure & DevOps Modernization',
    tagline: 'Resilient, cost-efficient cloud architecture, CI/CD, and infrastructure as code.',
    category: 'Cloud & Infrastructure',
    fullDescription:
      'Cynbit architecturally designs, migrates, and optimizes cloud workloads on AWS, Google Cloud, and Azure. We implement Infrastructure as Code (Terraform), robust Kubernetes orchestration, zero-downtime deployment pipelines, and proactive cloud spend governance.',
    capabilities: [
      'Cloud architecture design and seamless legacy-to-cloud migration',
      'Containerization and orchestration with Docker and Kubernetes (EKS/GKE)',
      'Infrastructure as Code (IaC) with Terraform and automated drift detection',
      'Zero-downtime CI/CD deployment pipelines (GitHub Actions, GitLab CI)',
      'Cloud cost audit, rightsizing, FinOps, and multi-region disaster recovery'
    ],
    deliverables: [
      'Version-controlled Terraform infrastructure repository',
      'Automated deployment pipelines with staging/production parity',
      'Centralized monitoring, logging, and automated alerting system (Datadog/Grafana)',
      'Security audit report, IAM role hardening, and cloud expenditure optimization summary'
    ],
    techStack: ['AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'PostgreSQL'],
    typicalTimeline: '2 to 8 weeks for infrastructure overhaul and migration sprints',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  },
  'digital-marketing': {
    id: 'digital-marketing',
    name: 'Digital Marketing & Technical SEO',
    tagline: 'Data-driven customer acquisition, conversion optimization, and organic search scale.',
    category: 'Growth & Marketing',
    fullDescription:
      'Cynbit combines software engineering rigor with digital growth tactics. We execute technical SEO architectures, Core Web Vitals optimization, programmatic landing pages, and performance marketing funnels designed to predictably generate qualified business leads.',
    capabilities: [
      'Comprehensive technical SEO audits, site speed optimization, and schema markup',
      'Data-driven performance marketing campaigns (Google Ads, Meta, LinkedIn)',
      'Conversion Rate Optimization (CRO) with A/B testing and behavioral heatmaps',
      'Content marketing strategy and competitive organic keyword dominance',
      'Full-funnel attribution modeling and Google Analytics 4 (GA4) dashboard setup'
    ],
    deliverables: [
      'Full technical SEO remediation plan and schema implementation',
      'High-converting landing page templates engineered for lightning-fast loads',
      'Custom analytics reporting dashboard tracking CAC, conversions, and ROI',
      'Ongoing monthly growth strategy, keyword rankings, and organic traffic reporting'
    ],
    techStack: ['Google Analytics 4', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Next.js SEO', 'Meta Ads Manager'],
    typicalTimeline: 'Ongoing agile growth sprints with initial 30-day technical turnaround',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  },
  'strategic-discovery': {
    id: 'strategic-discovery',
    name: 'Strategic Technical Discovery & Solution Architecture',
    tagline: 'Clarity-first technical consulting to define requirements, feasibility, and roadmap.',
    category: 'Consulting & Strategy',
    fullDescription:
      'When your business knows the desired outcome but needs architectural clarity on the right technical path, Cynbit provides structured Discovery Engagements. Our senior architects assess your business goals, evaluate feasibility across AI, Web, Cloud, and Marketing, and deliver an actionable technical execution roadmap.',
    capabilities: [
      'Business requirements elicitation and technical feasibility assessment',
      'Cross-domain architecture blueprints (AI, Cloud, Full Stack, Growth)',
      'Technology stack evaluation and build vs. buy recommendations',
      'Phase-by-phase MVP development roadmap with realistic resource modeling',
      'Interactive wireframing and proof-of-concept scoping'
    ],
    deliverables: [
      'Formal Technical Specification Document (PRD + Architecture Diagram)',
      'Proof-of-Concept scope with milestone-based engineering deliverables',
      'Risk mitigation matrix and security/compliance checklist',
      'Dedicated 1-on-1 strategy briefing with Cynbit senior engineering leads'
    ],
    techStack: ['Architecture Blueprinting', 'System Design', 'Figma Wireframing', 'Feasibility Benchmarking'],
    typicalTimeline: '1 to 2-week structured discovery sprint',
    cynbitContactUrl: 'https://www.cynbit.in/contact'
  }
};
