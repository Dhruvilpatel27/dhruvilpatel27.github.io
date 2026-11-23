// All site content lives here. Source of truth: Dhruvil's current resume (Oct 2026).
// Update this file when the resume changes; components only render it.

export const CONTACT = {
  name: 'Dhruvil Patel',
  location: 'Vancouver, BC',
  email: 'dhruvilpatel.dpp@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dhruvil-patel-dev/',
  github: 'https://github.com/Dhruvilpatel27',
  leetcode: 'https://leetcode.com/Dhruvildragon/',
  resume: `${process.env.PUBLIC_URL}/Dhruvil_Patel_Resume.pdf`,
};

export const HERO = {
  role: 'Software Engineer',
  company: 'Amazon',
  // Typed one after another under the role line.
  rotating: ['AI agents', 'reusable UI platforms', 'secure edge sign-in', 'data-heavy tools', 'cloud services on AWS'],
  intro:
    "I'm a software engineer focused on full-stack product engineering, cloud services and production AI systems. I build web platforms, backend services and AI tools end to end, and I care most about making AI safe to use on real data.",
};

// Terminal card in the hero. Commands type in one after another; output appears below each.
export const TERMINAL = [
  { cmd: 'whoami', out: [['Dhruvil Patel, software engineer at Amazon']] },
  { cmd: 'cat focus.txt', out: [['web apps · AI agents & chat · cloud infrastructure']] },
  { cmd: 'ls stack/', out: [['react  typescript  java  spring-boot'], ['node  python  aws  sql  docker']] },
  {
    cmd: 'git log --oneline career',
    out: [
      ['2025', 'Amazon', 'SDE II · Vancouver'],
      ['2024', 'Amazon', 'Software Development Engineer'],
      ['2023', 'eWorld', 'Full Stack Developer'],
      ['2022', 'Amazon', 'Software Development Engineer'],
      ['2022', 'UNC Charlotte', 'M.S. Computer Science'],
    ],
  },
];

