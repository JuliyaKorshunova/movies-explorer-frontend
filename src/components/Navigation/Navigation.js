import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/profile777.svg';

function Navigation({ handleClose }) {
  return (
    <div className='navigation__page-overlay'>
      <div className='navigation__overlay-container'></div>
      <nav className='navigation__menu'>
        <button className='navigation__close-button' onClick={handleClose}></button>
        <nav className='navigation__links'>
          <NavLink exact to='/' className='navigation__link'>
            Главная
          </NavLink>
          <NavLink to='/movies' className='navigation__link'>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className='navigation__link'>
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to='/profile' className='navigation__account-button'>
          <img src={account} alt='аккаунт' />
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
