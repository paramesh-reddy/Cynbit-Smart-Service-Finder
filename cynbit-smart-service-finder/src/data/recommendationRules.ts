import { QuestionnaireAnswers, RecommendationResult } from '../types';
import { GOAL_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from './questionnaireData';
import { CYNBIT_SERVICES } from './servicesData';

export function calculateRecommendation(answers: QuestionnaireAnswers): RecommendationResult {
  const { service, goal, timeline } = answers;

  const serviceMeta = SERVICE_OPTIONS.find((s) => s.id === service);
  const goalMeta = GOAL_OPTIONS.find((g) => g.id === goal);
  const timelineMeta = TIMELINE_OPTIONS.find((t) => t.id === timeline);

  const goalText = goalMeta?.label || 'achieve your business objectives';
  const timelineText = timelineMeta?.label || 'your target timeframe';

  // Rule 1: Special Handling for "Not Sure Yet" -> Strategic Technical Discovery
  if (service === 'not-sure' || !service) {
    const baseService = CYNBIT_SERVICES['strategic-discovery'];

    let whyItMatches = `Because you are exploring the best technical route to ${goalText.toLowerCase()}, Cynbit’s Strategic Discovery engagement is the recommended starting point. Rather than committing prematurely to a single tool or stack, our senior architects will analyze your operational bottlenecks, evaluate cross-domain feasibility, and design a concrete blueprint.`;

    let specificGoalContext = '';
    if (goal === 'automate-tasks') {
      specificGoalContext =
        'Our architects will map your current manual processes, estimate automation feasibility across RPA and autonomous AI agents, and provide an objective ROI roadmap.';
    } else if (goal === 'build-new-app') {
      specificGoalContext =
        'We will define your product specifications (PRD), choose between web vs. cross-platform mobile architecture, and outline an agile MVP release plan.';
    } else if (goal === 'improve-software') {
      specificGoalContext =
        'We conduct a non-destructive code and architecture audit of your existing software to pinpoint performance bottlenecks, tech debt, and modernization priorities.';
    } else if (goal === 'improve-cloud') {
      specificGoalContext =
        'We evaluate your cloud posture across compute, storage, security, and networking, identifying immediate cost reduction and reliability wins.';
    } else if (goal === 'generate-customers') {
      specificGoalContext =
        'We analyze your digital presence across technical website performance, organic search visibility, and conversion funnels to recommend the highest-impact growth lever.';
    } else if (goal === 'explore-ai') {
      specificGoalContext =
        'We assess your organization’s data readiness, test agentic AI opportunities, and design a secure, compliant AI adoption roadmap.';
    }

    return {
      id: 'rec-strategic-discovery',
      serviceName: 'Strategic Technical Discovery & Solution Architecture',
      matchTier: 'Strategic Discovery',
      headline: `Tailored Technical Discovery for: ${goalMeta?.label ?? 'General Technical Planning'}`,
      whyItMatches,
      strategicContext: specificGoalContext,
      benefits: [
        'Objective technology evaluation without vendor lock-in',
        'Direct consultation with senior architects and technical leaders',
        'Clear, risk-mitigated MVP roadmap with milestone breakdown',
        'Detailed architectural diagram and technology stack recommendation'
      ],
      keyDeliverables: [
        'Technical Architecture Blueprint & System Topology',
        'Feature Prioritization Matrix (P0 / P1 / P2)',
        'Sprint-based Execution Roadmap and Resource Plan',
        '1-on-1 Discovery Presentation with Cynbit Technical Leads'
      ],
      recommendedTechStack: [
        'System Architecture',
        'Figma UI/UX Wireframing',
        'API Specifications',
        'Feasibility Modeling'
      ],
      timelineAdvisory: getTimelineAdvisory(timeline, 'Strategic Discovery'),
      nextSteps: [
        'Schedule a 45-minute technical discovery session with Cynbit leads',
        'Share high-level requirements or current documentation for preliminary review',
        'Receive a structured discovery brief and engagement roadmap'
      ],
      isDiscoveryRecommendation: true,
      serviceDetail: baseService
    };
  }

  // Rule 2: AI Automation
  if (service === 'ai-automation') {
    const baseService = CYNBIT_SERVICES['ai-automation'];

    let headline = 'AI Automation & Autonomous Agents';
    let why = `You selected AI Automation with the goal to ${goalText.toLowerCase()}. Cynbit's AI engineering team specializes in architecting autonomous agents, intelligent workflow automation, and custom LLM integrations that directly execute business workflows with enterprise reliability.`;
    let strategicContext =
      'Our team integrates AI models into your production data pipeline with robust guardrails, human-in-the-loop validation, and end-to-end observability.';

    if (goal === 'automate-tasks') {
      headline = 'Autonomous Workflow Agents & Task Automation';
      why =
        'Your goal to automate repetitive tasks aligns directly with Cynbit’s core AI automation competency. We deploy intelligent agents capable of handling data processing, document parsing, and multi-system synchronization without continuous human oversight.';
    } else if (goal === 'explore-ai') {
      headline = 'Enterprise AI Opportunity Scoping & Agent Prototyping';
      why =
        'Exploring AI opportunities requires practical prototyping rather than theoretical models. Cynbit builds targeted proofs-of-concept to validate high-value generative and predictive AI use cases for your business.';
    } else if (goal === 'generate-customers') {
      headline = 'AI-Driven Lead Qualification & Intelligent Customer Agents';
      why =
        'To generate more customers, Cynbit designs 24/7 intelligent conversational agents and AI lead scoring workflows that qualify inbound prospects and route them directly to your team.';
    }

    return {
      id: 'rec-ai-automation',
      serviceName: headline,
      matchTier: 'Exact Match',
      headline,
      whyItMatches: why,
      strategicContext,
      benefits: [
        'Significant reduction in manual cycle times and repetitive overhead',
        'Self-healing automated task execution across third-party tools and APIs',
        'Enterprise security, data isolation, and human verification controls',
        'Real-time observability dashboard tracking agent accuracy and throughput'
      ],
      keyDeliverables: [
        'Custom AI Agent pipeline integrated into existing business APIs',
        'Retrieval-Augmented Generation (RAG) system using internal documentation',
        'Agent monitoring dashboard with latency, cost, and accuracy telemetry',
        'Full operational handover documentation and team onboarding'
      ],
      recommendedTechStack: baseService.techStack,
      timelineAdvisory: getTimelineAdvisory(timeline, 'AI Automation'),
      nextSteps: [
        'Schedule technical scoping session with a Cynbit AI solutions engineer',
        'Identify top 2 repetitive workflows or agent use cases for initial pilot',
        'Review architecture blueprint and security verification protocols'
      ],
      isDiscoveryRecommendation: false,
      serviceDetail: baseService
    };
  }

  // Rule 3: Website Development
  if (service === 'website-dev') {
    const baseService = CYNBIT_SERVICES['web-dev'];
    let headline = 'Full Stack Web Application Development';
    let why = `You indicated a need for Website Development to ${goalText.toLowerCase()}. Cynbit delivers responsive, accessible, high-performance web applications built on modern frameworks (React, Next.js, Node.js, TypeScript).`;
    let strategicContext =
      'Whether building customer portals, enterprise dashboards, or public-facing digital platforms, our engineering ensures sub-second response times, modular architecture, and high code quality.';

    if (goal === 'build-new-app') {
      headline = 'Greenfield Full Stack Web Platform Engineering';
      why =
        'Building a new web application requires scalable architectural foundations. Cynbit designs and develops full-stack applications from database schema to responsive frontend component libraries.';
    } else if (goal === 'improve-software') {
      headline = 'Web Application Modernization & Performance Refactoring';
      why =
        'Improving existing software demands careful refactoring without service disruption. Cynbit upgrades tech stacks, modernizes UI/UX, improves Core Web Vitals, and eliminates technical debt.';
    } else if (goal === 'generate-customers') {
      headline = 'High-Converting Web Architecture & Organic Acquisition';
      why =
        'To drive customer acquisition, web applications must be fast, SEO-friendly, and engineered for high conversion rates. Cynbit pairs responsive design with speed optimization and conversion tracking.';
    }

    return {
      id: 'rec-web-dev',
      serviceName: headline,
      matchTier: 'Exact Match',
      headline,
      whyItMatches: why,
      strategicContext,
      benefits: [
        'Production-grade TypeScript architecture designed for horizontal scale',
        'Sub-second page speeds adhering to strict Core Web Vitals benchmarks',
        'Intuitive UI/UX design with responsive mobile and tablet adaptations',
        'Secure authentication, role-based access, and enterprise API security'
      ],
      keyDeliverables: [
        'Complete production web codebase with modular component architecture',
        'Interactive Figma prototype and responsive design system',
        'Documented REST/GraphQL API layer with automated test coverage',
        'CI/CD staging and production deployment configurations'
      ],
      recommendedTechStack: baseService.techStack,
      timelineAdvisory: getTimelineAdvisory(timeline, 'Web Engineering'),
      nextSteps: [
        'Review application wireframes and functional scope with Cynbit',
        'Confirm API integrations, authentication standards, and data schema',
        'Establish sprint milestones and target deployment dates'
      ],
      isDiscoveryRecommendation: false,
      serviceDetail: baseService
    };
  }

  // Rule 4: Mobile Application Development
  if (service === 'mobile-dev') {
    const baseService = CYNBIT_SERVICES['mobile-dev'];
    let headline = 'Full Stack Mobile Application Engineering';
    let why = `You selected Mobile Application Development to ${goalText.toLowerCase()}. Cynbit engineers native-quality iOS and Android applications with fluid 60fps animations, reliable offline synchronization, and intuitive user experiences.`;
    let strategicContext =
      'We leverage modern cross-platform frameworks (React Native, Flutter) and native platform modules (Swift, Kotlin) to maximize development efficiency while delivering flawless hardware integration.';

    if (goal === 'build-new-app') {
      headline = 'End-to-End iOS & Android Application Launch';
      why =
        'Launching a new mobile app requires thorough platform compliance, responsive layouts, and robust backend synchronization. Cynbit manages the full lifecycle from design to App Store and Google Play publishing.';
    } else if (goal === 'improve-software') {
      headline = 'Mobile App Performance Optimization & Modernization';
      why =
        'Upgrading existing mobile applications requires identifying battery drain, memory leaks, crash points, and UI friction. Cynbit refactors codebases to enhance stability and app store ratings.';
    }

    return {
      id: 'rec-mobile-dev',
      serviceName: headline,
      matchTier: 'Exact Match',
      headline,
      whyItMatches: why,
      strategicContext,
      benefits: [
        'Single unified codebase across iOS and Android reducing development cycles',
        'Smooth 60fps native interactions with gesture controls and haptics',
        'Robust offline caching and automatic background synchronization',
        'Complete guidance through Apple App Store and Google Play compliance'
      ],
      keyDeliverables: [
        'Production-signed binaries for iOS (TestFlight / App Store) & Android',
        'Reusable mobile design system and Figma UI/UX screens',
        'High-throughput mobile API backend with rate-limiting and token auth',
        'Real-time crashlytics integration and performance monitoring'
      ],
      recommendedTechStack: baseService.techStack,
      timelineAdvisory: getTimelineAdvisory(timeline, 'Mobile Engineering'),
      nextSteps: [
        'Conduct mobile feature scoping and device requirement review',
        'Define app store account setups and third-party SDK dependencies',
        'Commence interactive prototype and mobile user journey design'
      ],
      isDiscoveryRecommendation: false,
      serviceDetail: baseService
    };
  }

  // Rule 5: Cloud Solutions
  if (service === 'cloud-solutions') {
    const baseService = CYNBIT_SERVICES['cloud-solutions'];
    let headline = 'Cloud Infrastructure & DevOps Modernization';
    let why = `You selected Cloud Solutions with the objective to ${goalText.toLowerCase()}. Cynbit architects scalable, resilient cloud environments on AWS and Google Cloud Platform, automating deployments and optimizing ongoing operational expenditure.`;
    let strategicContext =
      'We practice strict Infrastructure as Code (Terraform), zero-downtime rolling deployments, container orchestration via Kubernetes, and 24/7 observability.';

    if (goal === 'improve-cloud') {
      headline = 'Cloud Optimization, FinOps & Infrastructure Hardening';
      why =
        'Optimizing cloud infrastructure requires a holistic audit of idle resources, network egress, storage tiers, and security perimeters. Cynbit restructures cloud topology to enhance resilience and slash cloud waste.';
    } else if (goal === 'improve-software') {
      headline = 'Cloud-Native Architecture & Microservices Migration';
      why =
        'To improve existing software scalability, Cynbit decomposes bottlenecks into managed cloud microservices, implementing automated auto-scaling and Redis caching layers.';
    }

    return {
      id: 'rec-cloud-solutions',
      serviceName: headline,
      matchTier: 'Exact Match',
      headline,
      whyItMatches: why,
      strategicContext,
      benefits: [
        'Infrastructure as Code (IaC) ensuring reproducibility across environments',
        'Automated CI/CD pipelines eliminating manual deployment errors',
        'Proactive cloud cost governance and resource rightsizing',
        'Multi-region disaster recovery and high-availability architecture'
      ],
      keyDeliverables: [
        'Version-controlled Terraform IaC repository for all cloud resources',
        'Automated GitHub Actions / GitLab CI deployment workflows',
        'Centralized Grafana/Datadog dashboards for logs, metrics, and alerting',
        'Security compliance audit and IAM privilege minimization report'
      ],
      recommendedTechStack: baseService.techStack,
      timelineAdvisory: getTimelineAdvisory(timeline, 'Cloud Modernization'),
      nextSteps: [
        'Conduct initial cloud environment audit or architecture review',
        'Define reliability targets (RPO/RTO) and infrastructure dependencies',
        'Formulate phased migration / modernization sprint plan'
      ],
      isDiscoveryRecommendation: false,
      serviceDetail: baseService
    };
  }

  // Rule 6: Digital Marketing and SEO
  const baseService = CYNBIT_SERVICES['digital-marketing'];
  let headline = 'Data-Driven Digital Marketing & Technical SEO';
  let why = `You selected Digital Marketing and SEO with the goal to ${goalText.toLowerCase()}. Cynbit bridges engineering and digital growth, implementing technical SEO architectures, Core Web Vitals optimization, and high-converting inbound marketing funnels.`;
  let strategicContext =
    'Rather than relying on surface vanity metrics, we focus on qualified business leads, clean conversion attribution, and lasting organic search rankings.';

  if (goal === 'generate-customers') {
    headline = 'Organic Search Dominance & Customer Acquisition Funnels';
    why =
      'Generating predictable customer volume requires compounding organic search visibility coupled with high-converting landing pages. Cynbit audits your search landscape, targets high-intent keywords, and optimizes conversion paths.';
  } else if (goal === 'improve-software') {
    headline = 'Technical SEO Audit & Conversion Rate Optimization (CRO)';
    why =
      'Improving your web software’s customer acquisition requires fixing crawl errors, improving schema markup, speeding up page render times, and executing data-driven A/B usability tests.';
  }

  return {
    id: 'rec-digital-marketing',
    serviceName: headline,
    matchTier: 'Exact Match',
    headline,
    whyItMatches: why,
    strategicContext,
    benefits: [
      'Engineered for long-term compounding organic search engine traffic',
      'Technical SEO remediations that satisfy strict search crawler standards',
      'A/B tested conversion funnels designed to increase lead capture rates',
      'Transparent attribution tracking through GA4 and custom dashboards'
    ],
    keyDeliverables: [
      'Comprehensive 40+ point Technical SEO audit and remediation roadmap',
      'High-converting landing page specifications with schema structured data',
      'Custom Google Analytics 4 (GA4) dashboard tracking key business events',
      'Monthly organic growth and search visibility performance reports'
    ],
    recommendedTechStack: baseService.techStack,
    timelineAdvisory: getTimelineAdvisory(timeline, 'Digital Marketing & SEO'),
    nextSteps: [
      'Provide current website domain for an initial technical SEO audit',
      'Identify top target customer personas and core commercial offerings',
      'Align on 30-day technical remediation and campaign roadmap'
    ],
    isDiscoveryRecommendation: false,
    serviceDetail: baseService
  };
}

function getTimelineAdvisory(timeline: string | undefined, domain: string): string {
  switch (timeline) {
    case 'immediately':
      return `Immediate kickoff recommended. Cynbit can initiate technical scoping within 48 to 72 hours, expediting backlog definition and setting up dedicated sprint resources for ${domain}.`;
    case 'within-1-month':
      return `Target 30-day window. Ideal timeframe to conduct architectural alignment, finalize specifications, and establish development milestones for an orderly sprint kickoff.`;
    case 'within-3-months':
      return `Strategic planning phase. Plenty of lead time to run initial discovery workshops, evaluate technical trade-offs, and allocate specialized engineering squads.`;
    case 'just-exploring':
      return `Exploratory phase. Cynbit can provide high-level architecture advice, feasibility studies, and sample engineering specifications to assist your team’s internal planning.`;
    default:
      return `Cynbit offers flexible sprint scheduling tailored to your organization’s release calendar and internal milestone requirements.`;
  }
}

export function generateRequirementBrief(
  answers: QuestionnaireAnswers,
  recommendation: RecommendationResult
): string {
  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.id === answers.service)?.label ?? 'Unspecified';
  const goalLabel = GOAL_OPTIONS.find((g) => g.id === answers.goal)?.label ?? 'Unspecified';
  const timelineLabel =
    TIMELINE_OPTIONS.find((t) => t.id === answers.timeline)?.label ?? 'Unspecified';

  return `=====================================================
CYNBIT TECHNOLOGIES - PROJECT DISCOVERY BRIEF
Generated via Cynbit Smart Service Finder (cynbit.in)
Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
=====================================================

1. CLIENT DISCOVERY PARAMETERS
- Selected Service Domain: ${serviceLabel}
- Primary Business Objective: ${goalLabel}
- Expected Target Timeline: ${timelineLabel}

2. RECOMMENDED CYNBIT SOLUTION
- Recommended Service: ${recommendation.serviceName}
- Engagement Tier: ${recommendation.matchTier}
- Strategic Fit Summary:
  ${recommendation.whyItMatches}

3. RECOMMENDED TECHNICAL CAPABILITIES
${recommendation.benefits.map((b) => `• ${b}`).join('\n')}

4. KEY CYNBIT DELIVERABLES
${recommendation.keyDeliverables.map((d) => `• ${d}`).join('\n')}

5. RECOMMENDED TECH STACK
${recommendation.recommendedTechStack.join(', ')}

6. TIMELINE & SCOPING ADVISORY
${recommendation.timelineAdvisory}

7. DIRECT CONTACT & NEXT STEPS
- Official Contact Page: https://www.cynbit.in/contact
- Direct Inquiry: Connect with Cynbit Technical Solutions Team
=====================================================`;
}
