import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log(characters);
  return <div className="App">Hola, mundo</div>;
}

export default App;
