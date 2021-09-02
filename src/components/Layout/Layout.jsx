import Header from './Header';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
