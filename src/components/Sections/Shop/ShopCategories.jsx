import React from 'react';
import css from './ShopCategories.module.css';
import useHttp from '../../../hooks/useHttp';
import { Link } from 'react-router-dom';

function stringToUrl(string) {
  let result = string.replace(' ', '-');
  result = result.replace("'", '_');
  return result;
}

// stringToUrl("some's stuff");

const ShopCategories = React.forwardRef(({ asideStick }, asideRef) => {
  // const asideRef = useRef();

  // gauti aside el atstuma iki lango virsaus getBoundingClientRect().top;
  // kai aside apacia, liecia header virsu norim uzdeti klase active
  // kuri padaro aside fixed
  // kai aside apacia pasieka blog el virsu, nuimam active clase

  const categories = useHttp('products/categories');

  return (
    <>
      {asideStick && <div className={css.cat}></div>}
      <aside className={`${css.cat} ${asideStick ? css.stick : ''}`} ref={asideRef}>
        <Link to='/shop/categories/all'>
          <strong> All Collections</strong>
        </Link>
        <Link to='/shop/categories/new'>
          <strong>New Arrivals</strong>
        </Link>
        <div className={css.dash}></div>
        {categories.map((name) => (
          <Link key={name} to={`/shop/categories/${stringToUrl(name)}`}>
            {name}
          </Link>
        ))}
      </aside>
    </>
  );
});

// mobile atrddytu puikiai
export default ShopCategories;
