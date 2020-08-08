import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getApiData from '../services/api';
// import CharacterCard from './CharacterCard';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('all');

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilters = (data) => {
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecie') {
      setFilterSpecie(data.value);
    }
  };

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );
    if (!character) {
      return <p>'Personaje no encontrado'</p>;
    }
    return (
      <CharacterDetail
        image={character.image}
        name={character.name}
        status={character.status}
        specie={character.specie}
        origin={character.origin}
        episodes={character.episodes}
      />
    );
  };

  const renderFilteredCharacters = () => {
    return characters.filter(containsCharacterName).filter(isCharacterSpecie);
  };

  function isCharacterSpecie(character) {
    return filterSpecie === 'all' || character.specie === filterSpecie;
  }

  function containsCharacterName(character) {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  }

  return (
    <div className="App">
      <header>
        <h1>Rick & Morty</h1>
      </header>

      <Switch>
        <Route exact path="/">
          <Filters
            filterSpecie={filterSpecie}
            filterName={filterName}
            handleFilters={handleFilters}
          />
          <CharacterList
            filterName={filterName}
            filterSpecie={filterSpecie}
            characters={renderFilteredCharacters()}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
