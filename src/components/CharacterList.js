import React from 'react';
import CharacterCard from './CharacterCard';
import notfound_image from '../images/notfound_image.png';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    const specie =
      props.filterSpecie === 'all' ? 'personaje' : props.filterSpecie;
    return (
      <div className="container__notfound">
        <p className="container__notfound-text">
          {`No hay ningún ${specie} que coincida con el nombre ${props.filterName}`}
        </p>
        <div className="container__notfound-img">
          <img src={notfound_image} alt="no encontrado" />
        </div>
      </div>
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
        <li className="character__list" key={character.id}>
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            specie={character.specie}
            gender={character.gender}
            status={character.status}
          />
        </li>
      );
    });
  return <ul className="characters__container">{htmlCode}</ul>;
};

export default CharacterList;
