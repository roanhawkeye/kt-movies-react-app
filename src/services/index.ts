import { createHttpService, HttpService } from './httpService';
import { createMovieService, MovieService } from './movieService';
import { createUserService, UserService } from './userService';


export interface Services {
    http: HttpService;
    movie: MovieService;
    user: UserService;
}

const http = createHttpService('http://localhost:4000');

const services: Services = {
    http,
    movie: createMovieService(http),
    user: createUserService(http),
};

export { services };

