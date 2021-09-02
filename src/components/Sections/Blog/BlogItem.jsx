import css from './BlogItem.module.css';
import Icon from '../../UI/Icon';

export default function BlogItem({ blog: b }) {
  return (
    <article className={css['blog-item']}>
      <img src={b.image} alt={b.title} />
      <h3 className='title'>{b.title}</h3>
      {/* TODO: panaudoti summary, jei nera tada nukirpri pagr text */}
      <p>{b.summary}</p>
      <a href={b.link}>
        View details <Icon icon='long-arrow-right' />
      </a>
    </article>
  );
}
