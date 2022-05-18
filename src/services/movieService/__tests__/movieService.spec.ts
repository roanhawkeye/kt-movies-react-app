import { MovieId } from '../../../domain';
import { createHttpService } from '../../httpService';
import { createMovieService } from '../movieService';
import { GetMovieParams, MovieService } from '../typings';


describe('MovieService', () => {
  const http = createHttpService('/');
  const httpGetMock = jest.spyOn(http, 'get');
  const httpPostMock = jest.spyOn(http, 'post');

  const movieService: MovieService = createMovieService(http);

    beforeEach(() => {
        httpGetMock.mockReset();
        httpPostMock.mockReset();
    });

    describe('MovieService.getMovies()', () => {
      let params: GetMovieParams;

        beforeEach(() => {
          params = {
                search: '',
                genre: '',
                sortBy: '',
            };

            httpGetMock
                .mockReset()
                .mockReturnValue(Promise.resolve({
                    data: {
                        data: [],
                        total: 0,
                        offset: 0,
                        limit: 10,
                    },
                }));
        });

        it('makes a GET http request', () => {
            movieService.getMovies(params);

            expect(http.get).toHaveBeenCalled();
        });

        it('includes "search" and "searchBy" when search param provided', () => {
            params.search = 'coco';
            
            movieService.getMovies(params);

            expect(httpGetMock.mock.calls[0][0]).toContain('?search=coco&searchBy=title');
        });

        it('includes "sortBy" and "sortOrder" when sortBy param provided', () => {
            params.sortBy = 'release_date';
            
            movieService.getMovies(params);

            expect(httpGetMock.mock.calls[0][0]).toContain('sortBy=release_date&sortOrder=asc');
        });

        it('includes "search", "searchBy", "filter", "sortBy", "sortOrder"  params in the query', () => {
            params.sortBy = 'release_date';
            params.genre = 'comedy';
            params.search = 'coco';
            
            movieService.getMovies(params);

            expect(httpGetMock.mock.calls[0][0]).toContain('?search=coco&searchBy=title&filter=comedy&sortBy=release_date&sortOrder=asc');
        });

        it('returns received results as movies', async () => {
          const mockResults = [
                { id: 1 },
                { id: 2 },
                { id: 3 }, 
          ];

            httpGetMock.mockReturnValue(Promise.resolve({
                data: {
                    data: mockResults,
                    total: 0,
                    offset: 0,
                    limit: 10,
                },
            }));

            const expectedOutput = {
                movies: mockResults,
                total: 0,
            };

            const result = await movieService.getMovies(params);

            expect(result).toEqual(expectedOutput);
        });
    });

    describe('movieService.getMovie()', () => {
      const movieId: MovieId = 1234;

        beforeEach(() => {
            httpGetMock
                .mockReset()
                .mockReturnValue(Promise.resolve({
                    id: movieId,
                }));
        });

        it('makes a GET http request', () => {
            movieService.getMovie(movieId);

            expect(http.get).toHaveBeenCalled();
        });

        it('includes given movieId as a url param', () => {
            movieService.getMovie(movieId);

            expect(httpGetMock.mock.calls[0][0]).toContain(`/${movieId}`);
        });
    });
});