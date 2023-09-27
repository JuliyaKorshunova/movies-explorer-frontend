import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      {/* <Header /> */}
      <section className="profile">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
              placeholder="имя" 
            />
            <span className="profile__input-error"></span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              required
              placeholder="почта" 
            />
            <span className="profile__input-error"></span>
          </label>
          <button type="submit" className="profile__button-save">
            Редактировать
          </button>
          <button type="button" className="profile__exit">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
