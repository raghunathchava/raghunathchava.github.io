# Raghunath Chava Website

Modern marketing website for Raghunath Chava ERP built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark/Light Mode** - System preference detection with manual override
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Smooth Animations** - Fade-in and hover effects
- 🎯 **TypeScript** - Type-safe development

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

## Dark/Light Mode

The website automatically detects your system preference and applies the appropriate theme. You can manually toggle between light and dark modes using the theme toggle button in the navigation.

The theme preference is saved in localStorage and persists across sessions.

## Project Structure

```
saraise.website/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── assets/            # Static assets
├── index.html         # HTML template
└── package.json       # Dependencies
```

## Deployment

The website is deployed to AWS S3 via GitHub Actions. See `.github/workflows/` for deployment configuration.

