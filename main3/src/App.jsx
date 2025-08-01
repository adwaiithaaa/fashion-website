import ButtonGradient from './assets/svg/ButtonGradient';
import Competition from './components/Competition';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Competition/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App;