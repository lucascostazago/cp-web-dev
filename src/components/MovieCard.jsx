import React, { useState } from 'react';

const MovieCard = ({ movie, onMovieClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    onMovieClick(movie);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getFallbackImage = () => {
    // Gerar uma imagem placeholder baseada no título do filme
    const title = movie.Title.replace(/[^a-zA-Z0-9]/g, '');
    const colors = ['FF6B6B', '4ECDC4', '45B7D1', '96CEB4', 'FFEAA7', 'DDA0DD', '98D8C8'];
    const color = colors[title.length % colors.length];
    return `https://via.placeholder.com/400x600/${color}/FFFFFF?text=${encodeURIComponent(movie.Title.substring(0, 15))}`;
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full mb-2"></div>
              <div className="text-gray-500 text-sm">Carregando...</div>
            </div>
          </div>
        )}
        
        {/* Imagem principal */}
        <img
          src={imageError ? getFallbackImage() : (movie.Poster !== 'N/A' ? movie.Poster : getFallbackImage())}
          alt={movie.Title}
          className={`w-full h-80 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        
        {/* Badge do ano */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {movie.Year}
        </div>
        
        {/* Overlay gradiente no bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Badge de tipo */}
        <div className="absolute bottom-3 left-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
          {movie.Type?.charAt(0).toUpperCase() + movie.Type?.slice(1)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
          {movie.Title}
        </h3>
        
        {/* Rating placeholder */}
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600 text-sm">4.5</span>
        </div>
        
        {/* Botão de ação */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
