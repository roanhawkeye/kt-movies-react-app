import { Movie, MovieBase, MovieId } from '../../domain';

export interface MovieService {
    getMovies( params: GetMovieParams ): Promise<MoviesResult>;
    getMovie( movieId: MovieId ): Promise<Movie>;
    saveMovie( payload: MovieBase ): Promise<Movie>;
    editMovie( payload: Movie ): Promise<Movie>;
    deleteMovie( movieId: MovieId): Promise<Object>;
    getGenres(): Promise<GenreResult>;
    getSortOptions(): Promise<SortOptionsResult>;
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

export interface GenreResult {
    genres: string[];
}

export interface SortOptionsResult {
    options: string[];
}

export interface SortByOption {
    id: string;
    name: string;
    diplayName: string;
}