import { BusinessGoal, ExpectedTimeline, OptionItem, ServiceType } from '../types';

export interface StepDefinition {
  stepNumber: number;
  title: string;
  subtitle: string;
  helperText?: string;
}

export const QUESTIONNAIRE_STEPS: StepDefinition[] = [
  {
    stepNumber: 1,
    title: 'What service are you looking for?',
    subtitle: 'Select the primary technology domain or expertise your organization is considering.',
    helperText: 'Pick the closest match or select "Not Sure Yet" for architectural guidance.'
  },
  {
    stepNumber: 2,
    title: 'What is your main business goal?',
    subtitle: 'Define the critical outcome you want Cynbit’s engineering team to help you achieve.',
    helperText: 'This directly influences the architectural approach and recommended tech stack.'
  },
  {
    stepNumber: 3,
    title: 'What is your expected timeline?',
    subtitle: 'When is your organization planning to commence development or implementation?',
    helperText: 'Helps us tailor the recommended deployment pace and scoping sprint.'
  }
];

export const SERVICE_OPTIONS: OptionItem<ServiceType>[] = [
  {
    id: 'ai-automation',
    label: 'AI Automation',
    description: 'Autonomous AI agents, document extraction, intelligent workflows, and custom LLM integrations.',
    iconName: 'Bot'
  },
  {
    id: 'website-dev',
    label: 'Website Development',
    description: 'Scalable modern web applications, client portals, SaaS platforms, and responsive interfaces.',
    iconName: 'Globe'
  },
  {
    id: 'mobile-dev',
    label: 'Mobile Application Development',
    description: 'High-performance iOS and Android native and cross-platform apps with fluid interactions.',
    iconName: 'Smartphone'
  },
  {
    id: 'cloud-solutions',
    label: 'Cloud Solutions',
    description: 'Cloud migration, DevOps automation, Kubernetes, infrastructure resilience, and cost reduction.',
    iconName: 'Cloud'
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing and SEO',
    description: 'Technical SEO, organic search dominance, performance advertising, and conversion optimization.',
    iconName: 'TrendingUp'
  },
  {
    id: 'not-sure',
    label: 'Not Sure Yet',
    description: 'Unclear which technical path fits best? We will evaluate your goals and map the optimal blueprint.',
    iconName: 'Compass'
  }
];

export const GOAL_OPTIONS: OptionItem<BusinessGoal>[] = [
  {
    id: 'automate-tasks',
    label: 'Automate repetitive tasks.',
    description: 'Eliminate manual data entry, routine workflows, and human bottlenecks across your business.',
    iconName: 'Zap'
  },
  {
    id: 'build-new-app',
    label: 'Build a new website or application.',
    description: 'Launch a greenfield digital product, SaaS platform, or customer-facing mobile application from scratch.',
    iconName: 'Code2'
  },
  {
    id: 'improve-software',
    label: 'Improve existing software.',
    description: 'Modernize legacy code, upgrade UI/UX, enhance speed, and add high-value features.',
    iconName: 'Wrench'
  },
  {
    id: 'improve-cloud',
    label: 'Improve cloud infrastructure.',
    description: 'Scale architecture, reduce cloud bills, secure data, and automate deployment pipelines.',
    iconName: 'Server'
  },
  {
    id: 'generate-customers',
    label: 'Generate more customers.',
    description: 'Acquire qualified inbound leads, dominate search rankings, and increase conversion rates.',
    iconName: 'Target'
  },
  {
    id: 'explore-ai',
    label: 'Explore AI opportunities.',
    description: 'Investigate how generative AI and predictive intelligence can create competitive business advantages.',
    iconName: 'Sparkles'
  }
];

export const TIMELINE_OPTIONS: OptionItem<ExpectedTimeline>[] = [
  {
    id: 'immediately',
    label: 'Immediately',
    description: 'Ready to kick off requirements gathering and development sprints right away.',
    badge: 'Urgent Priority',
    iconName: 'Flame'
  },
  {
    id: 'within-1-month',
    label: 'Within 1 month',
    description: 'Actively planning budget and scope to start development within the next 30 days.',
    badge: 'Target Window',
    iconName: 'Calendar'
  },
  {
    id: 'within-3-months',
    label: 'Within 3 months',
    description: 'Evaluating technology partners, preparing specifications, and aligning roadmaps.',
    badge: 'Strategic Planning',
    iconName: 'Clock'
  },
  {
    id: 'just-exploring',
    label: 'Just exploring',
    description: 'Researching technical possibilities, architectural feasibility, and market benchmarks.',
    badge: 'Exploratory Phase',
    iconName: 'Search'
  }
];
