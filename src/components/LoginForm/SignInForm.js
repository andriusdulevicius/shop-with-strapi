import React, { useState } from 'react';
import classes from './LoginForm.module.css';

import { useHistory, Link } from 'react-router-dom';

const SignInForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [err, setErr] = useState('');

  const errorList = {
    EMPTY: 'Fields can not be empty, please fill in.',
    INVALID_USER: 'The log in details are incorrect, please try again.',
    INVALID_EMAIL: 'Username section must be a valid email address.',
    DONT_MATCH: 'Passwords must match',
  };

  const emailValidationRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const signInHandler = async (e) => {
    e.preventDefault();
    setErr('');
    if (email === '' || password === '') {
      setErr('EMPTY');
      return;
    }
    if (!emailValidationRegex.test(email)) {
      setErr('INVALID_EMAIL');
      return;
    }
    if (password !== password2) {
      setErr('DONT_MATCH');
      return;
    }
    // const result = await postData({ email, password, password2 }, 'auth/local');

    // const userData = {
    //   email: result.user.email,
    // };
    // console.log('about to create account');

    // authCtx.login(result.jwt, userData);

    setEmail('');
    setPassword('');
    setPassword2('');
    history.replace('/');
  };
  return (
    <section className={classes.auth}>
      <h2>Sign In Form</h2>
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
        <div className={classes.control}>
          <input
            type='password'
            placeholder='Repeat password'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>
        {err !== '' && <span className={classes['error-msg']}>{errorList[err]}</span>}
        <button onClick={signInHandler}>CREATE ACCOUNT</button>
      </form>
      <Link to='/login'> Back to login! </Link>
    </section>
  );
};

export default SignInForm;
