import type { SkillItem } from '../types'


export const SKILL_CATEGORIES = [
  'Programming',
  'Backend',
  'Database',
  'Tools',
  'Core Computer Science',
  'IoT Hardware'
] as const

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    category: 'Programming',
    description: 'Object-oriented language used for enterprise backend microservices and core algorithms.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['OOP', 'Enterprise', 'Multithreading']
  },
  {
    name: 'Python',
    category: 'Programming',
    description: 'Primary language for data manipulation, computer vision algorithms, and FastAPI endpoints.',
    projectConnection: 'CSV Data Quality Platform & Facial Analysis',
    tags: ['Scripting', 'Data', 'Computer Vision']
  },
  {
    name: 'SQL',
    category: 'Programming',
    description: 'Relational query language for schema design, indexed queries, and relational data integrity.',
    projectConnection: 'E-Commerce Microservices (MySQL)',
    tags: ['RDBMS', 'Queries', 'Normalization']
  },

  // Backend
  {
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Enterprise framework for building production-grade, containerized Java microservices.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['Spring Framework', 'Inversion of Control', 'REST']
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    description: 'Designing stateless HTTP endpoints with standard response payloads, status codes, and error schemas.',
    projectConnection: 'E-Commerce Microservices & FastAPI CSV Platform',
    tags: ['HTTP', 'JSON', 'Endpoints']
  },
  {
    name: 'Spring Data JPA',
    category: 'Backend',
    description: 'Data persistence layer reducing boilerplate data access logic via standard repository patterns.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['Repositories', 'ORM', 'Data Layer']
  },
  {
    name: 'Hibernate',
    category: 'Backend',
    description: 'Object-relational mapping provider managing entity lifecycles, caching, and database transactions.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['ORM', 'Entities', 'Persistence']
  },
  {
    name: 'Microservices',
    category: 'Backend',
    description: 'Decoupled domain architectures with isolated databases, service discovery, and gateway routing.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['Distributed Systems', 'Eureka', 'Gateway']
  },

  // Database
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Open-source relational database management system providing ACID-compliant data storage.',
    projectConnection: 'E-Commerce Microservices Platform',
    tags: ['RDBMS', 'ACID', 'Transactions']
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    description: 'Distributed version control system for atomic commits, branch workflows, and history tracking.',
    tags: ['Version Control', 'CLI', 'Branching']
  },
  {
    name: 'GitHub',
    category: 'Tools',
    description: 'Cloud collaboration platform for Git repositories, PR reviews, and CI/CD automation.',
    tags: ['Collaboration', 'CI/CD', 'Open Source']
  },
  {
    name: 'Docker',
    category: 'Tools',
    description: 'Containerization engine ensuring reproducible runtime environments and lightweight deployment.',
    projectConnection: 'CSV Data Quality Platform',
    tags: ['Containers', 'Images', 'DevOps']
  },
  {
    name: 'Postman',
    category: 'Tools',
    description: 'API development and testing suite used for simulating requests, headers, and payload validation.',
    tags: ['API Testing', 'Automation', 'Debugging']
  },
  {
    name: 'IntelliJ IDEA',
    category: 'Tools',
    description: 'Primary IDE for Java and Spring Boot development with refactoring and profiling tools.',
    tags: ['IDE', 'Java Development']
  },
  {
    name: 'VS Code',
    category: 'Tools',
    description: 'Extensible code editor used for Python, React, and IoT firmware editing.',
    tags: ['Editor', 'Frontend', 'Python']
  },
  {
    name: 'MySQL Workbench',
    category: 'Tools',
    description: 'Visual database design and query execution tool for data modeling and indexing audits.',
    tags: ['Database Tool', 'ER Diagrams']
  },
  {
    name: 'Jira',
    category: 'Tools',
    description: 'Issue tracking and project management tool for tracking sprints, tasks, and bugs.',
    tags: ['Agile', 'Tracking', 'Workflow']
  },
  {
    name: 'Vercel',
    category: 'Tools',
    description: 'Edge cloud deployment platform hosting client-side React user interfaces.',
    projectConnection: 'E-Commerce Microservices (Frontend)',
    tags: ['Edge Hosting', 'Frontend Deployment']
  },
  {
    name: 'Railway',
    category: 'Tools',
    description: 'Infrastructure cloud platform hosting containerized Spring Boot backend services.',
    projectConnection: 'E-Commerce Microservices (Backend)',
    tags: ['Cloud Infrastructure', 'Backend Deployment']
  },

  // Core Computer Science
  {
    name: 'Object-Oriented Programming',
    category: 'Core Computer Science',
    description: 'Encapsulation, inheritance, polymorphism, and abstraction principles for maintainable architectures.',
    tags: ['OOP', 'Design Principles', 'Clean Code']
  },
  {
    name: 'DBMS',
    category: 'Core Computer Science',
    description: 'Database management systems, relational algebra, indexing, B-Trees, and concurrency control.',
    tags: ['ACID', 'Indexing', 'Concurrency']
  },
  {
    name: 'Operating Systems',
    category: 'Core Computer Science',
    description: 'Processes, threads, memory management, virtual memory, scheduling algorithms, and I/O systems.',
    tags: ['Concurrency', 'Memory', 'Processes']
  },
  {
    name: 'Computer Networks',
    category: 'Core Computer Science',
    description: 'OSI and TCP/IP protocol stacks, routing algorithms, socket programming, DNS, and HTTP/HTTPS.',
    tags: ['TCP/IP', 'Routing', 'Sockets']
  },

  // IoT Hardware
  {
    name: 'ESP32',
    category: 'IoT Hardware',
    description: 'Dual-core microcontroller with integrated Wi-Fi and Bluetooth for edge computing and sensor integration.',
    projectConnection: 'EcoBand: Smart IoT Waste System & Samsung Program',
    tags: ['Microcontroller', 'Wi-Fi', 'Sensors']
  },
  {
    name: 'ESP32-CAM',
    category: 'IoT Hardware',
    description: 'Compact development board with OV2640 camera module evaluated for proposed edge vision and waste classification concepts.',
    projectConnection: 'EcoBand: Smart IoT Waste System',
    tags: ['Vision at Edge', 'Camera', 'Embedded']
  },
  {
    name: 'Ultrasonic Sensors',
    category: 'IoT Hardware',
    description: 'HC-SR04 pulse time-of-flight distance calculation algorithms modeled for fill-level detection in waste containers.',
    projectConnection: 'EcoBand: Smart IoT Waste System',
    tags: ['Acoustic', 'Fill Level', 'Distance']
  },
  {
    name: 'Load Cell',
    category: 'IoT Hardware',
    description: 'Strain-gauge transducer interfacing principles and HX711 conversion logic for container mass measurement.',
    projectConnection: 'EcoBand: Smart IoT Waste System',
    tags: ['Strain Gauge', 'HX711', 'Mass Measurement']
  },
  {
    name: 'DHT11',
    category: 'IoT Hardware',
    description: 'Digital humidity and temperature sensor for environmental condition monitoring.',
    projectConnection: 'Samsung Innovation Campus IoT Program',
    tags: ['Climate', 'Telemetry', 'Digital Sensor']
  }
]
