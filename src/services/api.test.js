global.fetch = require('node-fetch');

const getDataFromApi = require('./api');
describe('getDataFromApi', () => {
  test('return 60 characters', async () => {
    const characters = await getDataFromApi();

    expect(characters.length).toBe(60);
  });

  test('selectRelevantData', async () => {
    const characters = await getDataFromApi();

    expect(Object.keys(characters[0])).toContain('id');
    expect(Object.keys(characters[0])).toContain('image');
    expect(Object.keys(characters[0])).toContain('name');
    expect(Object.keys(characters[0])).toContain('status');
    expect(Object.keys(characters[0])).toContain('specie');
    expect(Object.keys(characters[0])).toContain('origin');
    expect(Object.keys(characters[0])).toContain('episodes');
    expect(Object.keys(characters[0])).toContain('gender');
    expect(Object.keys(characters[0]).length).toBe(8);
  });
});
