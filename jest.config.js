'use strict';

module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   coverageDirectory: 'coverage',
   collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
   coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
   testMatch: ['**.spec.ts'],
   globals: {
      'ts-jest': {
         isolatedModules: true
      }
   },
}