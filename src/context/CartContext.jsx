import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('❌ Failed to parse cart data:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('❌ Failed to save cart to localStorage:', error);
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item =>
                item.id === product.id && item.selectedSize === product.selectedSize
            );

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedSize === product.selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId, selectedSize) => {
        setCart(prevCart =>
            prevCart.filter(item => !(item.id === productId && item.selectedSize === selectedSize))
        );
    };

    const updateQuantity = (productId, selectedSize, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId, selectedSize);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId && item.selectedSize === selectedSize
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const cartWithItemTotals = cart.map(item => ({
        ...item,
        itemTotal: item.price * item.quantity,
    }));

    return (
        <CartContext.Provider
            value={{
                cart,
                cartWithItemTotals,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);









