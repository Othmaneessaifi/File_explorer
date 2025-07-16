import React, { useContext, useState } from 'react';
import { FileContext } from '../context/FileContext';

const Toolbar = () => {
  const { createFile, createFolder } = useContext(FileContext);
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        className="border rounded px-3 py-2 w-full md:w-64"
        placeholder="Nom du fichier ou dossier"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => createFile(name)}
        >
          📄 Fichier
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={() => createFolder(name)}
        >
          📁 Dossier
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
