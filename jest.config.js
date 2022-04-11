module.exports = {
  silent: false,
  rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
  coverageDirectory: '../coverage',
};
