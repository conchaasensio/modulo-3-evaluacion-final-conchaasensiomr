import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        specie={character.species}
      />
    );
  });
  return <section>{htmlCode}</section>;
};

export default CharacterList;
