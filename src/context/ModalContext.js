"use client"
import React, { createContext, useState } from 'react';
const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const valueToShare = {
    isOpen,
    setOpen,
    showDeleteModal,
    setShowDeleteModal
  }

  return (
    <ModalContext.Provider value={valueToShare}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };