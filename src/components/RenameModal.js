import React, { useContext, useState } from 'react';
import { RenameModalContext } from '../context/RenameModalContext';

const RenameModal = () => {
  const { isOpen, file, close, onRename } = useContext(RenameModalContext);
  const [name, setName] = useState(file?.name || '');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (name.trim()) onRename(file.id, name.trim());
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-xl font-semibold mb-4">Renommer</h2>
        <input
          className="border w-full px-3 py-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={close}>Annuler</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleConfirm}>Valider</button>
        </div>
      </div>
    </div>
  );
};

export default RenameModal;
