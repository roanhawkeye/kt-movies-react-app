import { State } from 'StoreTypes';
import { Movie } from '../../../../domain';

import { selectMovies, selectGenresOptions, selectSortByOptions } from '../selectors';

describe('movie list selectors', () => {
  let state: State;

    beforeEach(()=>{
      state = {
            movie:{
                list:{
                    movies: [{
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
                    }],
                    genres: ['comedy', 'drama'],
                    sortByOptions: ['name', 'release_date'],
                },
            },
        } as State;
    });

    it('select movies selector', () => {
      const expectedOutput: Movie[] =  [{
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
        }];

      const output = selectMovies(state);

        expect(output).toEqual(expectedOutput);
    });

    it('select genre options', () => {
      const expectedOutput = ['comedy', 'drama'];

      const output = selectGenresOptions(state);

        expect(output).toEqual(expectedOutput);
    });

    it('select sortBy options', () => {
      const expectedOutput = ['name', 'release_date'];

      const output = selectSortByOptions(state);

        expect(output).toEqual(expectedOutput);
    });
});

