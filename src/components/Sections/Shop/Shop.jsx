import css from './Shop.module.css';
import ShopCategories from './ShopCategories';
import ShopItem from './ShopItem';

export default function Shop() {
  // useHttp hook
  return (
    <section className={`container ${css.shop}`}>
      <ShopCategories />
      <main>
        <ShopItem />
      </main>
    </section>
  );
}
