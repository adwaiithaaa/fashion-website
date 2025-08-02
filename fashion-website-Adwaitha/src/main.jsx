import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext'; // ✅ Import this

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <ToastProvider> {/* ✅ Wrap App with ToastProvider */}
                    <App />
                </ToastProvider>
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);

