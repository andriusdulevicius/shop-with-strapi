import css from './CollecionItem.module.css';
import Button from '../../UI/Button';

export default function CollecionItem({ item }) {
  console.log(item.image);
  const style = { background: `url(${item.image})` };
  return (
    <div className={css.card} style={style}>
      <h3>{item.discount}% OFF</h3>
      <div className={css.bottom}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <Button>SHOP NOW</Button>
      </div>
    </div>
  );
}
