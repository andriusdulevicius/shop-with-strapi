import css from './Hero.module.css';
import Button from '../UI/Button';
import Social from './Social';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css['center-part']}>
        <h1>Get the new Mop Dog</h1>
        <p>You know you want it.</p>
        <div className={css.controll}>
          <Button>Shop men</Button>
          <Button>Shop Woman</Button>
        </div>
      </div>
      <Social />
    </section>
  );
}
