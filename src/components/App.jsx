import '../style/App.css';
import 'font-awesome/css/font-awesome.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './../store/AuthProvider';
import MembersOnlyPage from './pages/MembersOnlyPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/blog'>
            <BlogPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/members-only'>
            <MembersOnlyPage />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
