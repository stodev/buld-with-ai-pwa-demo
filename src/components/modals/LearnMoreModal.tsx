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
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset position when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Mouse event handlers for dragging
  const handleHeaderMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // Prevent text selection while dragging
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        ref={modalRef}
        className="bg-white p-0 overflow-hidden shadow-lg rounded-lg max-w-md w-full animate-slide-in-bottom border border-gray-200"
        style={{
          left: `calc(50% + ${position.x}px)`,
          top: `calc(50% + ${position.y}px)`,
          transform: "translate(-50%, -50%)",
          cursor: isDragging ? "grabbing" : "auto",
          transition: isDragging ? "none" : "box-shadow 0.3s, left 0.3s, top 0.3s",
          position: "fixed",
        }}
      >
        <DialogHeader
          className="p-4 border-b flex justify-between items-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleHeaderMouseDown}
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