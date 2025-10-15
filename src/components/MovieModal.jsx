import React from 'react';

const MovieModal = ({ movie, isOpen, onClose }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{movie.Title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={movie.Title}
                className="w-full md:w-64 h-96 md:h-80 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Ano:</span>
                  <span className="ml-2 text-gray-600">{movie.Year}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Tipo:</span>
                  <span className="ml-2 text-gray-600 capitalize">{movie.Type}</span>
                </div>
                
                {movie.imdbID && (
                  <div>
                    <span className="font-semibold text-gray-700">IMDb ID:</span>
                    <span className="ml-2 text-gray-600">{movie.imdbID}</span>
                  </div>
                )}
                
                {movie.Plot && (
                  <div>
                    <span className="font-semibold text-gray-700">Sinopse:</span>
                    <p className="mt-1 text-gray-600">{movie.Plot}</p>
                  </div>
                )}
                
                {movie.Director && (
                  <div>
                    <span className="font-semibold text-gray-700">Diretor:</span>
                    <span className="ml-2 text-gray-600">{movie.Director}</span>
                  </div>
                )}
                
                {movie.Actors && (
                  <div>
                    <span className="font-semibold text-gray-700">Atores:</span>
                    <span className="ml-2 text-gray-600">{movie.Actors}</span>
                  </div>
                )}
                
                {movie.Genre && (
                  <div>
                    <span className="font-semibold text-gray-700">Gênero:</span>
                    <span className="ml-2 text-gray-600">{movie.Genre}</span>
                  </div>
                )}
                
                {movie.imdbRating && (
                  <div>
                    <span className="font-semibold text-gray-700">Avaliação IMDb:</span>
                    <span className="ml-2 text-yellow-600 font-bold">{movie.imdbRating}/10</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
