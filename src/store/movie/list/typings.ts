import { Movie } from '../../../domain';


export interface MovieListPayload {
    movies: Movie[];
    total: number;
}

export interface MovieGenresPayload {
    genres: string[];
}

export interface MovieSortOptionsPayload {
    options: string[];
}