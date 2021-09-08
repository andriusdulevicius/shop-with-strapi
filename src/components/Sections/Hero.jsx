import css from './Hero.module.css';
import Button from '../UI/Button';
import Social from './Social';
import useStrapi from './../../hooks/useStrapi';

export default function Hero() {
  const [data] = useStrapi('canvas-hero');
  return (
    <section className={css.hero}>
      <div className={css['center-part']}>
        <h1>{data.mainTitle}</h1>
        <p>{data.subtitle}</p>
        <div className={css.controll}>
          <Button>{data.button1}</Button>
          <Button>{data.button2}</Button>
        </div>
      </div>
      <Social />
    </section>
  );
}
