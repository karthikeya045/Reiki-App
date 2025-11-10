module.exports = {
  useAudioPlayer: () => ({
    play: jest.fn(),
    pause: jest.fn(),
    unload: jest.fn(),
    duration: 0,
    position: 0,
    isPlaying: false,
    isLoaded: true
  })
};