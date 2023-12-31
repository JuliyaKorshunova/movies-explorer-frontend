import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <label className='filter' htmlFor='checkbox'>
      <input
        className='filter__checkbox'
        type='checkbox'
        name='checkbox-input'
        id='checkbox'
        onChange={onFilter}
        checked={isShortMovies}
      ></input>
      <span className='filter__title'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
