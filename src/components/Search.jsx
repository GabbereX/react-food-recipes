import { useState } from 'react';

export function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='search'>
      <div className='search__container'>
        <input
          className='search__input'
          type='search'
          id='search-field'
          onKeyDown={handleKey}
          onChange={e => setValue(e.target.value)}
          value={value}
          required
        />
        <label className='search__label'>Search</label>
        <span className='search__line' />

        <button className='search__button' onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
