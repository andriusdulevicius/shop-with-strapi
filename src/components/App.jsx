import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Header from './Layout/Header';
import Hero from './Sections/Hero';
import Collections from './Sections/Collections/Collections';
import Shop from './Sections/Shop/Shop';
import Blog from './Sections/Blog/Blog';
import Cta from './Sections/CTA/Cta';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Collections />
      <Shop />
      <Blog />
      <Cta />
    </div>
  );
}

export default App;
