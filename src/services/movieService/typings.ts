import { Movie } from '../../domain';

export interface MoviesResponse {
    data: Movie[];
    total: number;
    offset: number;
    limit: number;
}