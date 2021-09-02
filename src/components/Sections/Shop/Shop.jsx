import css from './Shop.module.css';
import ShopCategories from './ShopCategories';
import ShopItem from './ShopItem';
import useHttp from '../../../hooks/useHttp';

export default function Shop() {
  // useHttp hook
  const items = useHttp('products');
  const firstNineItems = items.slice(0, 9);
  // console.log(items);
  return (
    <section className={`container ${css.shop}`}>
      <ShopCategories />
      <main>
        {(firstNineItems || []).map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </main>
    </section>
  );
}
