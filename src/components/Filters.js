import React from 'react';

const Filters = (props) => {
  const handleFilterNameChild = (ev) => {
    ev.preventDefault();
    props.handleFilters({
      key: ev.target.id,
      value: ev.target.value,
    });
  };
  const handleSubmit = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };

  return (
    <form className="form__search" onKeyDown={handleSubmit}>
      <div>
        <label htmlFor="filterName"></label>
        <input
          className="input__search"
          type="text"
          placeholder="Escribe el nombre de un personaje"
          id="filterName"
          value={props.filterName}
          onChange={handleFilterNameChild}
        />
      </div>
      <div className="select__filter">
        <label htmlFor="filterSpecie">Selecciona la especie </label>
        <select
          className="select__input"
          name="filterSpecie"
          id="filterSpecie"
          value={props.filterSpecie}
          onChange={handleFilterNameChild}
        >
          <option value="all">Todos</option>
          <option value="Humano">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
