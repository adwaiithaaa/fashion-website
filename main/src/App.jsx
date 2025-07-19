import ButtonGradient from './assets/svg/ButtonGradient';
import Benifits from './components/Benifits';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Benifits/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App;