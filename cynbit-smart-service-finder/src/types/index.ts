export type ServiceType =
  | 'ai-automation'
  | 'website-dev'
  | 'mobile-dev'
  | 'cloud-solutions'
  | 'digital-marketing'
  | 'not-sure';

export type BusinessGoal =
  | 'automate-tasks'
  | 'build-new-app'
  | 'improve-software'
  | 'improve-cloud'
  | 'generate-customers'
  | 'explore-ai';

export type ExpectedTimeline =
  | 'immediately'
  | 'within-1-month'
  | 'within-3-months'
  | 'just-exploring';

export interface QuestionnaireAnswers {
  service?: ServiceType;
  goal?: BusinessGoal;
  timeline?: ExpectedTimeline;
}

export interface OptionItem<T extends string> {
  id: T;
  label: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  category: string;
  fullDescription: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
  cynbitContactUrl: string;
}

export interface RecommendationResult {
  id: string;
  serviceName: string;
  matchTier: 'Exact Match' | 'Recommended Solution' | 'Strategic Discovery';
  headline: string;
  whyItMatches: string;
  strategicContext: string;
  benefits: string[];
  keyDeliverables: string[];
  recommendedTechStack: string[];
  timelineAdvisory: string;
  nextSteps: string[];
  isDiscoveryRecommendation: boolean;
  serviceDetail: ServiceDetail;
}
