
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSignupPanel } from "@/contexts/SignupPanelContext";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen } = useSignupPanel();
  const { openModal } = useLearnMoreModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="sticky top-0 z-[100] justify-center items-stretch flex min-h-[72px] w-full flex-col bg-white px-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex items-center justify-center w-[185px] my-auto">
          <Link to="/" className="self-stretch w-full flex-1 shrink basis-[0%] my-auto pb-[7px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/7acab6692a9d1ec259e220e729ca3ed431bbaa0b"
              alt="Company Logo"
              className="aspect-[4.02] object-contain w-[185px]"
            />
          </Link>
        </div>
        
        {/* Mobile Menu Button - Now positioned on the right */}
        <button 
          className="hidden md:hidden max-md:flex items-center justify-center p-2 z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-[#040809]" />
          ) : (
            <Menu size={24} className="text-[#040809]" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="self-stretch max-md:hidden flex min-w-60 items-center gap-8 text-base justify-center flex-wrap my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-8 text-[#040809] font-normal my-auto">
            {[["Home", "/"], ["About Us", "/about"], ["Submissions", "/submissions"], ["Prizes", "/prizes"]].map(([item, path], index) => (
              <Link 
                key={item} 
                to={path}
                className="text-[#040809] self-stretch gap-1 whitespace-nowrap my-auto hover:text-[#52A8AA] transition-all story-link"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="self-stretch flex items-center gap-4 font-medium justify-center my-auto">
            <button 
              className="text-[#040809] self-stretch border-[color:var(--Color-Neutral-Darkest,#040809)] gap-2 my-auto px-2.5 py-1 border-2 border-solid hover:bg-[#040809] hover:text-white transition-colors transform hover:scale-105"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button 
              className="text-white self-stretch border border-[color:var(--Color-Hippie-Blue,#52A8AA)] gap-2 bg-[#52A8AA] my-auto px-2.5 py-1 border-solid hover:bg-[#3A8A8C] transition-colors transform hover:scale-105"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={cn(
            "fixed inset-0 top-[72px] z-40 bg-white md:hidden",
            "transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col px-5 py-4 h-full">
            <div className="flex flex-col w-full">
              <Link 
                to="/" 
                className="text-[#040809] py-4 border-b border-gray-100 w-full text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-[#040809] py-4 border-b border-gray-100 w-full text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/submissions" 
                className="text-[#040809] py-4 border-b border-gray-100 w-full text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Submissions
              </Link>
              <Link 
                to="/prizes" 
                className="text-[#040809] py-4 border-b border-gray-100 w-full text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Prizes
              </Link>
              <div className="flex flex-row gap-4 mt-6">
                <button 
                  className="text-[#040809] border-[color:var(--Color-Neutral-Darkest,#040809)] flex-1 py-2 border-2 border-solid hover:bg-[#040809] hover:text-white transition-colors transform hover:scale-105"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleSignUpClick(e);
                  }}
                >
                  Sign Up
                </button>
                <button 
                  className="text-white border border-[color:var(--Color-Hippie-Blue,#52A8AA)] flex-1 bg-[#52A8AA] py-2 border-solid hover:bg-[#3A8A8C] transition-colors transform hover:scale-105"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
