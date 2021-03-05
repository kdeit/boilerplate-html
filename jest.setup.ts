// allows injecting any kind of object into the jest global variable
const globalAny: any = global;

// yelds a second of white noise for the waveform generator
globalAny.AudioContext = jest.fn().mockImplementation(() => ({
    suspend: jest.fn(),
    decodeAudioData: jest.fn()
}));

// mocks HTTP fetch()
globalAny.fetch = require('jest-fetch-mock');

globalAny.fetchMock = globalAny.fetch;
