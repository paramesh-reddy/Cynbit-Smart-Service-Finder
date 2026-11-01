# Cynbit Smart Service Finder

> **Technical Assessment Submission for Full Stack Developer Intern — Cynbit Technologies**  
> Official Website: [https://www.cynbit.in/](https://www.cynbit.in/)  
> Contact Portal: [https://www.cynbit.in/contact](https://www.cynbit.in/contact)

---

## 🚀 Project Overview

The **Cynbit Smart Service Finder** is an interactive, conversion-optimized service discovery prototype built specifically for Cynbit Technologies. 

### The Problem
Cynbit provides multiple specialized technology services:
- **AI Automation and AI Agents**
- **Full Stack Web and Mobile Development**
- **Cloud Infrastructure & DevOps Modernization**
- **Digital Marketing and Technical SEO**

Business prospects often arrive with varied technical literacy or ambiguous project scopes (e.g., wanting to "automate repetitive tasks" or "explore AI" without knowing the architectural difference between an RPA agent and an enterprise web platform). Exploring multiple sections manually causes friction and bounce.

### The Solution
A frictionless 3-step interactive discovery questionnaire backed by a local, deterministic rule-based recommendation engine. It guides visitors through:
1. **Target Service Domain** (including a dedicated *"Not Sure Yet"* architectural triage path)
2. **Core Business Objective**
3. **Execution Timeline**

It delivers a personalized solution brief featuring the matched Cynbit service, engineering rationale, client deliverables, recommended technology stack, timeline guidance, and a 1-click **"Copy Requirements"** & **"Contact Cynbit"** workflow.

---

## 📂 Project Architecture & Folder Structure

```text
cynbit-smart-service-finder/
├── index.html                 # HTML5 entry with Google Fonts (Plus Jakarta Sans, Outfit) & metadata
├── metadata.json              # Applet metadata configuration
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript compilation configuration
├── vite.config.ts             # Vite configuration with Tailwind CSS v4 & React plugin
├── server.ts                  # Optional Express backend API (/api/inquiry, /api/services, /api/health)
├── TECHNICAL_REPORT.md        # Comprehensive technical report on architecture & decision matrix
├── README.md                  # Complete documentation, setup, and deployment guide
└── src/
    ├── main.tsx               # React application entry point
    ├── App.tsx                # Main state controller managing views, answers & modals
    ├── index.css              # Tailwind v4 styles, custom glowing classes & typography
    ├── types/
    │   └── index.ts           # Strict TypeScript contracts (Services, Goals, Recommendations)
    ├── data/
    │   ├── questionnaireData.ts  # Questionnaire step definitions and exact required options
    │   ├── servicesData.ts       # Cynbit technical capabilities, deliverables & tech stacks
    │   └── recommendationRules.ts# Deterministic rule engine, advisory & requirements brief generator
    └── components/
        ├── Header.tsx            # Sticky 3-zone Top Bar Contract with Cynbit branding & reset
        ├── HeroLanding.tsx       # Landing section, value proposition & 4-pillar preview cards
        ├── Questionnaire.tsx     # 3-step animated questionnaire with validation & progress bar
        ├── StepCard.tsx          # Accessible, keyboard-navigable card component with check states
        ├── RecommendationView.tsx# Rich results screen with why-it-matches, benefits & copy CTA
        ├── ServiceDetailModal.tsx# Deep-dive modal into Cynbit service capabilities & deliverables
        ├── DirectInquiryModal.tsx# Client inquiry capture modal with API dispatch & localStorage fallback
        └── Toast.tsx             # Floating notification component for copy & alerts
```

---

## 🎯 Key Feature Implementations

### 1. Landing Section
- Exact heading: **"Find the Right Solution for Your Business."**
- Professional Cynbit dark navy and cyan/indigo design with ambient radial glows.
- Direct **"Start Discovery"** CTA + **"Explore All Services"** capability matrix.
- Interactive deep-dive modal trigger on each service pillar card.

### 2. Interactive Three-Step Questionnaire
- **STEP 1: What service are you looking for?**
  - AI Automation
  - Website Development
  - Mobile Application Development
  - Cloud Solutions
  - Digital Marketing and SEO
  - Not Sure Yet
- **STEP 2: What is your main business goal?**
  - Automate repetitive tasks.
  - Build a new website or application.
  - Improve existing software.
  - Improve cloud infrastructure.
  - Generate more customers.
  - Explore AI opportunities.
- **STEP 3: What is your expected timeline?**
  - Immediately
  - Within 1 month
  - Within 3 months
  - Just exploring

### 3. Rule-Based Recommendation Engine
- **Local & Deterministic**: Runs client-side with 0 external API cost or latency.
- **"Not Sure Yet" Support**: Specifically recommends **"Strategic Technical Discovery & Solution Architecture"**, contextualized by the visitor's chosen business goal.
- **Zero Hallucination Policy**: Adheres strictly to requirements—does not invent fake pricing, SLA uptime scores, or guaranteed revenue figures.
- **Timeline Guidance**: Dynamic advisory based on whether the client needs an immediate 48-hour scoping sprint or exploratory architecture whitepaper.

### 4. Contact & Requirement Export
- **CTA Link**: Directs to `https://www.cynbit.in/contact` in a new tab.
- **Copy Project Requirements**: Copies a clean, professional markdown discovery brief directly to the clipboard with real-time toast feedback.
- **Direct Inquiry Form**: Allows prospects to attach contact info, submit to `/api/inquiry` (with resilient offline/localStorage fallback), and copy complete message briefs.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion v12), Lucide React
- **Backend API**: Node.js, Express, tsx
- **Build Tool**: Vite 8 with `@vitejs/plugin-react` and `@tailwindcss/vite`

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or bun

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cynbit-smart-service-finder.git
cd cynbit-smart-service-finder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The app will run locally at `http://localhost:3000`.

### 4. Build for production
```bash
npm run build
```
This generates the optimized production build in `/dist`.

### 5. Run the full-stack server (optional)
```bash
npm run server
```

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)

