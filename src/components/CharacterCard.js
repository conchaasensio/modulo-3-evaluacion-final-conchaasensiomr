import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article>
        <img className="character__img" src={props.image} alt={props.name} />
        <div className="character__container">
          <div className="character__text-container">
            <h3 className="character__title">{props.name}</h3>
            <span className="character__text">{props.specie}</span>
          </div>
          <div className="character__icon">
            <span>
              <i className={specieIconClass(props)}></i>
            </span>
            <span className="status__container">
              {props.status === 'Muerto' ? (
                <i className="fas fa-skull-crossbones"></i>
              ) : props.status === 'Desconocido' ? (
                <i className="fas fa-question"></i>
              ) : (
                <i className="fas fa-heartbeat"></i>
              )}
            </span>{' '}
          </div>
        </div>
      </article>
    </Link>
  );
};

function specieIconClass(props) {
  if (props.specie === 'Alien') {
    return 'fab fa-reddit-alien';
  } else if (props.gender === 'Male') {
    return 'fas fa-male';
  } else {
    return 'fas fa-female';
  }
}

export default CharacterCard;
