global.fetch = require('node-fetch');

const getDataFromApi = require('./api');
describe('getDataFromApi', () => {
  test('return 60 characters', async () => {
    const characters = await getDataFromApi();
    expect(characters.length).toBe(60);
  });
});
