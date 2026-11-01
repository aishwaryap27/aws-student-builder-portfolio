# AISHWARYA.EXE — THE INTERACTIVE DIGITAL UNIVERSE
**AWS Student Builder Challenge: Build Your Tech Superpower (November 2026)**  
**Developer:** Aishwarya Pramod (BE Computer Science & Engineering, RNSIT, VTU)  
**System Identity:** `AISHWARYA.EXE`  
**Tagline:** *An engineer in continuous evolution.*  

---

## 1. Project Overview

**AISHWARYA.EXE** is a personal digital universe and futuristic operating environment that transcends conventional developer portfolio templates. Developed specifically for the **AWS Student Builder Challenge (November 2026)**, the platform combines:

1. **A Futuristic Command Dashboard**: A two-column by three-row layout on desktop featuring custom holographic vector artwork, 3D cursor perspective tilt, and real-time telemetry.
2. **Interactive Engineering Laboratories**: Dedicated deep-dive environments for 4 core projects with live in-browser architecture simulators, request routing pipelines, and mathematical telemetry models.
3. **Cinematic Immersion Engine**: A full-screen system initialization boot sequence (with skip and replay triggers) and a high-performance, single-instance HTML5 Canvas particle constellation background.
4. **Gamified Exploration Tracker**: A 5-badge discovery engine synchronized to `localStorage` that rewards curiosity without gating any authentic credentials.
5. **Interactive Diagnostic CLI (`Ctrl + K`)**: Embedded terminal supporting command navigation, history recall, and a hidden developer easter egg.

---

## 2. Verified Candidate Credentials & Information Integrity

All professional data displayed across the universe is 100% authentic and extracted directly from Aishwarya Pramod's academic and engineering records:

- **Degree Program**: Bachelor of Engineering in Computer Science and Engineering, RNS Institute of Technology (Visvesvaraya Technological University), Expected Graduation: 2027.
- **Academic Score**: **9.6 / 10 CGPA** across semesters.
- **Branch Distinction**: Awarded **Medal of Merit** for securing **Branch Topper** position across three semesters.
- **Pre-University Rank**: **10th Rank** in the Karnataka State Pre-University Examination (**98.16%** overall).
- **Secondary School**: Little Rock Indian School (CBSE) — **89.6%**.
- **Industry Experience**: Samsung Innovation Campus — IoT Program (Hardware interfacing, sensor telemetry, display drivers).
- **Conference Presentation**: Presented research on *EcoBand: Smart Waste Management System* at **IEEE SASIGD 2026, Hyderabad**.
- **NPTEL National Certifications**:
  - *Introduction to Machine Learning* — **Top 1% Percentile Elite**.
  - *Demystifying Networks* — **Top 5% Percentile Elite**.
- **Positions of Responsibility**: Treasurer at **IEEE CTSOC** (Managed club budgeting & financial reconciliation), Core Member at **Adroit Club** (Cybersecurity), and Member at **Aikya Club**.
- **Compliance Policy**: All achievements and certifications are rendered strictly as text-based records. No fake certificates, placeholder PDFs, or download buttons are included.

---

## 3. Architecture & Route Directory

```
AISHWARYA.EXE /
├── / ............................ 6-Card Command Hub & Welcome Dashboard
├── /identity .................... Portal 01: The Identity Lab (Personal Dossier & Domain Pillars)
├── /skills ...................... Portal 02: The Skill Matrix (Interactive Constellation & Inspector)
├── /projects .................... Portal 03: The Project Labs (Central Engineering Hangar)
│   ├── /projects/ecommerce ...... Chamber 01: E-Commerce Microservices Platform
│   ├── /projects/csv-platform ... Chamber 02: CSV Data Quality & Processing Platform
│   ├── /projects/facial-analysis  Chamber 03: Real-Time Facial Behavior Analysis
│   └── /projects/ecoband ........ Chamber 04: EcoBand Smart IoT Waste System (IEEE SASIGD 2026)
├── /achievements ................ Portal 04: The Achievement Vault (Verified Text Records & Filters)
├── /journey ..................... Portal 05: The Journey Archive (2020–2027+ Chronological Vector)
└── /connect ..................... Portal 06: The Connection Portal (Email Copy, GitHub & LinkedIn)
```

---

## 4. Deep-Dive Interactive Lab Simulators

### Chamber 01 — E-Commerce Microservices Platform
- **Technologies**: Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, Netflix Eureka, Spring Cloud Gateway, React, Vercel, Railway.
- **Live Simulator**: In-browser request dispatcher demonstrating client ingress → API Gateway routing → Eureka service registration lookup → asynchronous Product/Order service execution → database isolation across distinct MySQL instances.

### Chamber 02 — CSV Data Quality & Processing Platform
- **Technologies**: Python, FastAPI, Pandas, NumPy, Docker, Render.
- **Live Simulator**: 5-stage sequential pipeline inspection (Input Multipart → Schema Analysis → Missing Value/Duplicate Detection → Statistical Imputation → Output Sanitization with JSON audit certification).

### Chamber 03 — Real-Time Facial Behavior Analysis & Monitoring
- **Technologies**: Python, OpenCV, MediaPipe, NumPy.
- **Live Simulator**: Real-time mathematical eye and mouth geometry evaluator. Visitors can toggle simulated behavioral states (*Normal Alert*, *Brief Blink*, *Sustained Eye Closure*, *Prolonged Yawn*) to watch EAR and MAR calculations trigger temporal threshold alarms.
- **Scope Notice**: Algorithmic exploration in computer vision; no medical or clinical diagnostic claims.

