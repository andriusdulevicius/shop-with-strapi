import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Hero from './Sections/Hero';
import Collections from './Sections/Collections/Collections';
import Shop from './Sections/Shop/Shop';
import Blog from './Sections/Blog/Blog';
import Cta from './Sections/CTA/Cta';
import Layout from './Layout/Layout';
import { useRef } from 'react';

function App() {
  const blogRef = useRef();
  function btnHandler() {
    console.log(blogRef.current.getBoundingClientRect().top);
  }

  return (
    <Layout>
      <button onClick={btnHandler}>Get ref</button>
      <Hero />
      <Collections />
      <Shop />
      <Blog ref={blogRef} />
      <Cta />
    </Layout>
  );
}

export default App;
