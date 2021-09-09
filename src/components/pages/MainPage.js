import Hero from './../Sections/Hero';
import Shipping from './../Sections/Shipping/Shipping';
import Cta from './../Sections/CTA/Cta';
import Shop from './../Sections/Shop/Shop';
import Collections from './../Sections/Collections/Collections';
import useStrapi from './../../hooks/useStrapi';
import Blog from './../Sections/Blog/Blog';
import { useRef, useState } from 'react';
import Layout from './../Layout/Layout';

const MainPage = () => {
  const [ctaData] = useStrapi('canvas-cta');
  const blogRef = useRef();
  const asideRef = useRef();

  const [asideStick, setAsideStick] = useState(false);
  // normali busena
  // aside sicky
  // nuimti nuo aside stiky esant zemiau

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // function handleScroll() {
  //   const asideTopDistance = asideRef.current.getBoundingClientRect().top;
  //   const asideBottomDistance = asideRef.current.getBoundingClientRect().bottom;
  //   const blogTopDistance = blogRef.current.getBoundingClientRect().top;

  // function btnHandler() {
  //   console.log('blog top', blogRef.current.getBoundingClientRect().top);
  //   console.log('aside', asideRef.current.getBoundingClientRect().top);
  // }
  // if (asideTopDistance < 85) {
  //   if (asideBottomDistance > blogTopDistance) {
  //     setAsideStick(false);
  //     return;
  //   }

  //   setAsideStick(true);
  // } else {
  //   // console.log('stick NOT');
  //   // setAsideStick(false);
  // }
  // }
  return (
    <Layout>
      <Hero />
      <Collections />
      <Shop asideStick={asideStick} ref={asideRef} />
      <Blog ref={blogRef} qty='2' />
      <Cta bg={ctaData.bg} title={ctaData.title} subtitle={ctaData.subtitle} />
      <Shipping />
    </Layout>
  );
};

export default MainPage;
