import { useState } from 'react';
import css from './From.module.css';

export default function Form({ onEmailSubmit }) {
  const [input, setInput] = useState('');
  // state
  // suristi input su valur ir onChange
  function submitHandler(e) {
    e.preventDefault();
    console.log('siusta');
    // atspausdinti ivesta lauka konsolej
    if (input) {
      // console.log(input);
      onEmailSubmit(input);
      setInput('');
    }
    // nespausdinti jei tuscias
    // siusti ta reiksme su props i virsu
  }
  return (
    <form onSubmit={submitHandler} className={css.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Enter your email address'
      />
      <button>Subscribe&nbsp;now</button>
    </form>
  );
}
