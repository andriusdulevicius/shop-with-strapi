import css from './Header.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/canvas-menus`);
        setLinks(data);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
        {links.map((l) => (
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
