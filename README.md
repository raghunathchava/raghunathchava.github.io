# Raghunath Chava - Personal Portfolio Website

Personal portfolio website for Raghunath Chava, showcasing professional experience, expertise in GenAI platform operations, LLMOps, and Responsible AI.

## About

This website showcases the professional profile of Raghunath Chava, Sr Director – GenAI Platform Operations and Founder of BuildWorks.AI. With 27+ years of experience across enterprise platforms, cloud, AIOps, FinOps, and regulated environments.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark/Light Mode** - System preference detection with manual override
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Smooth Animations** - Fade-in and hover effects
- 🎯 **TypeScript** - Type-safe development
- 🎥 **Background Video** - Dynamic video background

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

### Local Development

```bash
npm run dev
```

The development server will start on `http://localhost:3004` (or the next available port).

### Docker Development

```bash
# Build Docker image
docker-compose build

# Start container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

The website will be available at `http://localhost:3004`.

## Project Structure

```
raghunathchava.github.io/
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── BackgroundVideo.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── data/           # Data and configuration
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   └── video.mp4       # Background video
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Pages

- **Home** (`/`) - Hero section, core focus areas, open-source projects, and key statistics
- **About** (`/about`) - Professional summary, expertise, achievements, and certifications
- **Experience** (`/experience`) - Complete career timeline with detailed achievements
- **Projects** (`/projects`) - Showcase of Aistrale and SARAISE open-source platforms
- **Contact** (`/contact`) - Contact information and social links

## Deployment

The website is deployed to GitHub Pages via GitHub Actions. The deployment workflow automatically builds and deploys the site on push to the `main` branch.

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains the production build
# Deploy dist/ contents to your hosting provider
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Contact

- **Email**: info@raghunathchava.com
- **LinkedIn**: [raghunathchava](https://www.linkedin.com/in/raghunathchava)
- **GitHub**: [raghunathchava](https://github.com/raghunathchava)
- **Location**: Hyderabad, Telangana, India

## License

Personal portfolio website - All rights reserved.