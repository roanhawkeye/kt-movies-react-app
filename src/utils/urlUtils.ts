const urljoin = require('url-join');

interface URLUtils {
    join(...chunks: string[]): string;
}

const join = (...chunks: string[]) => {
  return urljoin(...chunks);
};

export const urlUtils: URLUtils = {
    join,
};