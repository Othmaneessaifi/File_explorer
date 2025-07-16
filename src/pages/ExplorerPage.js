import React from 'react';
import FileExplorer from '../components/FileExplorer';
import Toolbar from '../components/Toolbar';

const ExplorerPage = () => (
  <main className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">🗂️ File Room</h1>
        <p className="text-sm text-gray-500">Gérez vos fichiers et dossiers de manière intuitive</p>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6">
        <Toolbar />
        <hr className="my-4" />
        <FileExplorer />
      </div>
    </div>
  </main>
);

export default ExplorerPage;
