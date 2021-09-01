import css from './Hero.module.css';
import Button from './UI/Button';

const social = [
  {
    title: 'Facebook',
    icon: 'facebook',
    link: 'http://www.facebook.com',
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    link: 'http://www.instagram.com',
  },
  { title: 'Youtube', icon: 'youtube', link: 'http://www.youtube.com' },
];
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
      <div className={css.social}>
        {social.map((s) => (
          <a key={s.link} target='_blank' rel='noreferrer' href={s.link}>
            <i class='fa fa-facebook' aria-hidden='true'></i>
          </a>
        ))}
      </div>
    </section>
  );
}
