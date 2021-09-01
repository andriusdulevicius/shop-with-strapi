import css from './Header.module.css';

const Links = [
  { link: '/', title: 'Home' },
  { link: '/men', title: 'Men' },
  { link: '/woman', title: 'Woman' },
  { link: '/help', title: 'Help' },
  { link: '/contact', title: 'Contact' },
];

export default function Header() {
  return (
    <header className={css.header}>
      <a className={css.logo} href='/'>
        Canvas<strong>Store</strong>
      </a>
      <nav className={css['main-nav']}>
        {Links.map((l) => (
          <a key={l.link} href={l.link}>
            {l.title}
          </a>
        ))}
      </nav>
      <nav className={css['side-nav']}>
        <a href='/'>SignUp/Login</a>
        <a href='/'>Cart</a>
      </nav>
    </header>
  );
}
