global.fetch = require('node-fetch');

const getDataFromApi = require('./api');
describe('getDataFromApi', () => {
  test('return 60 characters', async () => {
    const characters = await getDataFromApi();

    expect(characters.length).toBe(60);
  });

  test('selectRelevantData', async () => {
    const characters = await getDataFromApi();

    const characterKeys = Object.keys(characters[0]);
    expect(characterKeys).toContain('id');
    expect(characterKeys).toContain('image');
    expect(characterKeys).toContain('name');
    expect(characterKeys).toContain('status');
    expect(characterKeys).toContain('specie');
    expect(characterKeys).toContain('origin');
    expect(characterKeys).toContain('episodes');
    expect(characterKeys).toContain('gender');
    expect(characterKeys.length).toBe(8);
  });

  test('translateCharacterSpecie', async () => {
    const characters = await getDataFromApi();

    expect(characters[0].specie).toBe('Humano');
    expect(characters[5].specie).toBe('Alien');
  });

  test('translateCharacterStatus', async () => {
    const characters = await getDataFromApi();

    expect(characters[0].status).toBe('Vivo');
    expect(characters[6].status).toBe('Desconocido');
    expect(characters[7].status).toBe('Muerto');
  });
});
