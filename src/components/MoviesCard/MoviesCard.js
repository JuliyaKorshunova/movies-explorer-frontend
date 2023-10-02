import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import CardImg from '../../images/pic__COLOR_pic.png';

function MoviesCard() {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsSavedMovie(!isSavedMovie);
  }

  return (
    <>
      <li className='card'>
        {/* карточка вставлена чтобы увидеть структуру разметки страницы */}
        <img alt='Кадр из фильма «Название фильма»' className='card__image' src={CardImg} />
        <div className='card__container'>
          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <p className='card__time'>1ч42м</p>
          </div>
          {location.pathname === '/movies' && (
            <button
              type='button'
              className={`card__like-button ${isSavedMovie ? 'card__like-button_active' : ''}`}
              onClick={handleClick}
            ></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button type='button' className='card__delete-button'></button>
          )}
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
