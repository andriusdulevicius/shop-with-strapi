import css from './Collections.module.css';
import CollecionItem from './CollecionItem';
import useStrapi from '../../../hooks/useStrapi';

export default function Collections() {
  const [collectionsData] = useStrapi('canvas-special-offers');
  return (
    <section className='container'>
      <h2>TItle</h2>
      <div className={css['card-container']}>
        {collectionsData.map((it) => (
          <CollecionItem key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
