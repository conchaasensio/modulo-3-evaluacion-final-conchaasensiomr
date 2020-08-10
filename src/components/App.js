import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getApiData from '../services/api';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Header from './Header';
import notfound_image from '../images/notfound_image.png';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('all');

  useEffect(() => {
    getApiData().then((data) => setCharacters(data));
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
      return (
        <div className="container__character--notfound">
          <p className="route__character-notfound">
            El personaje que buscas no existe
          </p>
          <img src={notfound_image} alt="no encontrado" />
        </div>
      );
    }
    return (
      <div>
        <CharacterDetail
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.specie}
          origin={character.origin}
          episodes={character.episodes}
        />
      </div>
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
      <Header />

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
