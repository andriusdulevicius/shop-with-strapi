import Blog from './../Sections/Blog/Blog';
import { Switch, Route } from 'react-router-dom';
import SingleBlogPage from '../pages/SingleBlogPage';

const MembersOnly = () => {
  return (
    <Switch>
      <Route exact path='/members-only/:blogId'>
        <SingleBlogPage paid />
      </Route>
      <Route path='/members-only'>
        <Blog paid membersOnly />
      </Route>
    </Switch>
  );
};

export default MembersOnly;
