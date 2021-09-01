import css from './ShopCategories.module.css';
export default function ShopCategories() {
  return (
    <aside className={css.cat}>
      <a href='/shop/categories/all'>All Collections</a>
      <a href='/shop/categories/new'>New Arrivals</a>
      <div>-------</div>
      <a href='/shop/categories/jeans'>Jeans</a>
    </aside>
  );
}
