import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className='font-Poppins'>
      <Navbar />
      <Hero />
      <Banner />
      <Explore />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
