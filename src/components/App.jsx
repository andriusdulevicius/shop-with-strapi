import '../style/App.css';
import 'font-awesome/css/font-awesome.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
