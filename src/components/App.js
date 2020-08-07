import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api';
// import CharacterCard from './CharacterCard';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
