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
      <section>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <ul>
          <li>{`Estado: ${props.status}`}</li>
          <li>{`Especie: ${props.specie}`}</li>
          <li>{`Planeta de origen: ${props.origin}`}</li>
          <li>{`Nº de episodios: ${props.episodes}`}</li>
        </ul>
      </section>
      <Link to="/">
        <button>Cerrar</button>
      </Link>
    </div>
  );
};

export default CharacterDetail;
