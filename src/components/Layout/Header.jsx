import css from './Header.module.css';
import { useState, useEffect, useContext } from 'react';
import useStrapi from './../../hooks/useStrapi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/AuthProvider';

export default function Header({ page }) {
  // sekti ar dokumentas yra slenkamas zemyn
  const authCtx = useContext(AuthContext);
  const [navState, setNavState] = useState(false);
  const [links] = useStrapi('canvas-menus');
  const loggedInUser = authCtx.userEmail;

  // const filteredLinks = links.filter((l) => l.id !== 8);
  // const finalLinksArr = authCtx.token ? links : filteredLinks;

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

  function handleLogout() {
    authCtx.logout();
  }

  return (
    <header className={`${css.header} ${navState || page !== 'home' ? css.active : ''}`}>
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
        {loggedInUser && <span> Logged in as {loggedInUser}</span>}
        {loggedInUser ? (
          <Link onClick={handleLogout} to='/login'>
            Logout
          </Link>
        ) : (
          <Link to='/login'>SignUp/Login</Link>
        )}
        <Link to='/'>Cart</Link>
      </nav>
    </header>
  );
}
