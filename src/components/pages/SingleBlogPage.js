import React from 'react';
import BlogItem from '../Sections/Blog/BlogItem';
import useStrapi from './../../hooks/useStrapi';
import { useParams } from 'react-router';
import {} from 'react-router-dom';

import useAuthCtx from './../../hooks/useAuthCtx';

const SingleBlogPage = (props) => {
  const authCtx = useAuthCtx();
  const { blogId } = useParams();
  const membershipType = props.paid ? 'canvas-paid-blogs' : 'canvas-blogs';
  const token = (props.paid && authCtx.token) || null;
  const [blogObj] = useStrapi(`${membershipType}/${blogId}`, token);

  return (
    <section className='container'>
      <BlogItem singlePage blog={blogObj} />
    </section>
  );
};

export default SingleBlogPage;
