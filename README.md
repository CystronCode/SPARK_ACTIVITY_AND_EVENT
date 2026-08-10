# Spark-IUCEE Web Platform

## Overview
The Spark-IUCEE Web Platform is a modern web application built for the RVCE community. It serves as a central hub for the IUCEE Student Chapter at RV College of Engineering — showcasing student initiatives, dignitaries' messages, podcasts (such as "The Insight" series), club wings, and event information.

## Technology Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure
The repository is structured to separate components, features, and assets cleanly:

```text
Spark-IUCEE/
├── public/
│   └── images/                        # Public static images (banners, event photos, etc.)
├── src/
│   ├── App.css                        # App-level CSS overrides
│   ├── App.jsx                        # Main application layout and routes
│   ├── main.jsx                       # Entry point for React
│   ├── index.css                      # Global Tailwind CSS and styling
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Footer.jsx                 # Site-wide footer with social links
│   │   ├── Navbar.jsx                 # Responsive navigation bar
│   │   ├── PageShell.jsx              # Shared page layout wrapper
│   │   ├── Preloader.jsx              # Animated loading screen
│   │   ├── Reveal.jsx                 # Scroll-triggered reveal animation
│   │   └── ScrollToTopButton.jsx      # Floating scroll-to-top button
│   └── features/
│       ├── activities/
│       │   ├── Activities.jsx         # Activities & events page
│       │   └── assets/events/         # Event photos (70+ images)
│       ├── contact-us/
│       │   └── ContactUs.jsx          # Contact form and information
│       ├── credits/
│       │   └── Credits.jsx            # Development team credits
│       ├── home/
│       │   ├── Home.jsx               # Home page composition
│       │   ├── Hero.jsx               # Hero section with typewriter effect
│       │   ├── BentoGrid.jsx          # Identity (Vision/Mission/About) & Wings sections
│       │   ├── AboutSection.jsx       # About Logo & Dignitaries' Messages
│       │   └── assets/                # Home-specific images (30+ files)
│       ├── office-bearers/
│       │   ├── OfficeBearers.jsx      # Faculty & student committee profiles
│       │   └── assets/                # Member photos (19 files)
│       ├── podcasts/
│       │   └── Podcasts.jsx           # "The Insight" podcast series
│       ├── projects/
│       │   └── Projects.jsx           # Ongoing and past projects showcase
│       ├── reports/
│       │   ├── Reports.jsx            # Reports and documentation page
│       │   └── assets/reports/        # PDF reports (11 files)
│       └── wings/
│           └── Wings.jsx              # Details of the 5 SPARK wings
├── package.json                       # Project metadata and dependencies
├── tailwind.config.js                 # Tailwind CSS configuration
└── vite.config.js                     # Vite build configuration
```

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | Home | Landing page — Hero, Vision/Mission, About Chapter, About Logo, Dignitaries' Messages, Wings |
| `/office-bearers` | OfficeBearers | Faculty advisors, coordinators, and student committee profiles |
| `/wings` | Wings | Details of the 5 SPARK wings |
| `/activities` | Activities | Workshops, events, and activity highlights |
| `/podcasts` | Podcasts | "The Insight" podcast series — Faculty and Club Connect episodes |
| `/reports` | Reports | Reports and documentation |
| `/projects` | Projects | Ongoing and past project showcases |
| `/contact-us` | ContactUs | Contact form and chapter information |
| `/credits` | Credits | Development team credits |

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/spark-rvce/Spark-IUCEE.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Spark-IUCEE
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development
To start the local development server, run:
```bash
npm run dev
```
The application will be accessible at the local URL provided in your terminal (typically `http://localhost:5173`).

### Building for Production
To create an optimized production build, run:
```bash
npm run build
```
The compiled assets will be placed in the `dist` directory. To preview the production build locally, run:
```bash
npm run preview
```

## Contributing
When contributing to this repository, please ensure that your code adheres to the existing styling and architecture patterns.
1. Create a feature branch for your changes.
2. Ensure your code passes any configured linters by running `npm run lint`.
3. Submit a pull request detailing the changes and their intended impact.