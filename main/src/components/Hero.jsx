// Hero.jsx
import { useRef } from 'react';
import Button from './Button';
import { ScrollParallax } from 'react-just-parallax';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section className="relative pt-[5rem] pb-[3rem] md:pt-[7rem] md:pb-[5rem] overflow-hidden">
      <div className="container relative z-2">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="h1 mb-6">
              Campus Style <span className="text-color-1">Redefined</span>
            </h1>
            <p className="body-1 mb-8 text-n-2 max-w-lg">
              Discover affordable, trendy fashion that fits your student lifestyle. 
              Look great without breaking the bank.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="#shop" white>
                Shop Now
              </Button>
              <Button href="#trends">
                View Trends
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:w-1/2 relative" ref={parallaxRef}>
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
              <ScrollParallax strength={0.05}>
            
                <img
                src={image1}
                width={400}
                height={500}
                alt="Casual campus outfit"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              </ScrollParallax>
              <div className="flex flex-col gap-4 mt-8">
                <ScrollParallax strength={0.03}>
        
                <img
                  src={image2}
                  width={300}
                  height={300}
                  alt="Student accessories"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                </ScrollParallax>
                <ScrollParallax strength={0.07}>
                 
                <img
                  src={image3}
                  width={300}
                  height={300}
                  alt="Group of students"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                </ScrollParallax>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-color-1 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-color-6 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;