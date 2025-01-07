import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,

    collectCoverage: true,
    coverageDirectory: 'coverage',

    coverageProvider: 'v8',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': [
            'babel-jest',
            { presets: ['next/babel'] }
        ]
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};

export default config;
