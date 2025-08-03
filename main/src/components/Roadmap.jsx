import Section from '../components/Section';
import Heading from '../components/Heading';
import { roadmap } from '../constants';
import { grid } from '../assets';
import TagLine from './Tagline';

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className='container md:pb-10'>
        <Heading tag="Ready to get started" title="what we are working on"/>

        <div className='relative grid gap-8 md:grid-cols-2 md:gap-6 md:pb-[7rem]'>
          {roadmap.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative rounded-[2.5rem] ${item.colorful ? "p-0.25 bg-conic-gradient" : "bg-n-6"} ${index % 2 !== 0 ? "md:translate-y-[7rem]" : ""}`}
            >
              {/* Colorful border wrapper */}
              <div className={`relative h-full rounded-[2.375rem] overflow-hidden ${item.colorful ? "bg-n-8" : ""}`}>
                <div className='relative p-6 rounded-[2rem] overflow-hidden xl:p-10'>
                  {/* Subtle grid background */}
                  <div className='absolute top-0 left-0 w-full h-full opacity-10'>
                    <img
                      src={grid}
                      className='w-full h-full object-cover'
                      alt="Grid"
                    />
                  </div>

                  <div className='relative z-1'>
                    <div className='flex items-center justify-between max-w-[27rem] mb-6 md:mb-12'>
                      <TagLine>{item.date}</TagLine>
                    </div>

                    {/* Large portrait image container */}
                    <div className='mb-8 -mx-4 md:-mx-8'>
                      <div className='relative pt-[125%]'>
                        <img 
                          src={item.imageUrl}
                          className='absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl'
                          alt={item.title}
                          loading='lazy'
                        />
                      </div>
                    </div>

                    <h4 className='h4 mb-3'>{item.title}</h4>
                    <p className='body-2 text-n-4'>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Roadmap;