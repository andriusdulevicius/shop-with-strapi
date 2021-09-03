import css from './Header.module.css';
import { useState, useEffect } from 'react';

const Links = [
  { link: '/', title: 'Home' },
  { link: '/men', title: 'Men' },
  { link: '/woman', title: 'Woman' },
  { link: '/help', title: 'Help' },
  { link: '/contact', title: 'Contact' },
];

export default function Header() {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
    const dist = window.pageYOffset;
    // console.log('scroll ', dist);
    if (dist > 200) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }
  return (
    <header className={`${css.header} ${navState ? css.active : ''}`}>
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
