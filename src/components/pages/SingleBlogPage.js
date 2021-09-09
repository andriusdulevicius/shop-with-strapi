import React from 'react';
import BlogItem from '../Sections/Blog/BlogItem';
import useStrapi from './../../hooks/useStrapi';
import { useParams } from 'react-router';

const SingleBlogPage = () => {
  const { blogId } = useParams();

  const [blogObj] = useStrapi(`canvas-blogs/${blogId}`);

  return (
    <section className='container'>
      <BlogItem singlePage blog={blogObj} />
    </section>
  );
};

export default SingleBlogPage;
