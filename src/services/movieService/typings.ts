import { Movie, MovieBase, MovieId } from '../../domain';

export interface MovieService {
    getMovies(): Promise<MoviesResult>;
    getMovie( movieId: MovieId ): Promise<Movie>;
    saveMovie( payload: MovieBase ): Promise<Movie>;
    editMovie( payload: Movie ): Promise<Movie>;
    deleteMovie( movieId: MovieId): Promise<Object>;
}

export interface MoviesResponse {
    data: Movie[];
    total: number;
    offset: number;
    limit: number;
}

export interface MoviesResult {
    movies: Movie[];
    total: number;
}