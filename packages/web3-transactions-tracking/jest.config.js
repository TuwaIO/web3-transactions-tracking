/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.(ts|js)$': ['ts-jest'],
  },
};

module.exports = config;
