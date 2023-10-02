import React, { useState } from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login() {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const input = evt.target;
    const { value, name } = input;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      linkText=' Регистрация'
      link='/signup'
      formName='login'
    >
      <label className='page__form-label'>
        E-mail
        <input
          name='email'
          className='page__form-input'
          id='email-input'
          type='email'
          minLength='5'
          maxLength='40'
          required
          placeholder='почта'
          onChange={handleChange}
          value={formValue.email || ''}
        />
        <span
          className={`page__form-input-error ${!isValid ? 'page__form-input-error_active' : ''}`}
        >
          {errors.email}
        </span>
      </label>
      <label className='page__form-label'>
        Пароль
        <input
          name='password'
          className='page__form-input'
          id='password-input'
          type='password'
          minLength='2'
          maxLength='40'
          required
          placeholder='пароль'
          onChange={handleChange}
          value={formValue.password || ''}
        />
        <span
          className={`page__form-input-error ${!isValid ? 'page__form-input-error_active' : ''}`}
        >
          {errors.password}
        </span>
      </label>

      <button
        type='submit'
        className={`page__form-save-btn ${!isValid ? 'page__form-save-btn_inactive' : ''}`}
        disabled={!isValid}
      >
        Войти
      </button>
    </Form>
  );
}

export default Login;
