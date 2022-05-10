import { Movie } from '../../../domain';


export interface MovieListPayload {
    movies: Movie[];
    total: number;
}