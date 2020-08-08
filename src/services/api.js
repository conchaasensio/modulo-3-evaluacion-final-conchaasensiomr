const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => data.results)
    .then((characters) => characters.map(translateCharacterInfo));
};

function translateCharacterInfo(character) {
  character.species = character.species === 'Human' ? 'Humano' : 'Alien';
  character.status = character.status === 'Alive' ? 'Vivo' : 'Muerto';

  return character;
}

export default getDataFromApi;
