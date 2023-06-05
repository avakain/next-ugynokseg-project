"use client"
import React, { createContext, useState } from 'react';
const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [reRender, setReRender] = useState(false);

  const valueToShare = {
    isOpen,
    setOpen,
    reRender,
    setReRender
  }

  return (
    <ModalContext.Provider value={valueToShare}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };