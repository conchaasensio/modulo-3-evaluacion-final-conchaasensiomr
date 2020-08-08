import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    const specie =
      props.filterSpecie === 'all' ? 'personaje' : props.filterSpecie;
    return (
      <p>
        {`No hay ningún ${specie} que coincida con la palabra ${props.filterName}`}
      </p>
    );
  }
  const htmlCode = props.characters
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .map((character) => {
      return (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          specie={character.specie}
        />
      );
    });
  return <section>{htmlCode}</section>;
};

export default CharacterList;
