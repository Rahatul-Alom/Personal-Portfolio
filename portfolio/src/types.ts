export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  mockupType: 'erp' | 'ecommerce' | 'webapp';
  liveUrl?: string;
  caseStudyUrl?: string;
  repoUrl?: string;
  highlights: string[];
  architectureDetails: string;
  databaseSchema: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database';
  role: string;
  description: string;
  tag: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export interface JourneyItem {
  number: string;
  date: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
