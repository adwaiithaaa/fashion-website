import React, { createContext, useContext, useState, useEffect } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const showToast = (msg) => {
        setMessage(msg);
        setVisible(true);
        setTimeout(() => setVisible(false), 2000); // disappears after 2s
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {visible && (
                <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[9999] transition-all duration-300">
                    {message}
                </div>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
