import { createHttpService, HttpService } from './httpService';
import { createMovieService, MovieService } from './movieService';


export interface Services {
    http: HttpService;
    movie: MovieService;
}

const http = createHttpService('http://localhost:4000');

const services: Services = {
    http,
    movie: createMovieService(http),
};

export { services };

