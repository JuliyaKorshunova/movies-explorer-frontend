import React from 'react';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <li className='card'>
        {/* карточка вставлена чтобы увидеть структуру разметки страницы */}
        <img alt='' className='card__image' />
        <div className='card__container'>
          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч42м</span>
          </div>
          <button type='button' className='card__like-button'></button>
          {/* <button type="button" className="card__delete-button"></button> */}
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
