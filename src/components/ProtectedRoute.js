import { Route } from 'react-router-dom';
import useAuthCtx from './../hooks/useAuthCtx';
import LoginPage from './pages/LoginPage';

const ProtectedRoute = ({ path, children }) => {
  const { isLoggedIn } = useAuthCtx();
  return <Route path={path}>{isLoggedIn ? children : <LoginPage />}</Route>;
};

export default ProtectedRoute;
