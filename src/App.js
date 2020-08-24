import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './Pages/Header';
import CharactersGrid from './components/CharactersGrid';
import Search from './components/Searching';

const App = () => {
  const [characters, SetCharacters] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );

      console.log(result.data);
      SetCharacters(result.data.results);
      SetIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;
