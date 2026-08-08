# Spark-IUCEE Web Platform

## Overview
The Spark-IUCEE Web Platform is a modern web application built for the RVCE community. It serves as a central hub for student initiatives, podcasts (such as "The Insight" series), club connections, and event information. 

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
├── public/                 # Static assets served at the root path
├── src/
│   ├── assets/             # Internal static assets like images and icons
│   ├── components/         # Reusable UI components used across the application
│   ├── features/           # Feature-specific modules
│   │   ├── activities/     # Activity-related pages and components
│   │   ├── contact-us/     # Contact form and information
│   │   ├── credits/        # Development credits page
│   │   ├── home/           # Landing page features
│   │   ├── office-bearers/ # Profiles and info for office bearers
│   │   │   └── assets/     # Feature-specific assets (e.g. member photos)
│   │   ├── podcasts/       # The Insight podcast series page
│   │   ├── projects/       # Ongoing and past projects showcase
│   │   ├── reports/        # Reports and documentation
│   │   └── wings/          # Information about different club wings
│   ├── App.jsx             # Main application layout and routes
│   ├── main.jsx            # Entry point for React
│   └── index.css           # Global Tailwind CSS and styling
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

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