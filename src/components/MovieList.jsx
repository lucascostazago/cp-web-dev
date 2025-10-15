import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 text-lg font-medium mb-2">
          Ops! Algo deu errado
        </div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🎬</div>
        <h3 className="text-xl font-medium text-gray-600 mb-2">
          Nenhum filme encontrado
        </h3>
        <p className="text-gray-500">
          Tente buscar por outro termo ou verifique sua conexão com a internet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default MovieList;
