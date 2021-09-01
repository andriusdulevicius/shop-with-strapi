import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './ShopCategories.module.css';

function stringToUrl(string) {
  let result = string.replace(' ', '-');
  result = result.replace("'", '_');
  return result;
}

// stringToUrl("some's stuff");

export default function ShopCategories() {
  // 1.axios fetch
  // 2. state
  // 3. useEffect
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      // console.log(data);
      setCategories(data);
    })();
  }, []);

  return (
    <aside className={css.cat}>
      <a href='/shop/categories/all'>
        <strong> All Collections</strong>
      </a>
      <a href='/shop/categories/new'>
        <strong>New Arrivals</strong>
      </a>
      <div className={css.dash}></div>
      {categories.map((name) => (
        <a key={name} href={`/shop/categories/${stringToUrl(name)}`}>
          {name}
        </a>
      ))}
    </aside>
  );
}
