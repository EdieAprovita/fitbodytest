import React from 'react';
import Character from './Character';
import spinner from './Spinner';

const CharactersGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <spinner />
  ) : (
    <section className='cards'>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharactersGrid;
