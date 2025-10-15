import React from 'react';

const Header = ({ searchTerm, onSearchChange, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-xl sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="text-4xl mr-3">🎬</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Movie Finder
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Digite o nome do filme..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="px-6 py-4 pr-12 border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-white/40 focus:border-white/60 w-full sm:w-96 bg-gray-900/80 backdrop-blur-md text-black placeholder-gray-300 font-medium text-lg shadow-2xl transition-all duration-300 group-hover:bg-gray-800/90 group-hover:border-white/40 group-hover:shadow-3xl"
                />
                
                {/* Ícone de busca animado */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white/90 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Indicador de digitação */}
                {searchTerm && (
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 animate-pulse">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Sugestões em tempo real */}
                {searchTerm && searchTerm.length > 2 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-600/50 overflow-hidden z-20">
                    <div className="p-3">
                      <div className="text-xs text-gray-300 mb-2 px-2 font-medium">Sugestões:</div>
                      <div className="text-sm text-gray-200 px-3 py-2 hover:bg-gray-700/80 rounded-lg cursor-pointer transition-colors duration-200 border border-transparent hover:border-gray-600/50">
                        🎬 {searchTerm} - Filmes
                      </div>
                      <div className="text-sm text-gray-200 px-3 py-2 hover:bg-gray-700/80 rounded-lg cursor-pointer transition-colors duration-200 border border-transparent hover:border-gray-600/50">
                        ⚡ {searchTerm} - Ação
                      </div>
                      <div className="text-sm text-gray-200 px-3 py-2 hover:bg-gray-700/80 rounded-lg cursor-pointer transition-colors duration-200 border border-transparent hover:border-gray-600/50">
                        🎭 {searchTerm} - Drama
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 focus:ring-4 focus:ring-emerald-300 focus:outline-none flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
