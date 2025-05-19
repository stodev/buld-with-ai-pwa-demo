
import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ isOpen, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [modalOffset, setModalOffset] = useState({ x: -50, y: -50 });
  
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Load position from sessionStorage if available
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('learnMoreModalPosition');
    if (savedPosition) {
      try {
        const parsed = JSON.parse(savedPosition);
        setPosition(parsed);
      } catch (e) {
        console.error('Failed to parse modal position from sessionStorage');
      }
    }
  }, []);

  // Save position to sessionStorage when it changes
  useEffect(() => {
    if (position.x !== 0 || position.y !== 0) {
      sessionStorage.setItem('learnMoreModalPosition', JSON.stringify(position));
    }
  }, [position]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only allow dragging from the header
    if (headerRef.current?.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      
      // Calculate the offset from the mouse position to the modal center
      if (modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();
        setModalOffset({
          x: ((rect.left + rect.right) / 2) - e.clientX,
          y: ((rect.top + rect.bottom) / 2) - e.clientY
        });
      }
      
      // Prevent text selection during drag
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setPosition(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        ref={modalRef}
        className="bg-white p-0 overflow-hidden shadow-lg rounded-lg max-w-md w-full animate-slide-in-bottom border border-gray-200"
        style={{ 
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          cursor: isDragging ? 'grabbing' : 'auto',
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onMouseDown={handleMouseDown}
      >
        <DialogHeader 
          ref={headerRef}
          className="p-4 border-b flex justify-between items-center cursor-grab active:cursor-grabbing"
        >
          <DialogTitle className="text-2xl font-semibold">Learn More</DialogTitle>
          <DialogClose className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="p-6">
          <DialogDescription className="text-base">
            <p className="mb-4">
              Welcome to our AI Hackathon event! This is an opportunity for developers, designers, and AI enthusiasts to come together and build innovative solutions using artificial intelligence.
            </p>
            
            <h3 className="text-lg font-medium mb-2">Event Details</h3>
            <p className="mb-4">
              This hackathon runs for one week, during which participants can work individually or in teams to develop their projects. We provide mentorship, resources, and a collaborative environment to help you bring your ideas to life.
            </p>
            
            <h3 className="text-lg font-medium mb-2">Important Dates</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Registration Deadline: June 15, 2025</li>
              <li>Kickoff Event: June 20, 2025</li>
              <li>Project Submission: June 27, 2025</li>
              <li>Winners Announcement: July 1, 2025</li>
            </ul>
            
            <div className="bg-yellow-50 p-3 rounded-md mt-4 text-sm">
              <p>
                <strong>Note:</strong> This is a demo website created for showcasing web development capabilities. The events and dates mentioned are fictional.
              </p>
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;
