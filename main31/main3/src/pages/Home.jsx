import React from 'react';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Hero from '../components/Hero';
import Benifits from '../components/Benifits';
import Roadmap from '../components/Roadmap';

const Home = () => {
  return (
    
      <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Hero/>
        <Benifits/>
        <Roadmap/>
      </div><ButtonGradient />
      </>
    
  );
}
export default Home;