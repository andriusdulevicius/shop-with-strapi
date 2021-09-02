import css from './Shop.module.css';
import ShopCategories from './ShopCategories';
import ShopItem from './ShopItem';
import useHttp from '../../../hooks/useHttp';

export default function Shop() {
  // useHttp hook
  const items = useHttp('products');
  console.log(items);
  return (
    <section className={`container ${css.shop}`}>
      <ShopCategories />
      <main>
        <ShopItem item={items[0] || {}} />
      </main>
    </section>
  );
}
