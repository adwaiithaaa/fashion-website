import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    return (
        <div className="min-h-screen bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-purple-300">Your Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl mb-4">Your cart is empty</p>
                        <Link
                            to="/"
                            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {cart.map(item => (
                                <div key={item.uniqueId} className="flex flex-col sm:flex-row gap-4 border-b border-purple-900 py-6">
                                    <div className="w-full sm:w-32 h-32 bg-gray-800 rounded overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-purple-100">{item.title}</h3>
                                        <p className="text-sm text-purple-300 mb-1">Size: {item.selectedSize}</p>
                                        <p className="text-sm text-purple-300">Unit Price: {item.price.toLocaleString()} points</p>
                                        <p className="text-purple-400 mb-2 font-medium">
                                            Item Total: {(item.price * item.quantity).toLocaleString()} points
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border border-purple-700 rounded">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                                    className="px-3 py-1 text-purple-300 hover:bg-purple-900"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                                    className="px-3 py-1 text-purple-300 hover:bg-purple-900"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                className="text-red-400 hover:text-red-300"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg h-fit sticky top-4">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal (...)</span>
                                    <span>{cartTotal.toLocaleString()} points</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>{cartTotal.toLocaleString()} points</span>
                                </div>
                                <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;


