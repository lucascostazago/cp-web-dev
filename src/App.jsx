import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';

// Dados mockados com imagens de alta qualidade
const MOCK_MOVIES = [
  {
    imdbID: '1',
    Title: 'Batman Begins',
    Year: '2005',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX1000.jpg'
  },
  {
    imdbID: '2',
    Title: 'The Dark Knight',
    Year: '2008',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX1000.jpg'
  },
  {
    imdbID: '3',
    Title: 'The Dark Knight Rises',
    Year: '2012',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA4NTI3Nw@@._V1_SX1000.jpg'
  },
  {
    imdbID: '4',
    Title: 'Batman',
    Year: '1989',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX1000.jpg'
  },
  {
    imdbID: '5',
    Title: 'Batman Returns',
    Year: '1992',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX1000.jpg'
  },
  {
    imdbID: '6',
    Title: 'Batman Forever',
    Year: '1995',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1Zi00NzE1LTk2MmEtZDk3N2JkODJmN2M5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX1000.jpg'
  },
  {
    imdbID: '7',
    Title: 'The Avengers',
    Year: '2012',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX1000.jpg'
  },
  {
    imdbID: '8',
    Title: 'Iron Man',
    Year: '2008',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX1000.jpg'
  },
  {
    imdbID: '9',
    Title: 'Spider-Man',
    Year: '2002',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX1000.jpg'
  },
  {
    imdbID: '10',
    Title: 'Superman',
    Year: '1978',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX1000.jpg'
  }
];

// Configuração da API OMDb
const OMDB_API_KEY = '4c1a1b1b';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar filmes
  const searchMovies = async (term = 'batman') => {
    if (!term.trim()) {
      setError('Por favor, digite um termo para buscar');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Buscando filmes para:', term);
      
      const response = await axios.get(OMDB_BASE_URL, {
        params: {
          apikey: OMDB_API_KEY,
          s: term,
          type: 'movie'
        },
        timeout: 5000 // 5 segundos de timeout
      });

      console.log('Resposta da API:', response.data);

      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setError(response.data.Error || 'Nenhum filme encontrado');
        setMovies([]);
      }
    } catch (err) {
      console.error('Erro na API, usando dados mockados:', err);
      
      // Fallback para dados mockados
      if (term.toLowerCase().includes('batman') || term.toLowerCase().includes('dark') || term.toLowerCase().includes('knight')) {
        setMovies(MOCK_MOVIES);
        setError('');
        console.log('Usando dados mockados para demonstração');
      } else {
        // Filtrar dados mockados baseado no termo de busca
        const filteredMovies = MOCK_MOVIES.filter(movie => 
          movie.Title.toLowerCase().includes(term.toLowerCase())
        );
        
        if (filteredMovies.length > 0) {
          setMovies(filteredMovies);
          setError('');
          console.log('Usando dados mockados filtrados para demonstração');
        } else {
          setError(`Nenhum filme encontrado para "${term}". Tente "batman", "dark knight" ou "superman".`);
          setMovies([]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar detalhes de um filme específico
  const getMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(OMDB_BASE_URL, {
        params: {
          apikey: OMDB_API_KEY,
          i: imdbID,
          plot: 'full'
        },
        timeout: 5000
      });

      if (response.data.Response === 'True') {
        return response.data;
      }
    } catch (err) {
      console.error('Erro ao buscar detalhes do filme:', err);
      
      // Fallback: retornar dados mockados básicos
      const mockMovie = MOCK_MOVIES.find(movie => movie.imdbID === imdbID);
      if (mockMovie) {
        return {
          ...mockMovie,
          Plot: 'Sinopse não disponível. Este é um filme de demonstração.',
          Director: 'Diretor não disponível',
          Actors: 'Atores não disponíveis',
          Genre: 'Ação, Aventura',
          imdbRating: '8.5'
        };
      }
    }
    return null;
  };

  // Função para lidar com clique em um filme
  const handleMovieClick = async (movie) => {
    setLoading(true);
    const movieDetails = await getMovieDetails(movie.imdbID);
    setSelectedMovie(movieDetails || movie);
    setIsModalOpen(true);
    setLoading(false);
  };

  // Função para fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  // Carregar filmes iniciais ao montar o componente
  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className="min-h-screen">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={() => searchMovies(searchTerm)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            {searchTerm ? `Resultados para: "${searchTerm}"` : '🎬 Filmes Incríveis'}
          </h2>
          {movies.length > 0 && (
            <p className="text-white/80 text-lg">
              {movies.length} filme{movies.length !== 1 ? 's' : ''} encontrado{movies.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <MovieList
          movies={movies}
          onMovieClick={handleMovieClick}
          loading={loading}
          error={error}
        />
      </main>

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App
