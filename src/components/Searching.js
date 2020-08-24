import React, { useState } from 'react';

const Searching = ({ getQuery }) => {
  const [search, setSearch] = useState('');

  const onChange = (q) => {
    setSearch(q);
    getQuery(q);
  };
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search Characters'
          value={search}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Searching;
