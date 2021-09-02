import css from './From.module.css';

export default function Form() {
  return (
    <form className={css.form}>
      <input type='text' placeholder='Enter your email address' />
      <button>Subscribe&nbsp;now</button>
    </form>
  );
}
