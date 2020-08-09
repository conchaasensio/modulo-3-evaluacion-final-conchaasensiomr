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
              {props.specie === 'Alien' ? (
                <i className="fab fa-reddit-alien"></i>
              ) : props.gender === 'Male' ? (
                <i className="fas fa-male"></i>
              ) : (
                <i className="fas fa-female"></i>
              )}
            </span>
            <span className="status__container">
              {props.status === 'Muerto' ? (
                <i class="fas fa-skull-crossbones"></i>
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

export default CharacterCard;
