import React, { useContext } from 'react';
import Blog from './../Sections/Blog/Blog';
import { AuthContext } from './../../store/AuthProvider';
import LoginForm from './../LoginForm/LoginForm';
import css from './MembersOnly.module.css';
import { Switch, Route } from 'react-router-dom';
import SingleBlogPage from '../pages/SingleBlogPage';

const MembersOnly = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path='/members-only/:blogId'>
        <SingleBlogPage paid />
      </Route>
      <Route path='/members-only'>
        <Blog paid />
      </Route>
    </Switch>
  );
};

export default MembersOnly;
