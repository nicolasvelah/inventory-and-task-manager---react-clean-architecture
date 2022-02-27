module.exports = {
  rootDir: 'src',
  setupFilesAfterEnv: ['../jest.setup.tsx'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(png)$': 'identity-obj-proxy',
    '\\.(svg)$': 'identity-obj-proxy',
    '\\.(scss)$': 'identity-obj-proxy'
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testEnvironment: 'jsdom',
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/store/actionTypes',
    'src/templates',
    'src/shared/enums',
    'src/shared/interfaces',
    'src/shared/constants',
    'src/shared/utils',
    'index.(ts|tsx)',
    '.(interfaces|styles).(ts|tsx)',
    '.scss'
  ]
};
