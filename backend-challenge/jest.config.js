/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transformIgnorePatterns: ['node_modules/(?!(node-fetch)/)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}
