import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Hero from './Sections/Hero';
import Collections from './Sections/Collections/Collections';
import Shop from './Sections/Shop/Shop';
import Blog from './Sections/Blog/Blog';
import Cta from './Sections/CTA/Cta';
import Layout from './Layout/Layout';
import { useRef, useEffect, useState } from 'react';
import Shipping from './Sections/Shipping/Shipping';
import useStrapi from './../hooks/useStrapi';

function App() {
  const blogRef = useRef();
  const asideRef = useRef();

  const [asideStick, setAsideStick] = useState(false);
  const [ctaData] = useStrapi('canvas-cta');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const asideTopDistance = asideRef.current.getBoundingClientRect().top;
    const asideBottomDistance = asideRef.current.getBoundingClientRect().bottom;
    const blogTopDistance = blogRef.current.getBoundingClientRect().top;

    // normali busena
    // aside sicky
    // nuimti nuo aside stiky esant zemiau

    if (asideTopDistance < 85) {
      console.log('stick');

      if (asideBottomDistance > blogTopDistance) {
        console.log('aside bottom reach NOT');
        setAsideStick(false);
        return;
      }

      setAsideStick(true);
    } else {
      // console.log('stick NOT');
      // setAsideStick(false);
    }
  }

  function btnHandler() {
    console.log('blog top', blogRef.current.getBoundingClientRect().top);
    console.log('aside', asideRef.current.getBoundingClientRect().top);
  }

  return (
    <Layout>
      <Hero />
      <Collections />
      <Shop asideStick={asideStick} ref={asideRef} />
      <Blog ref={blogRef} />
      <Cta bg={ctaData.url} title={ctaData.title} subtitle={ctaData.subtitle} />
      <Shipping />
    </Layout>
  );
}

export default App;
