import React from 'react';

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
          <li>{props.status}</li>
          <li>{props.specie}</li>
          <li>{props.origin.name}</li>
          <li>{props.episodes}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
