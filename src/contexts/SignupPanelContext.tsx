
import React, { createContext, useState, useContext, useEffect } from "react";

interface SignupPanelContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SignupPanelContext = createContext<SignupPanelContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useSignupPanel = () => useContext(SignupPanelContext);

export const SignupPanelProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Load panel state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("signupPanelOpen");
    if (savedState === "true") {
      setIsOpen(true);
    }
  }, []);
  
  // Save panel state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("signupPanelOpen", isOpen.toString());
  }, [isOpen]);
  
  return (
    <SignupPanelContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SignupPanelContext.Provider>
  );
};
