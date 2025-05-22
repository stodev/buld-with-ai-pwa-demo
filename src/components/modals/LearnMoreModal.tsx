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
        className="bg-white p-0 overflow-hidden shadow-lg rounded-lg max-w-2xl w-full animate-slide-in-bottom border border-gray-200"
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
          <DialogTitle className="text-2xl font-semibold">About This Demo</DialogTitle>
          <DialogClose className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="p-6">
          <DialogDescription className="text-base text-[--text-cold-dark]">            
              <div className="space-y-7">
                <p className="leading-relaxed">
                  This site was built as part of an <strong>AI Hackathon demo</strong> to explore how <strong>role-specific professionals</strong> – like designers or frontend specialists – can fill in missing development layers 
                  and build a working PWA using <strong>modern AI tools</strong>.
                </p>
                <p className="leading-relaxed">
                  Instead of using a ready-made template, the entire site was created <strong>from scratch</strong>,
                  based on an internal event brief sent via email. The process included:
                </p>
                <ul className="list-disc list-inside pl-2 text-base space-y-1">
                  <li>
                    AI-assisted wireframes and design systems via <strong>Relume + Figma</strong>
                  </li>
                  <li>
                    Frontend layout with <strong>Builder.io + Lovable</strong>
                  </li>
                  <li>
                    Code refinement and testing in <strong>VSCode + GitHub Copilot</strong>
                  </li>
                </ul>
                <p className="leading-relaxed font-bold text-lg mt-6">Key features:</p>
                <ul className="list-disc list-inside pl-2 text-base space-y-1">
                  <li>Resizable sidebar with swipe gestures and persistent local storage</li>
                  <li>Draggable popup modal with reposition support</li>
                  <li>Micro animations and responsive layout</li>
                  <li>
                    End-to-end AI workflow: idea → design → code → <strong>live deployment</strong> via GitHub + Vercel
                  </li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-md mt-4 text-sm">
                  <p className="leading-relaxed">
                    <strong>Note:</strong> This is not a production-ready product, but a <strong>proof-of-concept</strong> demonstrating how
                    quickly modern AI tools can turn ideas into real, working web experiences.
                  </p>
                </div>
              </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;