import React from 'react';
import classes from './LoginForm.module.css';
import { useState } from 'react';
import { postData } from './../../utils/http';

const LoginForm = () => {
  const [email, setEmail] = useState('paid@member.com');
  const [password, setPassword] = useState('123456');
  const [err, setErr] = useState('');

  const errorList = {
    EMPTY: 'Fields can not be empty, please fill in.',
    INVALID_USER: 'The log in details are incorrect, please try again.',
    INVALID_EMAIL: 'Username section must be a valid email address.',
  };

  const emailValidationRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginHandler = async (e) => {
    e.preventDefault();
    setErr('');
    if (email === '' || password === '') {
      setErr('EMPTY');
      return;
    }
    if (!emailValidationRegex.test(email)) {
      setErr('INVALID_EMAIL');
    }
    const response = await postData({ email, password }, 'auth/local');
    console.log(response);

    // localStorage.setItem('Token');
    // localStorage.setItem('Email')
    setEmail('');
    setPassword('');
  };
  return (
    <section className={classes.auth}>
      <h2>Login Form</h2>
      <form>
        <div className={classes.control}>
          <input type='email' placeholder='Username' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className={classes.control}>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {err !== '' && <span className={classes['error-msg']}>{errorList[err]}</span>}
        <button onClick={loginHandler}>LOGIN</button>
      </form>
    </section>
  );
};

export default LoginForm;
