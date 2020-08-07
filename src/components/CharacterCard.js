import React from 'react';

const CharacterCard = (props) => {
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.specie}</p>
    </article>
  );
};

export default CharacterCard;
