/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};