#### Option A: Via Vercel Web Dashboard (1-Click)
1. Push your repository to **GitHub** (see instructions below).
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository `cynbit-smart-service-finder`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your application will be live with an SSL certificate within 45 seconds!

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login and deploy
vercel
```

---

## 🐙 Publishing to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: complete Cynbit Smart Service Finder prototype for technical assessment"

# Rename default branch to main
git branch -M main

# Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/cynbit-smart-service-finder.git

# Push to GitHub
git push -u origin main
```

---

## 🧪 Verification & Test Scenarios

The prototype has been validated against all mandatory criteria:
1. **Every Questionnaire Option**: Tested all 6 service options, 6 goal options, and 4 timeline options.
2. **Navigation Flow**: "Previous" and "Next" state transitions persist previously selected choices without data loss.
3. **Validation Enforcement**: "Next" button is disabled and displays a validation alert if the user attempts to proceed without making a selection.
4. **"Not Sure Yet" Scenario**: Correctly triggers "Strategic Technical Discovery & Solution Architecture" with tailored diagnostic advice for the selected goal.
5. **Restart Capability**: Functional from the top header navigation, progress bar reset icon, and results page.
6. **Clipboard Copy**: Generates formatted ASCII/Markdown brief and triggers visual toast confirmation.
7. **Contact Link**: Directs accurately to `https://www.cynbit.in/contact`.
8. **Mobile Responsiveness**: Verified across mobile (375px/390px), tablet (768px), and desktop (1440px).

---

## 📄 Assessment Submission Details

- **Candidate**: Full Stack Developer Intern Applicant
- **Company**: Cynbit Technologies (cynbit.in)
- **Role**: Full Stack Developer Intern
- **Status**: Completed & Verified