// Grouped by employer stint, newest first. Each role has a short summary and the full resume detail.
export const EXPERIENCE = [
  {
    company: 'Amazon',
    period: '2024 to now',
    work: 'amazon-tax',
    roles: [
      {
        title: 'Software Development Engineer II',
        place: 'Vancouver, BC',
        dates: 'Jul 2025 to now',
        tools: ['Python', 'AWS Bedrock AgentCore', 'React', 'TypeScript', 'CloudFront', 'Lambda@Edge', 'AWS CDK'],
        summary:
          'Built a reusable AI chat platform, made an AI agent safe to change real data, and added single sign-on at the edge, alongside a real-time dashboard, notifications and history views.',
        details: [
          'Designed and built a reusable React chat component library for team websites, with streaming responses, 11 rich response types (tables, forms, charts, confirmations, diffs), session history, file upload and export, taken from prototype to production in under 6 months.',
          'Built Python features for an AI agent on AWS Bedrock AgentCore, for bulk tax-rule automation, with dry runs, user confirmation and verified results before any change is saved.',
          'Built single sign-on at the edge with CloudFront and Lambda@Edge (OIDC, secure cookies, silent token refresh), plus the AWS CDK hosting stack with custom domain and certificates.',
          'Implemented a real-time dashboard UI to track pending items, an in-house notification system for read/unread activity, and timeline and history views for tax entities and business processes.',
          'Added publish safeguards and event-driven integrations to the tax platform, and a Playwright end-to-end release gate.',
        ],
      },
      {
        title: 'Software Development Engineer II',
        place: 'Seattle, WA',
        dates: 'Feb 2025 to Jul 2025',
        tools: ['React', 'Zustand', 'AG Grid', 'Redux', 'Java', 'AWS Lambda', 'Cypress'],
        summary:
          'Extended a React and Redux configuration service, cutting manual effort by 30%, built the UI of an entity data explorer, and added a rollback option and end-to-end tests for the tax platform.',
        details: [
          'Enhanced a configuration management service using React and Redux with customized tenant configurations, block/column support for record-key panels, and save-down settings, reducing manual effort by 30%.',
          'Built the core UI of an entity data explorer: fast AG Grid search that replaced the previous page, entity details, history timeline and relationship views, with Zustand state and in-app feedback built end to end on a Java Lambda.',
          'Built a rollback option for published content and added Cypress end-to-end tests for key workflows that run as release approval steps.',
        ],
      },
      {
        title: 'Software Development Engineer',
        place: 'Seattle, WA',
        dates: 'Jun 2024 to Feb 2025',
        tools: ['React', 'AG Grid', 'React Flow', 'Java', 'DynamoDB', 'SQL Server', 'C#'],
        via: 'Aditi Consulting',
        summary:
          'Worked on Amazon\'s tax content platform: tuned SQL to cut query time by 40%, prototyped a multi-region S3 bulk upload API that halved processing time, and built an entity search tool that saves 630 hours a year.',
        details: [
          'Streamlined SQL queries and database operations in the tax content platform, reducing query execution time by 40% and enabling distributed jobs.',
          'Devised a proof of concept for a bulk upload API with multi-region S3 support, parsers and synthesizers, decreasing processing time by 50% for tax curators importing large datasets.',
          'Built a proof of concept with React, AG Grid and React Flow to speed up entity search and visualize history and relationships, saving 630 annual hours.',
          'Added new configuration types (transaction types, grid and save-down settings) to a Java Lambda and DynamoDB service and its React admin site, backed by load and stress-test canaries.',
        ],
      },
    ],
  },
  {
    company: 'eWorld Enterprise Solution',
    period: '2023 to 2024',
    work: 'eworld',
    roles: [
      {
        title: 'Full Stack Developer',
        place: 'Seattle, WA',
        dates: 'Jun 2023 to Feb 2024',
        tools: ['Java 11', 'Spring Boot', 'Spring Batch', 'RabbitMQ', 'MongoDB', 'Angular'],
        via: 'ScolerTec Inc',
        summary:
          'Designed microservices for federal, state and Medicaid benefits and automated batch jobs to cut processing time by 80%, alongside Angular front ends and JWT and Auth0 security across 500+ endpoints.',
        details: [
          'Designed microservices and RESTful services for scalability and maintainability, reducing processing time by 80% by automating batch jobs for federal, state, and Medicaid benefits.',
          'Built a microservice integrating 20+ interfaces, a RabbitMQ listener microservice, and a plug-and-play auditing and logging framework with Spring AOP and MongoDB.',
          'Built dynamic front ends with Angular 14, RxJS, HTML5, CSS and TypeScript, including animations, reactive forms and component-based navigation.',
          'Implemented secure Java authentication flows with JWT and Auth0 to protect 500+ API endpoints, with efficient, cached SQL queries.',
        ],
      },
    ],
  },
  {
    company: 'Amazon',
    period: '2022 to 2023',
    work: 'amazon-stores',
    roles: [
      {
        title: 'Software Development Engineer',
        place: 'Seattle, WA',
        dates: 'Jul 2022 to Mar 2023',
        tools: ['React', 'TypeScript', 'Java', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'AWS CDK'],
        summary:
          'Worked on inventory tools for 600+ Amazon stores: led the migration of replenishment tools from AngularJS to React, shipped AWS Lambda functions for inventory operations, and built monitoring that cut system issues by 50%.',
        details: [
          'Optimized inventory management tools and services for 600+ Amazon stores.',
          'Led the migration of in-store replenishment tools from AngularJS to React.',
          'Developed and deployed AWS Lambda functions for mission-critical inventory operations, including syncing data between Amazon services and updating inventory locations in DynamoDB.',
          'Added electronic shelf label, shelf tag and product search modules to a shared TypeScript library that powers associate tools on store devices and is used by 100+ packages.',
          'Improved the UI with invalid-scan notifications, an Omnibox component for standardized input, and a better feedback mechanism.',
          'Used AWS (Redshift, IAM, SQS, S3, Route 53, EC2, EKS) to resolve high-severity tickets and built CI/CD pipelines with AWS CDK for fully automated builds and deployments.',
          'Built dashboards, monitors and alarms (DynamoDB throttling, missing metrics, health checks) and change-control safeguards across 6 service and website pipelines, reducing system-related issues by 50%.',
          'Retired a legacy API end to end (model, service, integration tests) and added integration tests for container plugins.',
        ],
      },
    ],
  },
  {
    company: 'Indian Oil',
    period: '2018',
    roles: [
      {
        title: 'Web Development Intern',
        place: 'Delhi, India',
        dates: 'May 2018 to Aug 2018',
        summary: 'Built web pages and front-end features with HTML, CSS and React, and connected them to backend services.',
        tools: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs'],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: 'The Reviewer',
    kind: 'Deep learning API',
    summary:
      'A sentiment analysis API, built on a neural network, that reads student and faculty comments on college products. It runs inside an Android app and was tested with JUnit to 95% coverage, which cut bug reports by 30%.',
    tools: ['Java', 'Spring Boot', 'Hibernate', 'REST API', 'Neural networks'],
    link: { href: 'https://github.com/Dhruvilpatel27/Sentiment_AnalysisSSDI', label: 'GitHub' },
  },
  {
    title: 'Driver Distraction System',
    kind: 'IoT and machine learning',
    summary:
      "A smart device that spots distracted or drowsy drivers. It combines the driver's pulse from an Arduino with facial expression, eye movement and yawn tracking, feeding a Haar-cascade detection model that reached 90% accuracy. Published in IJITEE and IJRASET.",
    tools: ['Python', 'Machine learning', 'Arduino', 'Raspberry Pi'],
    link: { href: 'https://www.ijitee.org/portfolio-item/F4736049620/', label: 'Paper' },
  },
  {
    title: 'GameDigger',
    kind: 'Community web portal',
    summary:
      'A web portal where the UNC Charlotte gaming community shares servers for nostalgic games, with peer-to-peer chat, MongoDB storage, REST APIs and user authentication.',
    tools: ['Node.js', 'MongoDB', 'Mongoose', 'REST API'],
    link: { href: 'https://github.com/Dhruvilpatel27/GameDigger', label: 'GitHub' },
  },
];

// Scrolling tech ribbon under the hero (a short, recognisable subset of SKILLS).
export const SKILLS = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'Ruby'] },
  { label: 'Frameworks & libraries', items: ['React', 'Angular', 'Redux', 'NgRx', 'Zustand', 'RxJS', 'Vue.js', 'AG Grid', 'Node.js', 'Spring Boot & Batch', '.NET (ASP.NET)', 'J2EE'] },
  { label: 'AI', items: ['AWS Bedrock (AgentCore, Knowledge Bases)', 'AI agents', 'Streaming chat UIs', 'LLM safety & guardrails'] },
  { label: 'Web & testing', items: ['HTML', 'SCSS', 'REST', 'JSON', 'XML', 'Playwright', 'Cypress', 'Jest', 'Vitest', 'JUnit', 'Mockito', 'Load testing'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'OpenSearch'] },
  { label: 'Cloud & infrastructure', items: ['AWS Lambda', 'Lambda@Edge', 'CloudFront', 'API Gateway', 'EventBridge', 'ECS Fargate', 'EKS', 'EC2', 'S3', 'SQS', 'SNS', 'Aurora', 'Redshift', 'AWS CDK', 'CloudFormation', 'CloudWatch', 'GCP'] },
  { label: 'Tooling & practice', items: ['Git', 'Bitbucket', 'Docker', 'Kubernetes', 'Jenkins', 'Maven', 'RabbitMQ', 'Swagger', 'CI/CD', 'OpenTelemetry', 'JIRA', 'Linux', 'Agile/Scrum', 'OOP', 'UI/UX'] },
];

