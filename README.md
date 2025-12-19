# Byond Studios - Modern Digital Agency Website

A high-performance, modern agency website built with **React**, **TypeScript**, and **WebGL**. Designed to showcase web and app development services with a premium aesthetic, smooth animations, and a focus on conversion.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for blazing fast performance.
- **WebGL Hero**: Custom `FloatingLines` background using `three.js` (GLSL shaders).
- **Dark/Light Mode**: Fully supported with system preference detection and persistence.
- **Animations**:
  - Scroll-reveal effects using `framer-motion`.
  - Smooth transitions and hover states.
  - Reduced motion support for accessibility.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Routing**: Client-side routing with `react-router-dom` and lazy loading for optimized bundle sizes.
- **Accessibility**: Semantic HTML, focus management, and ARIA attributes.

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D / WebGL**: Three.js
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── FloatingLines.tsx  # WebGL Background
│   ├── Hero.tsx          # Landing page hero
│   ├── Navbar.tsx        # Responsive navigation
│   └── ...
├── routes/           # Page components (Home, Services, Contact)
├── styles/           # Global styles and Tailwind directives
├── theme/            # Theme context provider (Dark/Light mode)
└── main.tsx          # Application entry point
```

## 🎨 Design System

- **Colors**: Slate (neutrals) + Violet/Indigo (primary/accent).
- **Typography**: Inter (Google Fonts).
- **UI Elements**: Glassmorphism effects, pill-shaped buttons, clean cards.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
