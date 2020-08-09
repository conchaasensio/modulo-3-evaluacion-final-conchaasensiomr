import React from 'react';
import { Link } from 'react-router-dom';
import rip from '../images/rip.png';

const CharacterDetail = (props) => {
  return (
    <div className="card__detail-container">
      <section className="card__container">
        <img src={props.image} alt={props.name} />
        <div className="card__text">
          <div className="card__title">
            <h2>{props.name}</h2>
            <div className="card__status">
              {props.status === 'Muerto' ? (
                <img src={rip} alt={props.status} />
              ) : (
                ''
              )}
            </div>
          </div>
          <ul>
            <li>{`Estado: ${props.status}`}</li>
            <li>{`Especie: ${props.specie}`}</li>
            <li>{`Planeta de origen: ${props.origin}`}</li>
            <li>{`Nº de episodios: ${props.episodes}`}</li>
          </ul>
        </div>
      </section>
      <Link className="btn__return" to="/">
        <i className="fas fa-angle-left"></i> Volver
      </Link>
    </div>
  );
};

export default CharacterDetail;
