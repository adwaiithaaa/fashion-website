// Hero.jsx
import React from 'react';
import { useRef } from 'react';
import Button from './Button';
import { ScrollParallax } from 'react-just-parallax';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Hero = () => {
  const parallaxRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 0.77, 0.47, 0.97] // Custom easing for smoothness
      }
    }
  };

  const colorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      color: [
        '#FF3366', // Start color (red-pink)
        '#6B46C1', // Purple
        '#3182CE', // Blue
        '#38A169', // Green
        '#FF3366'  // Back to start
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: 0.5,
        y: { duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97] }
      }
    }
  };

  return (
    <section className="relative pt-[5rem] pb-[3rem] md:pt-[7rem] md:pb-[5rem] overflow-hidden">
      <div className="container relative z-2">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              className="h1 mb-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.span variants={textVariants}>
                Campus Style{' '}
              </motion.span>
              <motion.span variants={colorVariants}>
                Redefined
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="body-1 mb-8 text-n-2 max-w-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Discover affordable, trendy fashion that fits your student lifestyle. 
              Look great without breaking the bank.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button href="#shop" white>
                Shop Now
              </Button>
              <Button href="#trends">
                View Trends
              </Button>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <div className="lg:w-1/2 relative" ref={parallaxRef}>
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
              <ScrollParallax strength={0.05}>
                <motion.img
                  src={image1}
                  width={400}
                  height={500}
                  alt="Casual campus outfit"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
              </ScrollParallax>
              <div className="flex flex-col gap-4 mt-8">
                <ScrollParallax strength={0.03}>
                  <motion.img
                    src={image2}
                    width={300}
                    height={300}
                    alt="Student accessories"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  />
                </ScrollParallax>
                <ScrollParallax strength={0.07}>
                  <motion.img
                    src={image3}
                    width={300}
                    height={300}
                    alt="Group of students"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
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