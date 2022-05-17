import { urlUtils } from './utils/urlUtils';

export const basename = process.env.BASE_URL_NAME || '';

export const appRoutes = {
    root: urlUtils.join(basename, '/'),
    login: urlUtils.join(basename, '/login'),
    logout: urlUtils.join(basename, '/logout'),
    search: urlUtils.join(basename, '/search'),
    searchWithParams: urlUtils.join(basename, '/search/:searchQuery?'),
};

export const redirectRoutes = [
    appRoutes.search,
];