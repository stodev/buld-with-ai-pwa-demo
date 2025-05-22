# Build With AI – PWA Demo

## 1. Project Overview

This project was created as a demo website for an **Internal Hackathon Week**. The concept was developed entirely from scratch – not by modifying an existing template, but by leveraging a wide range of **AI tools** at each stage of the creative and development process. The initiative was led by a **designer with native HTML/CSS front-end experience**, aiming to demonstrate how **non-technical team members** or **backend developers with limited frontend knowledge** can still create **fully functional PWA web apps** using modern AI tooling.

The objective was to simulate a **full-stack experience**: from a simple email brief for an internal event, to a working product with a dynamic UI and core interactions.

## 2. Key Demo Highlights

- **No pre-made templates were used.** The entire site was built from scratch using AI-assisted tools at every step of the pipeline.
- **Full-stack simulation**: From concept and structure to layout, interactivity, and deployment – all done by a non-frontend specialist.
- **AI-assisted design system**: Sitemap, wireframes, and style guidelines generated in **Relume**, refined in **Figma**, and translated into interactive prototypes in **Builder.io**.
- **Responsive layout with modern UI elements**:
  - A **resizable sidebar panel** that maintains state in **localStorage** and supports **swipe gestures on mobile**.
  - A **modal popup** that can be **repositioned via drag & drop**.
  - **Micro animations** and **intro transitions** for a polished user experience.
- **Iterative development** in **Visual Studio Code** using **GitHub Copilot** for refactoring, bug fixes, and semantic styling.
- **Live deployment** through **Vercel**, with automatic updates triggered by each commit to GitHub.

## 3. AI Tools and Workflow

- **ChatGPT and Claude**: Used for research, ideation, and identifying useful AI tools and components.
- **Relume**: Generated sitemap, wireframes, and style guide via prompts; exported to Figma for design continuity.
- **Builder.io**: Exported interactive, HTML-ready design based on Figma and Relume outputs.
- **Lovable (Builder.io tool)**: Generated the actual PWA with prompt-driven components and site structure. Implemented features like a resizable SidePanel (with persistent localStorage state), Modal for additional info, and more.
- **Visual Studio Code + GitHub Copilot**: Used for further development, hybrid semantic + Tailwind styling, animations, bug fixing, and improvements.
- **Vercel**: Used for external hosting and auto-deployment from GitHub on every commit.

## 4. Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS** (alongside native CSS modules)
- **Node.js-based tooling** (Node.js >= 18 recommended)

## 5. How to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/stodev/buld-with-ai-pwa-demo.git
   cd buld-with-ai-pwa-demo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. *(Optional)* Ensure you are using **Node.js version 18 or higher** for best compatibility. **Tested on 20.11.0**

## 6. Live Demo

[https://buld-with-ai-pwa-demo.vercel.app/](https://buld-with-ai-pwa-demo.vercel.app/)

---

*This project is an experimental showcase designed to explore rapid, AI-assisted web development workflows. It is not optimized or intended for production use.*
