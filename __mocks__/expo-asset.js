module.exports = {
  Asset: {
    fromModule: jest.fn(() => ({
      downloadAsync: jest.fn(),
      uri: 'test-uri'
    }))
  }
};