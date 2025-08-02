import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import reva from '../assets/reva.jpg';
import { navigation } from '../constants';
import Button from './Button';
import { useCart } from '../context/CartContext'; // Add cart context

const Header = () => {
  const { pathname } = useLocation();
  const { cartCount } = useCart(); // Get cart count
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-neutral-800/90 backdrop-blur-sm border-b border-neutral-600">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-2">
        {/* Logo */}
        <Link className="flex-1" to="/">
          <img 
            src={reva} 
            width={120}
            height={25}
            alt="REVA"
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10 flex-nowrap overflow-x-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link 
                  key={item.id} 
                  to={item.url} 
                  className={`
                    relative 
                    whitespace-nowrap
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
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Cart Button with count */}
        <Link
          to="/cart"
          className="relative group hover:bg-purple-700/20 p-2 rounded-full transition mr-4"
        >
          <svg
            className="h-6 w-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        {/* SIGN IN button */}
        <Button 
          className="hidden lg:flex" 
          href="/signin"           
          white                   
        >
          SIGN IN
        </Button>

        {/* Mobile Burger Button */}
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