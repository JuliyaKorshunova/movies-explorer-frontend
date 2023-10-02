import React from 'react';
import './MoviesCardList.css';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from "../Preloader/Preloader"
import SearchError from '../SearchError/SearchError';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ children }) {
  const location = useLocation();

  return (
    <section className='cards'>
      {/* <Preloader /> */}

      <SearchError errorText={'Ничего не найдено'} />

      <SearchError
        errorText={
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        }
      />

      <ul className='cards__list'>{children}</ul>
      {location.pathname === '/movies' && (
        <div className='cards__button-container'>
          <button className='cards__button'>Ещё</button>
        </div>
      )}
      {location.pathname === '/saved-movies' && <div className='cards__divider'></div>}
    </section>
  );
}

export default MoviesCardList;
