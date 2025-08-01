import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductSkeleton } from '../components/ProductSkeleton';
import { useCart } from '../context/CartContext';
import reva from '../assets/reva.jpg';

const MainSellerPage = () => {
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { addToCart, cartCount } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#0A070F] text-white font-sans transition-colors duration-300 ease-in-out">
            {/* Navigation */}
            <header className="fixed top-0 left-0 z-50 w-full bg-[#2E2E2E] border-b border-gray-700 shadow-lg">
                <div className="flex items-center justify-between px-6 lg:px-12 py-4">
                    <Link to="/" className="flex-shrink-0">
                        <img src={reva} width={130} alt="REVA" className="object-contain" />
                    </Link>

                    <div className="flex-1" />

                    <nav className="hidden md:flex gap-8 uppercase font-semibold tracking-wide text-sm text-gray-300">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/our-collection', label: 'Collection' },
                            { to: '/game', label: 'Game' },
                        ].map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className="hover:text-purple-400 transition-colors duration-300"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 ml-6">
                        <Link
                            to="/cart"
                            aria-label="View cart"
                            className="relative group hover:bg-purple-700/20 p-2 rounded-full transition"
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
                        <button className="md:hidden text-white focus:outline-none" aria-label="Open menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="pt-28" />

            {/* Hero */}
            <section className="relative h-[32rem] overflow-hidden rounded-xl shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2070&q=80"
                    alt="Fashion Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/90 to-black/70 z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold text-white tracking-wide leading-tight"
                    >
                        Discover Your <span className="text-purple-400">Style</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {[
                            { category: 'women', label: "Women's Collection" },
                            { category: 'men', label: "Men's Collection" },
                            { category: 'accessories', label: 'Accessories' },
                        ].map(({ category, label }) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className="px-6 py-3 text-sm font-semibold rounded-full bg-purple-600 hover:bg-purple-500 transition-all shadow-md"
                            >
                                {label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-14 tracking-tight">
                        <span className="text-white">Our</span> <span className="text-purple-400">Collection</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {loading
                            ? Array(8)
                                .fill()
                                .map((_, index) => <ProductSkeleton key={index} />)
                            : filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-900 border border-purple-800/50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl"
                                >
                                    <Link to={`/product/${product.id}`}>
                                        <div className="relative h-64">
                                            <motion.img
                                                src={product.image || '/default-image.jpg'}
                                                alt={product.title || 'Product image'}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                                                <span className="text-white font-semibold text-lg">
                                                    {product.price.toLocaleString()} points
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="text-purple-400 font-semibold text-lg">{product.title}</h3>
                                            <p className="text-purple-400 text-sm line-clamp-2">
                                                {product.description || 'No description available'}
                                            </p>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    addToCart(product);
                                                }}
                                                className="w-full bg-purple-600 hover:bg-purple-500 py-2 rounded text-white font-medium transition"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainSellerPage;















