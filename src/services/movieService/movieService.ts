import { Movie } from '../../domain';
import { HttpService } from '../httpService';
import { MoviesResponse } from './typings';

export interface MovieService {
    getMovies(): Promise<Movie[]>;
}

export function createMovieService(http: HttpService) {
  const getMovies = async () => {
    const { data } = await http.get<MoviesResponse>('/movies');

    return data.data;
  };

  return {
        getMovies,
    };
}