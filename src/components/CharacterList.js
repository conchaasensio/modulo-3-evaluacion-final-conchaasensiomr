import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <p>
        No hay ningún personaje que coincida con los criterios de búsqueda
        aplicados
      </p>
    );
  }
  const htmlCode = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        specie={character.species}
      />
    );
  });
  return <section>{htmlCode}</section>;
};

export default CharacterList;
