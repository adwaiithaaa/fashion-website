import React, { useState } from 'react';
import { menProducts, womenProducts } from '../constants';
import Button from './Button';

const Retail = () => {
  const [menItems, setMenItems] = useState(menProducts);
  const [womenItems, setWomenItems] = useState(womenProducts);
  const [activeTab, setActiveTab] = useState('men');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [cart, setCart] = useState([]);
  const [userPoints, setUserPoints] = useState(1000);

  // Get current products
  const currentProducts = activeTab === 'men' ? menItems : womenItems;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsPage = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0 && selectedProduct) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (activeTab === 'men') {
            setMenItems(menItems.map(item => 
              item.id === selectedProduct.id 
                ? { 
                    ...item, 
                    images: [...(item.images || []), e.target.result] 
                  } 
                : item
            ));
          } else {
            setWomenItems(womenItems.map(item => 
              item.id === selectedProduct.id 
                ? { 
                    ...item, 
                    images: [...(item.images || []), e.target.result] 
                  } 
                : item
            ));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const addToCart = (product, action) => {
    setCart([...cart, { ...product, action }]);
  };

  const handlePurchase = () => {
    const totalCost = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$','')), 0);
    if (userPoints >= totalCost) {
      setUserPoints(userPoints - totalCost);
      setCart([]);
      alert(`Purchase successful! Remaining points: ${userPoints - totalCost}`);
    } else {
      alert("Not enough points for this purchase");
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const renderProductCard = (product) => (
    <div 
      key={product.id} 
      className={`relative group bg-gray-900 rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg
        ${selectedProduct?.id === product.id ? 'border-purple-500 ring-2 ring-purple-300' : 'border-purple-900'}`}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Portrait Image Display */}
      <div className="relative h-[400px] bg-black flex items-center justify-center">
        {product.image || product.images?.length > 0 ? (
          <div className="relative w-full h-full">
            <img 
              src={product.image || product.images[product.images.length - 1]} 
              alt={product.name}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'top' }}
            />
            {product.images?.length > 1 && (
              <div className="absolute bottom-2 right-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-full">
                +{product.images.length - 1}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
            <svg 
              className="w-12 h-12 text-purple-500 mb-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-purple-300 text-sm">No images</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-white">{product.name}</h3>
          <span className="text-sm text-purple-300">{activeTab === 'men' ? "Men" : "Women"}</span>
        </div>
        <span className="text-purple-400 font-medium">{product.price}</span>
        
        {/* Buy/Rent Buttons - Moved below image */}
        <div className="flex space-x-2 mt-4">
          <Button 
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 'buy');
            }}
          >
            Buy Now
          </Button>
          <Button 
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 'rent');
            }}
          >
            Rent
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-purple-900 mb-8">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'men' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => {
              setActiveTab('men');
              setCurrentPage(1);
              setSelectedProduct(null);
            }}
          >
            Men's Collection
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'women' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => {
              setActiveTab('women');
              setCurrentPage(1);
              setSelectedProduct(null);
            }}
          >
            Women's Collection
          </button>
        </div>

        {/* Image Upload Section */}
        <div className={`mb-8 p-6 rounded-xl bg-gray-900/80 backdrop-blur-sm border transition-all duration-300
          ${selectedProduct ? 'border-purple-500' : 'border-purple-900/50'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-white">
                {selectedProduct ? `Upload images for ${selectedProduct.name}` : 'Select a product to upload images'}
              </h3>
              <p className="text-purple-300 text-sm mt-1">
                {selectedProduct ? 'Click the button below to select portrait images from your device' : 'Click on any product to select it'}
              </p>
            </div>
            
            {selectedProduct ? (
              <div className="flex space-x-3">
                <label className="cursor-pointer flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    multiple
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Upload Portrait Images
                  </Button>
                </label>
                <Button 
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="px-4 py-3 rounded-md bg-gray-800/50 text-purple-300 text-center">
                Select a product to upload images
              </div>
            )}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProductsPage.map(product => renderProductCard(product))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-800 text-purple-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-md ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-gray-800 text-purple-400 hover:bg-gray-700'}`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-800 text-purple-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-900 max-w-xs w-full z-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium">Your Cart ({cart.length})</h3>
            <span className="text-purple-400 font-medium">Points: {userPoints}</span>
          </div>
          
          <div className="max-h-40 overflow-y-auto mb-3">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                <div>
                  <p className="text-white text-sm">{item.name}</p>
                  <p className="text-purple-300 text-xs">{item.action === 'buy' ? 'Purchase' : 'Rental'} - {item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-white">Total:</span>
            <span className="text-purple-400 font-medium">
              {cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$','')), 0)} points
            </span>
          </div>

          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handlePurchase}
          >
            Complete Purchase
          </Button>
        </div>
      )}
    </div>
  );
};

export default Retail;