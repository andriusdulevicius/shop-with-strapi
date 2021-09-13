import React, { useContext } from 'react';
import useStrapi from '../../../hooks/useStrapi';
import css from './Blog.module.css';
import BlogItem from './BlogItem';
import { AuthContext } from './../../../store/AuthProvider';

// forwardingRef - naudojama kai reikia perduoti DOM nuoroda SUkurtam komponetui
const Blog = React.forwardRef((props, blogRef) => {
  function makeCorrectUrl() {
    const howMany = props.qty ? `&_limit=${props.qty}` : '';
    const membershipType = props.paid ? 'canvas-paid-blogs' : 'canvas-blogs';
    const correctUrl = `${membershipType}?_sort=title${howMany}`;
    return correctUrl;
  }
  const authCtx = useContext(AuthContext);
  const token = props.paid ? authCtx.token : null;

  const [blogs] = useStrapi(makeCorrectUrl(), token);

  return (
    <div className='container'>
      <h2 className={css.h2}>{props.paid ? 'Checkout our membership blogs' : 'Checkout our blogs'}</h2>
      <section ref={blogRef} className={`container ${css.blog}`}>
        {blogs.map((b) => (
          <BlogItem key={b.id} blog={b} paid={props.paid} membersOnly={props.membersOnly} />
        ))}
      </section>
    </div>
  );
});

export default Blog;
// sukiam sekcija Blog

// Sukuriam BlogItem pagal dizaina

// atvizduojam viska kaip brezinyje

// duomenys blog is sukurto masyvo
