import { useLocation } from 'react-router-dom';
import reva from '../assets/reva.jpg';
import { navigation } from '../constants';
import Button from './Button';

const Header = () => {
  const { pathname, hash } = useLocation();
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-neutral-800/90 backdrop-blur-sm border-b border-neutral-600">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-2">
        {/* Logo - now with flex-1 to take available space */}
        <a className="flex-1" href="#hero">
          <img 
            src={reva} 
            width={120}
            height={25}
            alt="REVA"
            className="object-contain"
          />
        </a>

        {/* Desktop Navigation - centered with flex-1 */}
        {/* Desktop Navigation - centered with flex-1 */}
<nav className="hidden md:flex flex-1 justify-center">
  <div className="flex items-center gap-6 lg:gap-8 xl:gap-10 flex-nowrap overflow-x-auto">
    {navigation.map((item) => {
      const isActive = hash === item.url || pathname === item.url;
      return (
        <a 
          key={item.id} 
          href={item.url} 
          className={`
            relative 
            whitespace-nowrap // Prevents text wrapping
            font-code 
            uppercase 
            transition-colors 
            duration-300
            ${isActive ? "text-white" : "text-gray-400"}
            hover:text-purple-500
            text-sm
            lg:text-base
            font-semibold
            ${item.onlyMobile ? "lg:hidden" : ""}
            px-2 py-1
          `}
        >
          {item.title}
          {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
          )}
        </a>
      );
    })}
  </div>
</nav>

        <a href='#signup' className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
          NEW ACCOUNT
        </a>
        <Button 
          className="hidden lg:flex" 
          href="#login"           
          white                   
        >
          SIGN IN
        </Button>
        


        {/* Empty flex-1 div to balance the layout */}
        <div className="flex-1 md:hidden"></div>

        {/* Mobile Burger Button - aligned to right */}
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>


      </div>
    </div>
  );
};

export default Header;