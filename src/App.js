import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './Pages/Header';
import CharactersGrid from './components/CharactersGrid';

const App = () => {
  const [characters, SetCharacters] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character/`);

      console.log(result.data);
      SetCharacters(result.data.results);
      SetIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharactersGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;
