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

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );
    if (character) {
      return (
        <CharacterDetail
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.species}
          origin={character.origin}
          episodes={character.episode}
        />
      );
    } else {
      return <p>'Personaje no encontrado'</p>;
    }
  };

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.includes(filterName);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Rick & Morty</h1>
      </header>

      <Switch>
        <Route exact path="/">
          <Filters handleFilterName={handleFilterName} />
          <CharacterList characters={renderFilteredCharacters()} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
