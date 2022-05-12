import { Movie, MovieBase, MovieId } from '../../domain';

export interface MovieService {
    getMovies( params: GetMovieParams ): Promise<MoviesResult>;
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

export interface GetMovieParams {
    search: string;
    genre?: string;
    sortBy?: string;
}