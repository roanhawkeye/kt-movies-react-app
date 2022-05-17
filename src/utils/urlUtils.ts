const urljoin = require('url-join');

interface Params {
  [key: string]: any;
}

type Encoder = (component: string) => string;

interface URLUtils {
    join(...chunks: string[]): string;
    toQuery(params: Params): string;
}

const join = (...chunks: string[]) => {
  return urljoin(...chunks);
};

const defaultEncoder: Encoder = arg => arg;

const toQuery = (params: Params, encode: Encoder = defaultEncoder) => {
  return Object.entries(params)
    .filter(([, value]) => typeof value !== 'undefined')
    .reduce((query, [key, value]) => {
      const param = `${key}=${encode(value.toString())}`;

      return query ? query.concat('&', param) : '?'.concat(param);
    }, '');
};


export const urlUtils: URLUtils = {
    join,
    toQuery,
};