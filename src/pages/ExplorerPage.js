import React from 'react';
import FileExplorer from '../components/FileExplorer';
import Toolbar from '../components/Toolbar';

const ExplorerPage = () => (
  <main className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h5l2 3h9v13H4V4z" />
          </svg>
          File Room
        </h1>
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
