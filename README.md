# Build With AI – PWA Demo

## 1. Project Overview

This project was created as a demo website for an Internal Hackathon Week. Its purpose is to show how a designer, a native HTML/CSS developer, or a backend specialist without deep front-end experience can use AI tools to build a complete working front-end product from scratch.

The process is intentionally focused on non-frontend professionals, aiming to:

- Explore an AI-powered workflow from concept to deployed PWA using no-code, low-code, and hybrid-code tools.
- Rapidly prototype and iterate using real UI components.
- Combine clean HTML/CSS foundations with modern JavaScript frameworks.
- Evaluate how quickly and efficiently a functional app can be built using current AI-assisted tooling.

## 2. AI Tools and Workflow

- ChatGPT and Claude: Used for research, ideation, and identifying useful tools and component strategies.
- Relume: Created sitemap, wireframes, and style guidelines through prompting. Exported to Figma for further refinement.
- Builder.io: Used to build an HTML-ready interactive prototype based on Figma and Relume output.
- Lovable (Builder.io-based generator): Created the actual PWA using prompt-driven generation. Implemented a resizable SidePanel (with localStorage state), modal window, and other demo functionality.
- Visual Studio Code + GitHub Copilot: Used for refinement, styling (semantic + Tailwind), animations, debugging, and enhancement.
- Vercel: Connected for live hosting with automatic deployment on GitHub commits.

## 3. Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS (with some native CSS modules)
- Node.js-based tooling (Node.js v18 or higher recommended)

## 4. How to Run Locally

1. Clone the repository:
   git clone https://github.com/stodev/buld-with-ai-pwa-demo.git
   cd buld-with-ai-pwa-demo

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Optional: Ensure Node.js version 18 or higher is used. Tested with Node.js v20.11.0.

## 5. Live Demo

https://buld-with-ai-pwa-demo.vercel.app/

---

This project is a proof-of-concept for rapid, AI-assisted web development and is not intended as a production-ready frontend codebase.