### Chamber 04 — EcoBand: Smart IoT-Based Waste Management System
- **Technologies**: ESP32, ESP32-CAM, Ultrasonic HC-SR04, Load Cell (HX711), IoT Sensors.
- **Interactive Simulator**: In-browser municipal receptacle simulator demonstrating ultrasonic distance reflections, strain-gauge mass readings, and estimated waste calorific values (MJ/kg).
- **Presentation**: Research and architectural concept presented at **IEEE SASIGD 2026, Hyderabad**.
- **Rigorous Engineering Partition**:
  - **Implemented (Software & Firmware)**: ESP32 C++/Arduino firmware logic, ultrasonic time-of-flight distance calculation routines, HX711 24-bit ADC mass conversion algorithms, fill-level percentage thresholding, and MQTT/HTTP telemetry JSON payload formatting.
  - **Simulated**: Centralized municipal fleet telemetry dashboard, real-time bin status updates, ultrasonic distance reflections, strain-gauge mass readings, and fill-level demonstrations (simulated in software and in-browser interactive models because physical municipal hardware was unavailable).
  - **Proposed / Planned**: Physical on-bin retrofit casing installation, live municipal bin field deployment, on-device ESP32-CAM optical edge classification, and waste-to-energy calorific estimation ML models (conceptual architectures designed for municipal scaling).

---

## 5. Technology Stack

- **Framework**: React 19 with TypeScript
- **Bundler & Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom sci-fi HUD styling
- **Routing**: React Router DOM (v7 SPA routing)
- **Icons**: Lucide React + custom inline vector assets
- **Canvas System**: Single-instance HTML5 Canvas particle engine with requestAnimationFrame delta time
- **Cloud Hosting Target**: AWS Amplify Hosting

---

## 6. AWS Amplify Hosting Deployment Blueprint

This project is built and optimized for continuous deployment on **AWS Amplify Hosting**:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Single Page Application (SPA) Routing Rewrite Rule

In modern client-side Single Page Applications (SPAs) built with React Router, all application routing is managed in the browser. When a user navigates directly to a deep URL or refreshes their browser on an internal route, the hosting web server must return `/index.html` with a 200 status code rather than returning a 404 error.

#### All Supported Application Routes:
- `/` — Command Hub Dashboard & Welcome Console
- `/identity` — Portal 01: The Identity Lab (Candidate Dossier & Domain Pillars)
- `/skills` — Portal 02: The Skill Matrix (Constellation & Category Filters)
- `/projects` — Portal 03: The Project Labs (Central Engineering Hangar)
- `/projects/ecommerce` — Chamber 01: E-Commerce Microservices Platform
- `/projects/csv-platform` — Chamber 02: CSV Data Quality Platform
- `/projects/facial-analysis` — Chamber 03: Real-Time Facial Behavior Analysis
- `/projects/ecoband` — Chamber 04: EcoBand Smart IoT Waste System
- `/achievements` — Portal 04: The Achievement Vault (Verified Records)
- `/journey` — Portal 05: The Journey Archive (2020–2027+ Timeline)
- `/connect` — Portal 06: The Connection Hub (Email, GitHub, LinkedIn)

#### Required AWS Amplify Console Configuration:
> **Deployment Notice:** This rewrite rule is **not yet active in AWS Amplify** and will be configured manually in the AWS Amplify Console after connecting the repository.

To configure direct URL navigation and browser refresh support:
1. Open the **AWS Amplify Console**.
2. Select the **aws-student-builder-portfolio** application.
3. In the left navigation menu, navigate to **App settings** > **Rewrites and redirects**.
4. Click **Manage rewrites and redirects** or **Add rule**.
5. Configure the rewrite rule:

| Setting | Value |
|---|---|
| **Source address** | `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|svg|txt|woff|woff2|ttf|map|json)$)([^.]+$)/>` |
| **Target address** | `/index.html` |
| **Type** | `200 (Rewrite)` |

6. Save the rule. This ensures that direct deep navigation and page refreshes on any route resolve directly to the React application.

---

## 7. Local Development & Verification

### Prerequisites
- **Node.js**: `v22.12.0+` (or newer compatible Active LTS release)
- **npm**: `v10+`

### Setup Commands
```bash
# Clone the repository
git clone https://github.com/aishwaryap27/aws-student-builder-portfolio.git
cd aws-student-builder-portfolio

# Install dependencies (clean install matching package-lock.json)
npm ci

# Start local development server
npm run dev
```

### Verification & Production Build
```bash
# Run code quality audit
npm run lint

# Compile production bundle
npm run build
```
Build output compiles into the `./dist` folder with zero TypeScript or bundling errors.

---

## 8. Verification & Accessibility

- **Keyboard Navigation**: Full `tab`, `focus-visible`, and `Enter`/`Space` accessibility across all cards and modal dialogs.
- **Screen Reader Support**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`), ARIA labels, and live region announcements.
- **Reduced Motion**: Respects `(prefers-reduced-motion: reduce)` by skipping boot sequence animations and pausing canvas particle movement.
- **Responsive Breakpoints**: Seamlessly responsive across Mobile (<768px), Tablet (768px–1024px), and Desktop (>1024px).

---

*AISHWARYA.EXE // SYSTEM STATUS: ALWAYS LEARNING.*  
*AWS Student Builder Challenge · November 2026*
