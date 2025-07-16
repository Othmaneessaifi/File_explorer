import React, { createContext, useState } from 'react';
import RenameModal from '../components/RenameModal';

export const RenameModalContext = createContext();

export const RenameModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [onRename, setOnRename] = useState(() => () => {});

  const open = (file, renameCallback) => {
    setFile(file);
    setOnRename(() => renameCallback);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setFile(null);
  };

  return (
    <RenameModalContext.Provider value={{ isOpen, file, open, close, onRename }}>
      {children}
      <RenameModal />
    </RenameModalContext.Provider>
  );
};
