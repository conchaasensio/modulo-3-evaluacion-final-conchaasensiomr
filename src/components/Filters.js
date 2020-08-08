import React from 'react';

const Filters = (props) => {
  const handleFilterNameChild = (ev) => {
    props.handleFilterName({
      key: 'filterName',
      value: ev.target.value,
    });
  };
  return (
    <form action="">
      <div>
        <label htmlFor="filterName">Busca tu personaje</label>
        <input type="text" id="filterName" onChange={handleFilterNameChild} />
      </div>
      <div>
        <label htmlFor="filterSpecie">Busca por especie</label>
        <select name="filterSpecie" id="filterSpecie">
          <option value="all">Todos</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
