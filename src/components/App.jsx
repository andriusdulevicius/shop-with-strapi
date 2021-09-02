import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Hero from './Sections/Hero';
import Collections from './Sections/Collections/Collections';
import Shop from './Sections/Shop/Shop';
import Blog from './Sections/Blog/Blog';
import Cta from './Sections/CTA/Cta';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Collections />
      <Shop />
      <Blog />
      <Cta />
    </Layout>
  );
}

export default App;
