import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSignupPanel } from "@/contexts/SignupPanelContext";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen } = useSignupPanel();
  const { openModal } = useLearnMoreModal();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Submissions", path: "/submissions" },
    { label: "Prizes", path: "/prizes" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner flex w-full items-center justify-between flex-wrap">
        <div className="navbar-logo flex items-center justify-center w-[185px] my-auto">
          <Link to="/" className="w-full flex-1 pb-[7px]">
            <img
              src="/site-logo.svg"
              alt="Company Logo"
              className="aspect-[4.02] object-contain w-[185px]"
            />
          </Link>
        </div>
        <button 
          className="navbar-menu-btn hidden md:hidden max-md:flex items-center justify-center p-2 z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-[#040809]" /> : <Menu size={24} className="text-[#040809]" />}
        </button>
        <div className="navbar-links self-stretch max-md:hidden flex min-w-60 items-center gap-8 text-base justify-center flex-wrap my-auto">
          <div className="flex min-w-60 items-center gap-8 text-[#040809] font-normal">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className={cn(
                  "text-[#040809] gap-1 whitespace-nowrap transition-all story-link",
                  label !== "Home" && location.pathname === path && "selected"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 font-medium">
            <button 
              className="section-btn section-btn--white"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button 
              className="section-btn section-btn--accent"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>
        <div 
          className={cn(
            "navbar-mobile fixed inset-0 top-[72px] z-40 bg-white md:hidden transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col px-5 py-4 h-full">
            <div className="flex flex-col w-full">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={cn(
                    "text-[#040809] py-4 border-b border-gray-100 w-full text-lg",
                    // location.pathname === path && "selected"
                    label !== "Home" && location.pathname === path && "selected"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-row gap-4 mt-6">
                <button 
                  className="section-btn section-btn--white flex-1"
                  onClick={(e) => { setIsMenuOpen(false); handleSignUpClick(e); }}
                >
                  Sign Up
                </button>
                <button 
                  className="section-btn section-btn--accent flex-1"
                  onClick={() => { setIsMenuOpen(false); openModal(); }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
