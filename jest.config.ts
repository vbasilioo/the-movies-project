import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react|react-dom|some-other-library-you-use).+\\.js$',
  ],
};

export default config;
