import React from 'react';
import useStrapi from '../../../hooks/useStrapi';
import css from './Blog.module.css';
import BlogItem from './BlogItem';

// forwardingRef - naudojama kai reikia perduoti DOM nuoroda SUkurtam komponetui
const Blog = React.forwardRef((props, blogRef) => {
  const [blogs] = useStrapi('canvas-blogs?_limit=2&_sort=title');
  return (
    <section ref={blogRef} className={`container ${css.blog}`}>
      {blogs.map((b) => (
        <BlogItem key={b.id} blog={b} />
      ))}
    </section>
  );
});

export default Blog;
// sukiam sekcija Blog

// Sukuriam BlogItem pagal dizaina

// atvizduojam viska kaip brezinyje

// duomenys blog is sukurto masyvo
