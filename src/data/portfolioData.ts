import { Project, TechItem, ServiceItem, JourneyItem } from '../types';

export const DEVELOPER_INFO = {
  name: 'Rahatul Alom',
  title: 'Full-Stack Web Developer',
  headlineLine1: 'Building',
  headlineLine2: 'digital',
  headlineLine3: 'experiences.',
  subheadline:
    'Full-Stack Web Developer building modern web applications, business systems and practical digital experiences.',
  introLabel: '01 / INTRO',
  introHeadline: 'I build software for real-world problems.',
  introDescription:
    'I focus on creating modern web applications, practical business systems and digital experiences that are fast, usable and maintainable.',
  philosophyWords: ['Think clear.', 'Build smart.', 'Ship better.'],
  philosophySecondary: 'Code is the tool. The solution is the product.',
  status: 'Available for new roles & projects',
  email: 'muhammadrahatulalom@gmail.com',
  github: '',
  linkedin: '',
};

export const CORE_TECH_LIST = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Express.js',
  'PHP',
  'Laravel',
  'MySQL',
  'MongoDB',
];

export const TECH_ITEMS: TechItem[] = [
  // FRONTEND
  // {
  //   name: 'HTML',
  //   category: 'frontend',
  //   role: 'Semantic Foundation',
  //   description: 'Clean, accessible, and standards-compliant document structures for resilient web experiences.',
  //   tag: 'Markup',
  // },
  // {
  //   name: 'CSS',
  //   category: 'frontend',
  //   role: 'Visual Architecture',
  //   description: 'Spatial layouts, flex/grid systems, responsive typography, and refined modern motion.',
  //   tag: 'Styling',
  // },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    role: 'Utility Framework',
    description: 'Engineered styling pipelines with custom design tokens, dark surfaces, and fluid spacing.',
    tag: 'Framework',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    role: 'Core Client Logic',
    description: 'Modern ES6+ syntax, asynchronous programming, event handling, and DOM performance.',
    tag: 'Language',
  },
  {
    name: 'React',
    category: 'frontend',
    role: 'Frontend UI Library',
    description: 'Component architecture, declarative rendering, custom hooks, and predictable state synchronization.',
    tag: 'UI Library',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    role: 'Production React Framework',
    description: 'Server components, client routing, optimized rendering strategies, and integrated API layers.',
    tag: 'React Framework',
  },

  // BACKEND
  {
    name: 'Express.js',
    category: 'backend',
    role: 'Node.js Backend Framework',
    description: 'Lightweight, unopinionated server frameworks handling routing, middleware pipelines, and auth.',
    tag: 'Node Framework',
  },
  {
    name: 'PHP',
    category: 'backend',
    role: 'Server-Side Processing',
    description: 'Server-side processing, session management, and robust web runtimes for business applications.',
    tag: 'Backend Language',
  },
  {
    name: 'Laravel',
    category: 'backend',
    role: 'Enterprise PHP Framework',
    description: 'Eloquent ORM, authentication scaffolds, migration pipelines, and structured MVC architecture.',
    tag: 'PHP Framework',
  },

  // DATABASE
  {
    name: 'MySQL',
    category: 'database',
    role: 'Relational Database',
    description: 'ACID-compliant relational schemas, indexed queries, foreign keys, and normalized integrity.',
    tag: 'Relational SQL',
  },
  {
    name: 'MongoDB',
    category: 'database',
    role: 'NoSQL Document Store',
    description: 'Flexible JSON-like document modeling, high-throughput storage, and agile aggregation pipelines.',
    tag: 'NoSQL Database',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Web applications',
    tagline: 'Modern applications built with React and Next.js.',
    description:
      'Engineered for speed, accessibility, and high visual fidelity. Building client interfaces that handle complex state seamlessly across devices with zero friction.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    deliverables: [
      'Modular component hierarchies',
      'Client & server state pipelines',
      'Spatial responsive design',
      'Interactive dashboards & tools',
    ],
  },
  {
    number: '02',
    title: 'Business systems',
    tagline: 'Practical systems for real-world business workflows.',
    description:
      'Operational platforms engineered to streamline real-world business operations, role-based workflows, inventory dispatch, and structured reporting.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Express.js'],
    deliverables: [
      'Role-based access authorization',
      'Operational business workflows',
      'Transactional ledger management',
      'Audit logging & system reporting',
    ],
  },
  {
    number: '03',
    title: 'Backend & APIs',
    tagline: 'Backend applications and APIs using Express.js and Laravel.',
    description:
      'Reliable backend systems handling business workflows, secure authentication, RESTful API contracts, middleware validation, and structured data schemas in MySQL and MongoDB.',
    technologies: ['Express.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB'],
    deliverables: [
      'RESTful API architecture',
      'Middleware security & auth handling',
      'Relational & document database schemas',
      'Reliable server-side endpoints',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'erp-system',
    number: '01',
    title: 'SaaS / ERP system',
    category: 'SaaS · Business system',
    tagline: 'A practical SaaS & ERP system designed around real-world operational workflows.',
    description:
      'A practical multi-tenant SaaS and ERP system designed around real-world operational workflows. Built with a robust backend architecture, role-based authorization matrices, and transactional data integrity.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    mockupType: 'erp',
    highlights: [
      'Granular role-based permission matrices across operational departments',
      'ACID-compliant inventory and workflow dispatch transaction ledger',
      'Optimized indexed queries in MySQL for fast record lookups',
      'Server-side validation and structured error handling pipelines',
    ],
    architectureDetails:
      'Engineered using Laravel MVC design pattern with structured service repositories. MySQL maintains relational constraints across orders, users, inventory, and audit logs. Dynamic client interaction managed via modern JavaScript.',
    databaseSchema: ['users', 'roles_permissions', 'inventory_items', 'audit_logs', 'orders_ledger'],
  },
  {
    id: 'ecommerce-platform',
    number: '02',
    title: 'E-commerce platform',
    category: 'E-commerce · Web application',
    tagline: 'High-performance commerce experience with cart synchronization and checkout pipeline.',
    description:
      'A complete e-commerce solution focused on conversion speed, structured product indexing, secure checkout processing, and real-time order status management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    mockupType: 'ecommerce',
    highlights: [
      'Persistent cart state synchronization across client interactions',
      'Structured catalog search and categorical attribute filtering',
      'Secure checkout pipeline with server-side validation',
      'Administrative order review and status lifecycle tracking',
    ],
    architectureDetails:
      'Decoupled architecture connecting responsive semantic HTML5 and custom CSS layouts with PHP backend handlers. MySQL maintains normalized product variations, inventory counts, and order histories.',
    databaseSchema: ['products', 'categories', 'cart_sessions', 'orders', 'order_items', 'customers'],
  },
  {
    id: 'modern-webapp',
    number: '03',
    title: 'Modern web application',
    category: 'Full-stack · Web app',
    tagline: 'Reactive application with asynchronous state pipelines and document storage.',
    description:
      'A modern full-stack web application designed for fast, dynamic interactions. Combines React and Next.js frontend interfaces with an Express.js API backend and MongoDB document store.',
    technologies: ['React', 'Next.js', 'Express.js', 'MongoDB'],
    mockupType: 'webapp',
    highlights: [
      'Component-driven UI architecture with declarative state flow',
      'RESTful Express.js endpoint routing with input sanitization',
      'Flexible MongoDB document modeling for complex data objects',
      'Client-side optimistic updates for immediate user feedback',
    ],
    architectureDetails:
      'Built with Next.js and React delivering optimized UI rendering. An Express.js backend handles authentication tokens and API coordination, while MongoDB provides flexible collection storage.',
    databaseSchema: ['workspaces', 'tasks', 'telemetry_logs', 'user_preferences', 'audit_events'],
  },
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    number: '01',
    date: '[DATE]',
    role: '[ROLE / PROJECT]',
    company: '[PROJECT / COMPANY]',
    description:
      '[DESCRIPTION] — Architected full-stack web solutions, developed modular frontend components in React and Next.js, and implemented secure backend endpoints.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    number: '02',
    date: '[DATE]',
    role: '[ROLE / PROJECT]',
    company: '[PROJECT / COMPANY]',
    description:
      '[DESCRIPTION] — Designed and deployed backend systems using Laravel and Express.js, structured relational database tables in MySQL, and optimized transactional workflows.',
    technologies: ['PHP', 'Laravel', 'Express.js', 'MySQL'],
  },
  {
    number: '03',
    date: '[DATE]',
    role: '[ROLE / PROJECT]',
    company: '[PROJECT / COMPANY]',
    description:
      '[DESCRIPTION] — Engineered scalable data models in MongoDB, built custom administrative interfaces, and streamlined business operations with accessible web tools.',
    technologies: ['MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'],
  },
];

const isDraft = (j: JourneyItem) => /\[.+\]/.test(`${j.date}${j.role}${j.company}`);
export const isDraftJourney = isDraft;
// Unfilled "[PLACEHOLDER]" entries are shown only in dev; production hides them.
export const VISIBLE_JOURNEY: JourneyItem[] = import.meta.env.DEV ? JOURNEY_ITEMS : JOURNEY_ITEMS.filter((j) => !isDraft(j));
