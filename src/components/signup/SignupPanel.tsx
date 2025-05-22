import React, { useState, useEffect, useRef } from "react";
import { FileBadge, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface SignupPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Touch/swipe logic for panel open/close
const useSwipePanel = (isOpen: boolean, setIsOpen: (open: boolean) => void, panelRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    let startX: number | null = null;
    let startY: number | null = null;
    let isSwiping = false;
    let touchMoved = false;

    // Swipe to close (right swipe on panel)
    const handleTouchStart = (e: TouchEvent) => {
      // Only allow open from right edge
      if (!isOpen && e.touches[0].clientX < window.innerWidth - 40) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
      touchMoved = false;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping || startX === null || startY === null) return;
      const dx = e.touches[0].clientX - startX;
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dy > 40) return; // Ignore vertical scrolls
      if (!isOpen && startX < window.innerWidth - 40) return; // Only open from right edge
      if (Math.abs(dx) > 30) touchMoved = true;
      // Swipe right to close
      if (isOpen && dx > 60) {
        setIsOpen(false);
        isSwiping = false;
      }
      // Swipe left to open (from right edge)
      if (!isOpen && startX > window.innerWidth - 40 && dx < -60) {
        setIsOpen(true);
        isSwiping = false;
      }
    };
    const handleTouchEnd = () => {
      isSwiping = false;
      startX = null;
      startY = null;
    };
    // Attach to panel for close, to window for open
    const panel = panelRef.current;
    if (panel) {
      panel.addEventListener("touchstart", handleTouchStart);
      panel.addEventListener("touchmove", handleTouchMove);
      panel.addEventListener("touchend", handleTouchEnd);
    }
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      if (panel) {
        panel.removeEventListener("touchstart", handleTouchStart);
        panel.removeEventListener("touchmove", handleTouchMove);
        panel.removeEventListener("touchend", handleTouchEnd);
      }
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, setIsOpen, panelRef]);
};

const SignupPanel: React.FC<SignupPanelProps> = ({ isOpen, setIsOpen }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [panelWidth, setPanelWidth] = useState<number>(400);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;

  useSwipePanel(isOpen, setIsOpen, panelRef);

  // Load panel width from localStorage
  useEffect(() => {
    const savedWidth = localStorage.getItem("signupPanelWidth");
    if (savedWidth) {
      setPanelWidth(Number(savedWidth));
    }
  }, []);

  // Save panel width to localStorage
  useEffect(() => {
    localStorage.setItem("signupPanelWidth", panelWidth.toString());
  }, [panelWidth]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};
    
    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Validate description
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    
    // Validate file
    if (!selectedFile) {
      newErrors.file = "File upload is required";
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // In a real app, you would submit the form data to a backend here
      setTimeout(() => {
        setIsSubmitted(false);
        handleClear();
      }, 3000);
    }
  };

  // Handle form clearing
  const handleClear = () => {
    setFullName("");
    setEmail("");
    setDescription("");
    setSelectedFile(null);
    setErrors({});
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  // Handle panel resize
  const handlePanelResize = (sizes: number[]) => {
    const newWidth = Math.max(280, Math.min(1200, sizes[0]));
    setPanelWidth(newWidth);
  };

  return (
    <>
      

      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className={cn(
          "fixed inset-y-0 right-0 z-[999] h-[90vh] my-auto bg-white shadow-lg rounded-l transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "flex flex-col"
        )}
        style={{ width: isMobile ? "calc(100% - 64px)" : `${panelWidth}px` }}
      >


        {/* Toggle Button Inside Panel, left edge */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 top-48 z-[1001] -translate-x-full bg-[#ff9a00] hover:bg-[#ffb84d] p-3 pr-3 hover:pr-5 transition-all duration-300 shadow-md flex flex-col items-center justify-center gap-3"
          aria-label={isOpen ? "Close Signup Panel" : "Open Signup Panel"}
        >
          <div className="relative w-6 h-6">
            <FileBadge
              className={cn(
                "w-6 h-6 text-white absolute transition-all duration-300 delay-300",
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )}
            />
            <ArrowRight
              className={cn(
                "w-6 h-6 text-white absolute transition-all duration-300 delay-300",
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )}
            />
          </div>
          <div className="text-white font-medium whitespace-nowrap mt-2 [writing-mode:vertical-lr]">
            Sign Up
          </div>
        </button>


        {/* Panel Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-[#040809] mb-4">Sign Up</h2>
          
          {/* Instructions */}
          <div className="bg-[#F3EFE1] p-4 mb-6 rounded-md">
            <h3 className="font-medium mb-2">Required Documents</h3>
            <p className="text-sm text-[#040809]">
              Please provide the following information to submit your project:
            </p>
            <ul className="text-sm list-disc pl-5 mt-2 text-[#040809]">
              <li>ZIP file with your project repository (code, README, assets)</li>
              <li>1–2 page document explaining your project</li>
              <li>Short screen-recorded demo video</li>
              <li>Live deployment URL</li>
            </ul>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-md">
              Thank you! Your submission has been received.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={cn(
                    "w-full px-3 py-2 border rounded-md",
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  )}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "w-full px-3 py-2 border rounded-md",
                    errors.email ? "border-red-500" : "border-gray-200"
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              {/* File Upload Field */}
              <div>
                <label htmlFor="file" className="block text-sm font-medium mb-1">
                  Upload File *
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className={cn(
                    "w-full px-3 py-2 border rounded-md",
                    errors.file ? "border-red-500" : "border-gray-200"
                  )}
                />
                {selectedFile && (
                  <p className="text-xs text-gray-500 mt-1">
                    Selected: {selectedFile.name}
                  </p>
                )}
                {errors.file && (
                  <p className="text-red-500 text-xs mt-1">{errors.file}</p>
                )}
              </div>
              
              {/* Text Area for Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Additional Description *
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={cn(
                    "min-h-[100px]",
                    errors.description ? "border-red-500" : "border-gray-200"
                  )}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                )}
              </div>
              
              {/* Form Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="section-btn section-btn--white"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="section-btn"
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </div>
        
        {/* Resizable Handle (only on desktop) */}
        {!isMobile && (
          <div 
            className="absolute left-0 top-0 h-full w-3 cursor-ew-resize flex items-center justify-center hover:bg-gray-100"
            onMouseDown={(e) => {
              e.preventDefault();
              
              const startX = e.clientX;
              const startWidth = panelRef.current?.offsetWidth || 400;
              
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const newWidth = startWidth - (moveEvent.clientX - startX);
                const clampedWidth = Math.max(280, Math.min(1200, newWidth));
                if (panelRef.current) {
                  panelRef.current.style.width = `${clampedWidth}px`;
                }
                setPanelWidth(clampedWidth);
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div className="w-1 h-12 bg-gray-300 rounded-full"></div>
          </div>
        )}
      </div>
      
      {/* Overlay when panel is open */}
      <div
          className={cn(
            "fixed inset-0 bg-black transition-opacity duration-300 z-[998]",
            isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />
        
    </>
  );
};

export default SignupPanel;
