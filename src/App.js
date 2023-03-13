import './App.css';
import Footer from './components/Footer';
import HeroBnnr from './components/HeroBnnr';
import Navigation from './components/Navigation';

function App() {
  return (
    <main className='container mx-auto flex flex-col justify-between 2xl:h-screen h-auto px-5 md:px-0'>
    <Navigation />
    <HeroBnnr />
    <Footer />
    </main>
  );
}

export default App;
