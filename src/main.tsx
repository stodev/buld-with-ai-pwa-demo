import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import { setupNavbarAndParallax } from "./lib/navbarParallax";

setupNavbarAndParallax();

createRoot(document.getElementById("root")!).render(<App />);
