import { movieListReducer as reducer, movieListInitialState as initialState, MovieListState } from '../reducer';
import * as actions from '../actions';
import { MovieGenresPayload, MovieListPayload, MovieSortOptionsPayload } from '../typings';

describe('movie list reducer', () => {
  let state: MovieListState;

    beforeEach(() => {
      state = { ...initialState };
    });

    describe(actions.movieListReceived, () => {

        it('received movie list', () => {
          const movieListReceived: MovieListPayload = {
                movies: [
                    {
                        id: 1,
                        title: 'coco',
                        poster_path: 'image',
                        tagline: 'tagline',
                        vote_average: 1,
                        vote_count: 3,
                        release_date: '2004',
                        overview: 'overview',
                        budget: 20,
                        revenue: 25,
                        runtime: 2,
                        genres: ['genre_1', 'genre_2'],
                    },
                    {
                        id: 2,
                        title: 'jurasic',
                        poster_path: 'image',
                        tagline: 'tagline',
                        vote_average: 1,
                        vote_count: 3,
                        release_date: '2004',
                        overview: 'overview',
                        budget: 20,
                        revenue: 25,
                        runtime: 2,
                        genres: ['genre_1', 'genre_2'],
                    },
                    {
                        id: 3,
                        title: 'john',
                        poster_path: 'image',
                        tagline: 'tagline',
                        vote_average: 1,
                        vote_count: 3,
                        release_date: '2004',
                        overview: 'overview',
                        budget: 20,
                        revenue: 25,
                        runtime: 2,
                        genres: ['genre_1', 'genre_2'],
                    }],
                    total: 10,
            };

          const expectedNextState: MovieListState = {
                ...initialState,
                movies: movieListReceived.movies,
            };

          const nextState = reducer(state, actions.movieListReceived(movieListReceived));
            expect(nextState).toEqual(expectedNextState);
        });

        describe(actions.movieGenresReceived, () => {

            it('receives movie genres', () => {
              const genresReceived: MovieGenresPayload = { genres: ['comedy', 'drama'] };
                
              const expectedNextState: MovieListState = {
                    ...initialState,
                    genres: genresReceived.genres,
                };
    
              const nextState = reducer(state, actions.movieGenresReceived(genresReceived));
                expect(nextState).toEqual(expectedNextState);
            });
        });

        describe(actions.movieSortOptionsReceived, () => {

            it('receives movie sortByOptions', () => {
              const sortByOptionsReceived: MovieSortOptionsPayload = { options: ['name', 'release_date'] };
                
              const expectedNextState: MovieListState = {
                    ...initialState,
                    sortByOptions: sortByOptionsReceived.options,
                };
    
              const nextState = reducer(state, actions.movieSortOptionsReceived(sortByOptionsReceived));
                expect(nextState).toEqual(expectedNextState);
            });
        });
    });
});