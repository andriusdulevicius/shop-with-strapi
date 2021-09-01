import css from './ShopCategories.module.css';
import useHttp from '../../../hooks/use-http';

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
  const categories = useHttp('products/categories');

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
