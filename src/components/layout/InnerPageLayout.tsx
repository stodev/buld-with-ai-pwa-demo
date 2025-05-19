
import React, { ReactNode, useEffect, useRef } from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

type InnerPageLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({ 
  children, 
  title,
  description 
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Add animation and parallax effect
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add('animate-fade-in');
    }
    
    const handleScroll = () => {
      if (contentRef.current && headerRef.current) {
        const scrollY = window.scrollY;
        const headerHeight = headerRef.current.offsetHeight;
        
        // Apply subtle parallax when scrolling down
        if (scrollY < headerHeight) {
          headerRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="w-full max-md:max-w-full">
      <Navbar />
      <div 
        ref={headerRef} 
        className="bg-[#F3EFE1] py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <h1 className="text-[40px] leading-[48px] tracking-[-0.4px] font-semibold text-[#040809] mb-4 transition-transform">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-[#040809] max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {description}
            </p>
          )}
        </div>
      </div>
      <div 
        ref={contentRef} 
        className="container mx-auto px-6 lg:px-16 py-16"
      >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default InnerPageLayout;
