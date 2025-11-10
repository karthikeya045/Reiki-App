global.__ExpoImportMetaRegistry = {};

jest.mock('expo', () => ({
  registerRootComponent: jest.fn(),
  mockAsyncModule: jest.fn(),
  __ExpoImportMetaRegistry: global.__ExpoImportMetaRegistry,
}));

jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: jest.fn(() => Promise.resolve()),
    fromModule: jest.fn(() => ({ uri: 'mocked-asset' })),
  },
}));

jest.mock('expo-audio', () => ({
  useAudioPlayer: () => ({
    play: jest.fn(),
    pause: jest.fn(),
    unload: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@expo/vector-icons', () => ({
  AntDesign: () => null,
}));