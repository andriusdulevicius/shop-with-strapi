import React from 'react';
import Blog from './../Sections/Blog/Blog';
import Layout from './../Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import SingleBlogPage from './SingleBlogPage';

const BlogPage = () => {
  return (
    <Layout page='blog'>
      <Switch>
        <Route path='/blog/:blogId'>
          <SingleBlogPage />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
      </Switch>
    </Layout>
  );
};

export default BlogPage;
