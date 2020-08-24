import React from 'react';

const Character = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-info'>
        <div className='card-front'>
          <img src={character.image} alt='character' />
        </div>
        <div className='individual-card'>
          <h1>{character.name}</h1>
          <ul>
            <li>
              {' '}
              <strong>Status:</strong>
              {character.status}
            </li>
            <li>
              <strong>Species:</strong>
              {character.species}
            </li>
            <li>
              <strong>Type:</strong>
              {character.type}
            </li>
            <li>
              <strong>Origin:</strong>
              {character.origin.name}
            </li>
            <li>
              <strong>Location:</strong>
              {character.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
