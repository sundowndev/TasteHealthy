module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  coverageDirectory: './server/coverage',
  moduleDirectories: ['node_modules'],
  testRegex: '.*\\/.*\\.spec\\.js$',
  snapshotSerializers: [],
};
