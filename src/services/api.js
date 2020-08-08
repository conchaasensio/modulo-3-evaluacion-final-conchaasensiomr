const getDataFromApi = async () => {
  const firstCharacters = await fetchCharacters(
    'https://rickandmortyapi.com/api/character/'
  );
  const secondCharacters = await fetchCharacters(
    'https://rickandmortyapi.com/api/character/?page=2'
  );
  return firstCharacters.concat(secondCharacters);
};

function fetchCharacters(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((characters) => characters.map(selectRelevantData))
    .then((characters) => characters.map(translateCharacterInfo));
}

function translateCharacterInfo(character) {
  character.specie = character.specie === 'Human' ? 'Humano' : 'Alien';
  character.status = character.status === 'Alive' ? 'Vivo' : 'Muerto';

  return character;
}

function selectRelevantData(character) {
  return {
    id: character.id,
    image: character.image,
    name: character.name,
    status: character.status,
    specie: character.species,
    origin: character.origin.name,
    episodes: character.episode.length,
  };
}

export default getDataFromApi;
