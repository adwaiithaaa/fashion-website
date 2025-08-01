import ButtonGradient from './assets/svg/ButtonGradient';
import Footer from './components/Footer';
import Header from './components/Header';
import Retail from './components/Retail';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Retail/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App;