export const EDUCATION = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University of North Carolina at Charlotte',
    logo: 'charlotte',
    place: 'Charlotte, NC',
    dates: 'Jan 2021 to May 2022',
    gpa: '4.00',
    note: 'Dual concentration in Data Science and in Software, Systems, and Networks',
  },
  {
    degree: 'Bachelor of Engineering, Computer Science and Engineering',
    school: 'SRM University',
    logo: 'srm',
    place: 'Chennai, India',
    dates: 'Jun 2016 to May 2020',
    gpa: '3.30',
  },
];

// From LinkedIn "Licenses & certifications" (7), newest first.
export const CERTIFICATIONS = [
  { name: 'AWS Academy Graduate: AWS Academy Data Analytics', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Neural Networks and Deep Learning', issuer: 'Coursera', year: '2020' },
  { name: 'Artificial Intelligence, UI/UX', issuer: 'My Captain', year: '2019' },
  { name: 'Data Science Training', issuer: 'Internshala', year: '2019' },
  { name: 'CCIOTA: Internet of Things and Mobile Applications', issuer: 'SRM IST Chennai', year: '2018' },
  { name: 'MOOCs (Cloud Computing, Machine Learning)', issuer: 'NPTEL', year: '2018' },
  { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat', year: '2017 to 2022' },
];

export const PUBLICATION = {
  title: 'Driver Distraction System',
  venue: 'IJITEE and IJRASET journals',
  date: 'Jul 2020',
  href: 'https://www.ijitee.org/portfolio-item/F4736049620/',
};

export const VOLUNTEERING = {
  role: 'Member',
  org: 'Institution of Engineering and Technology (IET)',
  dates: '2016 to now',
};

// LinkedIn recommendations, quoted verbatim ("[His]" replaces "He" in the original).
export const RECOMMENDATIONS = [
  {
    quote:
      'Dhruvil is an extremely focused and talented engineer. He quickly ramped up on all our services and has demonstrated ownership and customer obsessions in the projects he worked in my team. [His] knowledge in AWS services and his ability to learn and be curious are his strengths that helps any team. I strongly recommend him to any engineering manager looking for SDEs.',
    name: 'Swaroop Chiluka',
    title: 'Engineering Manager, Amazon',
    relation: 'Managed Dhruvil directly',
  },
  {
    quote:
      'Dhruvil is hard working and committed Software Engineer. He knows about software development and architecture in and out. He has great problem solving skills. I really enjoyed working with him. He will be great asset for any team.',
    name: 'Qamar Nadeem',
    title: 'SDE2, AWS',
    relation: 'Worked with Dhruvil on the same team',
  },
];

// "Featured work" project picker. Public-safe: no internal service names or codenames
// (full detail lives in dhruvil-work/Dhruvil_Project_Bank.md).
export const FEATURED_WORK = [
  {
    program: 'Amazon Tax · AI',
    stint: 'amazon-tax',
    short: 'AI assistant & agent',
    when: '2024 – now',
    title: 'An AI assistant that tax teams use inside their app',
    what:
      'An AI assistant built into Amazon\'s tax content platform. Tax users ask questions and create tax rules in bulk by chatting, and the assistant answers with interactive tables, forms and confirmations instead of plain text.',
    did: [
      'Designed and built a shared React chat component library for team websites: streaming replies, 11 rich response types, session history, file upload and export, layout modes and translations.',
      'Built Python features for the agent on AWS Bedrock AgentCore for bulk tax-rule automation.',
      'Made AI changes safe: every change runs as a dry run first and needs the user\'s confirmation, and results come from the system, not the model.',
      'Built single sign-on at the edge (CloudFront + Lambda@Edge, OIDC) and the AWS CDK hosting stack with custom domain and certificates.',
    ],
    impact: [
      { value: '<6 mo', label: 'from prototype to production' },
      { value: '11', label: 'rich response types' },
    ],
    tools: ['React', 'TypeScript', 'Python', 'AWS Bedrock AgentCore', 'CloudFront', 'Lambda@Edge', 'AWS CDK', 'OpenTelemetry'],
  },
  {
    program: 'Amazon Tax',
    stint: 'amazon-tax',
    short: 'Tax content platform',
    when: '2024 – now',
    title: 'The tax content platform Amazon tax teams publish with',
    what:
      "A large web platform Amazon's tax teams use to write, review and publish tax content, with calculations, validation and reporting built in.",
    did: [
      'Added publish safeguards, a rollback option and event-driven integrations so other systems stay in sync.',
      'Cut SQL query time by 40% and prototyped a multi-region S3 bulk upload API that halved import time for large datasets.',
      'Took the Angular front end from version 17 to 19 (Material, NgRx, standalone components) without pausing feature work.',
      'Built most of the configuration admin site: 8+ React/Redux modules on a Java Lambda + DynamoDB service with shared Java and TypeScript models, cutting manual setup by 30%.',
    ],
    impact: [
      { value: '40%', label: 'faster SQL queries' },
      { value: '50%', label: 'faster bulk imports' },
      { value: '30%', label: 'less manual setup' },
    ],
    tools: ['Angular', 'NgRx', 'AG Grid', '.NET', 'SQL', 'React', 'Redux', 'Java', 'DynamoDB', 'EventBridge', 'ECS Fargate'],
  },
  {
    program: 'Amazon Tax',
    stint: 'amazon-tax',
    short: 'Entity data explorer',
    when: '2024 – 2026',
    title: 'Entity data explorer with history and relationship views',
    what:
      "A data explorer for searching business entities and understanding them: their details, how they changed over time, and how they relate to each other.",
    did: [
      'Built the first proof of concept with React, AG Grid and React Flow, showing search with history and relationship views; it saved 630 hours a year.',
      'Built the production UI: fast AG Grid search that replaced the old page, entity details, timeline and history filters, and comparison and relationship views.',
      'Moved state to Zustand and added cache eviction and graceful error handling for smoother releases.',
      'Built in-app feedback end to end: API model → Java Lambda → backend-for-frontend → storage.',
      'Added a Playwright end-to-end gate on AWS Fargate that must pass before any release is promoted.',
    ],
    impact: [
      { value: '630 hrs', label: 'saved a year' },
      { value: 'Graph views', label: 'history and relationships' },
      { value: 'E2E gate', label: 'Playwright before every release' },
    ],
    tools: ['React', 'AG Grid', 'React Flow', 'Zustand', 'Cloudscape', 'Java 17', 'OpenSearch', 'Aurora PostgreSQL', 'Playwright'],
  },
  {
    program: 'Amazon Tax · prototype',
    stint: 'amazon-tax',
    short: 'Data-lineage explorer',
    when: 'Apr – Jun 2025',
    title: 'Data-lineage explorer for tax data models',
    what:
      'A prototype for seeing how data connects: which jobs feed which models, when they ran, and which automations depend on each other.',
    did: [
      'Built interactive lineage graphs with expand and collapse to explore upstream and downstream dependencies.',
      'Built timeline views for data jobs and models, plus an automation dependency page.',
      'Added date-range filters and a typed API client with token-based auth.',
      'Used the Cloudscape design system so it looks and behaves like other internal tools.',
    ],
    impact: [
      { value: '3', label: 'views: lineage, timelines, automation' },
      { value: '2 months', label: 'idea to working prototype' },
    ],
    tools: ['React', 'Cloudscape', 'Axios', 'JWT', 'Graph visualization'],
  },
  {
    program: 'Amazon Physical Stores',
    stint: 'amazon-stores',
    short: 'In-store inventory tools',
    when: 'Jul 2022 – Mar 2023',
    title: 'Inventory tools for associates in 600+ Amazon stores',
    what:
      "The software associates use on handheld devices in Amazon's physical stores to count, restock and find inventory, and the services behind it.",
    did: [
      'Optimized inventory tools and services for 600+ stores and led the move of restocking tools from AngularJS to React.',
      'Added electronic shelf label, shelf tag and product search modules to the shared associate-tools library used by 100+ packages.',
      'Built AWS Lambda functions that sync inventory between services and update item locations in DynamoDB.',
      'Added alarms (DynamoDB throttling, missing metrics, health checks) and change-control safeguards across 6 pipelines, and retired a legacy API end to end.',
      'Improved the store app with invalid-scan alerts, a standard input box and better feedback.',
    ],
    impact: [
      { value: '600+', label: 'stores' },
      { value: '100+', label: 'packages use the shared library' },
      { value: '50%', label: 'fewer system issues' },
      { value: '6', label: 'pipelines safeguarded' },
    ],
    tools: ['React', 'TypeScript', 'AngularJS', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'AWS CDK'],
  },
  {
    program: 'eWorld · Public sector',
    stint: 'eworld',
    short: 'Government benefits',
    when: 'Jun 2023 – Feb 2024',
    title: 'Benefits platform for federal, state and Medicaid programs',
    what: 'Software a US state government uses to process federal, state and Medicaid benefit programs.',
    did: [
      'Designed microservices and REST APIs and automated batch jobs, cutting processing time by 80%.',
      'Built a plug-and-play auditing and logging framework with Spring AOP and MongoDB.',
      'Built a microservice integrating 20+ interfaces, and a separate RabbitMQ listener microservice.',
      'Secured 500+ API endpoints with JWT and Auth0, with fast, cached SQL queries.',
      'Built Angular 14 front ends with reactive forms, animations and component-based navigation.',
    ],
    impact: [
      { value: '80%', label: 'less processing time' },
      { value: '500+', label: 'API endpoints secured' },
      { value: '20+', label: 'interfaces connected' },
    ],
    tools: ['Java', 'Spring Boot', 'Spring AOP', 'RabbitMQ', 'MongoDB', 'Angular 14', 'JWT', 'Auth0'],
  },
];
