import { Movie, MovieBase, MovieId } from '../../domain';
import { HttpService } from '../httpService';
import { MoviesResponse } from './typings';

export function createMovieService(http: HttpService) {
  const getMovies = async () => {
    const { data } = await http.get<MoviesResponse>('/movies');

    return {
      movies: data.data,
      total: data.total,
    };
  };

  const getMovie = async (movieId: MovieId) => {
    const { data } = await http.get<Movie>(`/movies/${movieId}`);

    return data;
  };

  const saveMovie = async (payload: MovieBase): Promise<Movie> => {
    const { data } = await http.post('/movies', payload);

    return data;
  };

  const editMovie = async (payload: Movie): Promise<Movie> => {
    const { data } = await http.put('/movies', payload);

    return data;
  };

  const deleteMovie = async (movieId: MovieId): Promise<Object> => {
    const response = await http.delete(`/movies/${movieId}`);

    return response;
  };


  return {
        getMovies,
        getMovie,
        saveMovie,
        editMovie,
        deleteMovie,
    };
}