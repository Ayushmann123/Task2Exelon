import logo from './logo.svg';
import './App.css';
import FeaturedCollections from './components/FeaturedCollections';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Opening from './components/Opening';
import Newsletter from './components/Newsletter';

function App() {
  return (
  <>
  <Opening/>
  <FeaturedCollections/>
   <Highlights/>
   <Newsletter/>

<Footer/>
  </>
  );
}

export default App;
