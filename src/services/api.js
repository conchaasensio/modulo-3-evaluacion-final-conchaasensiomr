import { findAllInRenderedTree } from 'react-dom/test-utils';

const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => data.results)
    .then((characters) => {
      return characters.map((character) => {
        character.species = character.species === 'Human' ? 'Humano' : 'Alien';
        character.status = character.status === 'Alive' ? 'Vivo' : 'Muerto';

        return character;
      });
    });
};

export default getDataFromApi;
