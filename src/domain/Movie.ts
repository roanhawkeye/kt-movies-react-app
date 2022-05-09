export type MovieId = number;

export interface MovieBase {
    title: string;
    poster_path: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: Array<string>;
}

export interface Movie extends MovieBase {
    id: number;
}

