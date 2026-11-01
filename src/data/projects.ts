import type { ProjectItem } from '../types'


export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-Commerce Microservices Platform',
    subtitle: 'Distributed enterprise architecture with Spring Boot & independent databases',
    route: '/projects/ecommerce',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Netflix Eureka', 'Spring Cloud Gateway', 'React', 'Vercel', 'Railway'],
    overview: 'A distributed e-commerce backend built with Java and Spring Boot, decomposing core operations into independent Product, Order, and User services. Designed to eliminate single points of failure and decouple scaling constraints across high-traffic commerce workflows.',
    problemStatement: 'Monolithic commerce systems suffer from coupled database schemas, cascading downtime during sales spikes, and tight inter-team dependencies. This project addresses these scalability bottlenecks using autonomous microservices.',
    architectureDescription: 'Each domain microservice (Product, Order, User) maintains its own isolated MySQL database instance, enforcing domain-driven data boundaries. Netflix Eureka handles dynamic service registry and discovery, while Spring Cloud Gateway provides a single perimeter ingress point handling route dispatching, load balancing, and header propagation. The React client interface is deployed on Vercel, and backend containerized services run on Railway.',
    workflowSteps: [
      'Client initiates request via React storefront on Vercel',
      'API Gateway validates endpoint route and queries Eureka service registry',
      'Target microservice (Product, Order, or User) handles business logic',
      'Isolated MySQL schema persists state via Spring Data JPA and Hibernate',
      'Structured JSON payload with unified HTTP status response returns to client'
    ],
    implementationDetails: [
      'Engineered Product Service managing product catalog, inventory status, and SKU queries',
      'Built Order Service processing purchase transactions and order state persistence',
      'Implemented User Service managing customer profiles and credential verification',
      'Configured Spring Cloud Eureka discovery server for real-time service health registration',
      'Set up Spring Cloud API Gateway for dynamic URI re-routing and perimeter ingress',
      'Implemented individual MySQL database containers to prevent distributed schema coupling'
    ],
    learningOutcomes: [
      'Mastered domain decomposition and database-per-service pattern constraints',
      'Gained deep experience in inter-service communication and registry discovery patterns',
      'Implemented cloud deployments using Vercel (frontend) and Railway (backend)'
    ]
  },
  {
    id: 'csv-platform',
    slug: 'csv-platform',
    title: 'CSV Data Quality & Processing Platform',
    subtitle: 'Containerized automated data validation and cleaning pipeline in Python',
    route: '/projects/csv-platform',
    technologies: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Docker', 'Render'],
    overview: 'An automated backend platform for processing unstructured or dirty CSV files. Provides instantaneous structural profiling, detects missing values, eliminates duplicate records, executes statistical imputation, and outputs clean analysis-ready datasets.',
    problemStatement: 'Raw CSV data exports frequently contain unstandardized missing fields, duplicate transactions, and empty columns that cause downstream machine learning models or SQL ingest scripts to fail.',
    architectureDescription: 'Built with Python and FastAPI, the platform processes incoming multipart CSV payloads through a deterministic 5-stage sequential pipeline. Docker containerization guarantees reproducible execution across environments, with production deployment on Render.',
    workflowSteps: [
      'CSV INPUT: Client uploads tabular file via multipart REST endpoint',
      'ANALYSIS: System evaluates schema headers, data types, and total record counts',
      'VALIDATION: High-speed detection of missing values, anomalies, and duplicates',
      'CLEANING: Median/mode imputation on numerical/categorical columns and pruning empty columns',
      'OUTPUT: Cleaned CSV streamed back with automated audit report log'
    ],
    implementationDetails: [
      'Constructed asynchronous FastAPI backend endpoints for file ingestion and stream responses',
      'Implemented automated missing-value scanning across all dataset columns',
      'Built statistical median imputation for numerical features and mode imputation for categorical features',
      'Integrated deterministic duplicate record detection and removal routines',
      'Created empty-column prune routines to eliminate redundant memory allocations',
      'Packaged full runtime within a lightweight Docker container deployed on Render'
    ],
    learningOutcomes: [
      'Designed high-throughput data processing endpoints with FastAPI and Pandas',
      'Containerized Python runtimes to eliminate deployment drift across platforms',
      'Engineered idempotent data validation pipelines with deterministic audit metrics'
    ]
  },
  {
    id: 'facial-analysis',
    slug: 'facial-analysis',
    title: 'Real-Time Facial Behavior Analysis and Monitoring',
    subtitle: 'Computer-vision geometry pipeline evaluating EAR and MAR for fatigue patterns',
    route: '/projects/facial-analysis',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Facial Landmark Mesh'],
    overview: 'A real-time computer vision system that tracks 468 3D facial landmarks from video feeds, computing geometric ocular and oral aspect ratios to identify micro-behaviors like blinking, yawning, and prolonged eye-closure drowsiness.',
    problemStatement: 'Monitoring operator alertness or study engagement non-invasively requires real-time geometric feature extraction without requiring heavyweight hardware or intrusive physical sensors.',
    architectureDescription: 'The pipeline reads real-time camera frames through OpenCV, feeds them into Google MediaPipe Facial Mesh to capture landmark coordinates, and applies vector geometry to calculate Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR). Temporal window thresholds distinguish natural blinking and talking from sustained drowsiness indicators.',
    workflowSteps: [
      'Video stream capture via OpenCV camera feed',
      'MediaPipe face mesh extraction of 468 landmark coordinates (3D mesh)',
      'Vector calculation of Eye Aspect Ratio (EAR) across 6 eye landmarks',
      'Vector calculation of Mouth Aspect Ratio (MAR) across 8 lip landmarks',
      'Temporal threshold accumulation: if EAR drops below threshold for N consecutive frames, flag fatigue',
      'HUD visual overlay rendering telemetry metrics onto live video buffer'
    ],
    implementationDetails: [
      'Implemented real-time MediaPipe facial mesh tracking running at interactive frame rates',
      'Calculated Euclidean distances between vertical and horizontal eye coordinates for EAR',
      'Derived Mouth Aspect Ratio (MAR) algorithm to detect continuous yawn duration',
      'Constructed temporal threshold state machine to prevent false positives from natural eye blinks',
      'Rendered real-time HUD telemetry bounding markers directly on video stream',
      'Important note: Designed as an engineering exploration in computer vision; does not make clinical, medical, or diagnostic claims'
    ],
    learningOutcomes: [
      'Extracted and computed vector distances on dense 3D facial landmark coordinates',
      'Implemented temporal window filters to smooth real-time video telemetry noise',
      'Optimized frame processing pipelines using OpenCV and NumPy vectorization'
    ]
  },
  {
    id: 'ecoband',
    slug: 'ecoband',
    title: 'EcoBand: Smart IoT-Based Waste Management System',
    subtitle: 'Retrofit IoT waste monitoring and calorific value estimation concept (IEEE SASIGD 2026)',
    route: '/projects/ecoband',
    technologies: ['ESP32', 'ESP32-CAM', 'Ultrasonic HC-SR04', 'Load Cell (HX711)', 'IoT Sensors', 'Telemetry Dashboard'],
    overview: 'An IoT-based retrofit monitoring band concept designed to attach to existing municipal waste bins, transforming conventional containers into smart data nodes for real-time fill-level telemetry, weight monitoring, and municipal resource planning.',
    problemStatement: 'Conventional municipal waste collection follows rigid, unoptimized schedules, causing overflowing bins in high-density areas and fuel-wasting runs to half-empty bins. Upgrading all physical bins is cost-prohibitive.',
    architectureDescription: 'EcoBand is conceived as an affordable retrofit band concept integrating sensor processing with an ESP32 microcontroller. The software calculates fill volume with ultrasonic pulse time-of-flight algorithms and estimates bin mass with load-cell strain conversion routines. A concept extension explores using an ESP32-CAM for waste classification and machine-learning models for calorific value estimation to optimize waste-to-energy plant routing.',
    workflowSteps: [
      'Retrofit band architectural design concept for municipal waste receptacles',
      'Ultrasonic distance pulse time-of-flight calculation algorithm [Implemented]',
      'Load-cell strain gauge ADC signal conversion logic [Implemented]',
      'ESP32 sensor processing and telemetry packet formatting [Implemented]',
      'Dashboard readings, bin fill levels, and status alerts [Simulated - Physical Hardware Unavailable]',
      'ESP32-CAM edge vision classification and calorific estimation [Proposed / Conceptual]'
    ],
    conferencePresentation: 'Presented at IEEE SASIGD 2026 (Hyderabad) as an innovative retrofit approach to smart city waste management.',
    implementedComponents: [
      'ESP32 microcontroller firmware architecture and signal processing routines',
      'Ultrasonic HC-SR04 pulse time-of-flight distance calculation algorithm',
      'Load-cell strain gauge ADC conversion logic (HX711 software protocol)',
      'Telemetry data formatting and local threshold notification logic'
    ],
    simulatedComponents: [
      'Real-time receptacle fill percentage and distance readings (simulated because physical hardware was unavailable)',
      'Load-cell weight values and mass calculation demonstrations (simulated)',
      'Multi-node municipal fleet telemetry monitoring dashboard demonstration'
    ],
    proposedComponents: [
      'Physical retrofit band casing fabrication and municipal container deployment',
      'ESP32-CAM edge optical waste classification on physical bins',
      'Machine learning model estimating calorific potential for waste-to-energy routing',
      'Full-scale municipal GPS fleet dispatch integration'
    ],
    implementationDetails: [
      'Engineered firmware logic for ESP32 microcontrollers to convert ultrasonic time-of-flight into volumetric fill percentage',
      'Developed digital signal conversion routines for HX711 ADC to calculate incremental mass variance',
      'Formulated conceptual calorific estimation methodology correlating waste density with energy recovery',
      'Presented research paper at IEEE SASIGD 2026, Hyderabad',
      'Honest engineering boundary: Firmware routines and software algorithms were developed; sensor values, bin status updates, and dashboard telemetry are simulated because physical hardware was unavailable; physical on-bin deployment and edge vision classification are proposed conceptual extensions'
    ],
    learningOutcomes: [
      'Designed microcontroller firmware algorithms for acoustic reflection and strain-gauge signal processing',
      'Built simulated sensor telemetry dashboards modeling real-time physical device states',
      'Scientific research presentation and defense at an IEEE international conference (IEEE SASIGD 2026)'
    ]
  }
]
