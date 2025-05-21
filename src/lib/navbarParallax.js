// src/lib/navbarParallax.js
// Handles --navbar-height and parallax effect for .section-image

function setNavbarHeightVar() {
  // Optionally, detect navbar height dynamically
  const navbar = document.querySelector("nav, .navbar, #navbar");
  let height = 72;
  if (navbar) {
    height = navbar.offsetHeight;
  }
  document.documentElement.style.setProperty("--navbar-height", height + "px");
}

function parallaxSectionImages() {
  const images = document.querySelectorAll('.section-image');
  const scrollY = window.scrollY || window.pageYOffset;
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    // Parallax: move image slower than scroll (0.3x)
    const offset = (rect.top + scrollY) * 0.3 - scrollY * 0.3;
    img.style.setProperty('--parallax-offset', `${offset}px`);
  });
}

export function setupNavbarAndParallax() {
  setNavbarHeightVar();
  parallaxSectionImages();
  window.addEventListener('resize', setNavbarHeightVar);
  window.addEventListener('scroll', parallaxSectionImages, { passive: true });
}

// Optionally, call setupNavbarAndParallax() in main.tsx or after DOMContentLoaded
