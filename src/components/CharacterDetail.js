import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className="modal">
      <header className="modal__header">
        <a href="/">
          <span className="modal__close--icon"></span>
        </a>
      </header>
      <section className="card__container">
        <img src={props.image} alt={props.name} />
        <div className="card__text">
          <div className="card__title">
            <h2>{props.name}</h2>
          </div>
          <ul>
            <li>{`Estado: ${props.status}`}</li>
            <li>{`Especie: ${props.specie}`}</li>
            <li>{`Planeta de origen: ${props.origin}`}</li>
            <li>{`Nº de episodios: ${props.episodes}`}</li>
          </ul>
        </div>
      </section>
      <Link className="button__return" to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default CharacterDetail;
