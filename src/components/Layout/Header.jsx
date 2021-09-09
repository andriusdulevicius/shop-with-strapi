import css from './Header.module.css';
import { useState, useEffect } from 'react';
import useStrapi from './../../hooks/useStrapi';
import { Link } from 'react-router-dom';

export default function Header({ page }) {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);
  const [links] = useStrapi('canvas-menus');

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
    <header className={`${css.header} ${navState || page === 'blog' || page === 'login' ? css.active : ''}`}>
      <Link className={css.logo} to='/'>
        Canvas<strong>Store</strong>
      </Link>
      <nav className={css['main-nav']}>
        {links.map((l) => (
          <Link key={l.link} to={l.link}>
            {l.title}
          </Link>
        ))}
      </nav>
      <nav className={css['side-nav']}>
        <Link to='/login'>SignUp/Login</Link>
        <Link to='/'>Cart</Link>
      </nav>
    </header>
  );
}
