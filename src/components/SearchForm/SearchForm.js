import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search' aria-label='поиск фильмов'>
      <form className='search__form' id='form'>
        <div className='search-form__input-container'>
          <input
            name='query'
            className='search__input'
            id='search-input'
            type='text'
            placeholder='Фильм'
          ></input>
          <button className='search__button' type='submit' aria-label='Поиск фильмов'></button>
        </div>

        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
