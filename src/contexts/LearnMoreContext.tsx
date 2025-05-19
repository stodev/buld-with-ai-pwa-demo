
import React, { createContext, useState, useContext, ReactNode } from "react";
import LearnMoreModal from "@/components/modals/LearnMoreModal";

interface LearnMoreContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LearnMoreContext = createContext<LearnMoreContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useLearnMoreModal = () => useContext(LearnMoreContext);

export const LearnMoreProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <LearnMoreContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <LearnMoreModal isOpen={isModalOpen} onClose={closeModal} />
    </LearnMoreContext.Provider>
  );
};
