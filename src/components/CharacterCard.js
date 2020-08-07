import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.specie}</p>
      </article>
    </Link>
  );
};

export default CharacterCard;
