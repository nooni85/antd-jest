const compileModules = ['@ant-design'];

const ignoreList = [];

// cnpm use `_` as prefix
['', '_'].forEach((prefix) => {
  compileModules.forEach((module) => {
    ignoreList.push(`${prefix}${module}`);
  });
});

const transformIgnorePatterns = [
  // Ignore modules without es dir.
  // Update: @babel/runtime should also be transformed
  `/node_modules/(?!${ignoreList.join('|')})[^/]+?/(?!(es)/)`,
];

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/supports/setupTests.js'],
  transformIgnorePatterns,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
};
