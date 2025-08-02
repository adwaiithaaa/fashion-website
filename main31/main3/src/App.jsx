import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Competition from "./components/Competition";
import Retail from "./components/Retail";
import MainSellerPage from "./pages/MainSellerPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./context/CartContext";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import AboutUs from "./components/AboutUs";

export default function App() {
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <div className="app" style={{ minHeight: '100vh', background: '#0f0f0f' }}>
      <Header/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Home />
          </motion.div>
        } />
        
        <Route path="/shop" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainSellerPage />
          </motion.div>
        } />
        
        <Route path="/resell" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Retail />
          </motion.div>
        } />
        
        <Route path="/compete" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Competition />
          </motion.div>
        } />
        
        <Route path="/signin" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SignIn />
          </motion.div>
        } />
        
        <Route path="/signup" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SignUp />
          </motion.div>
        } />
        
        <Route path="/product/:id" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProductDetailPage />
          </motion.div>
        } />
        
        <Route path="/cart" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CartPage />
          </motion.div>
        } />
        <Route path="/aboutus" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AboutUs />
          </motion.div>
        } />
      </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}