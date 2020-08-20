import React from 'react';
import Character from './Character';

const CharactersGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards-characters'>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharactersGrid;
