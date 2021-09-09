import Header from './Header';

export default function Layout({ children, page }) {
  return (
    <>
      <Header page={page} />
      {children}
      {/* {page === 'blog' && <aside>Info about blogs</aside>} */}
    </>
  );
}
