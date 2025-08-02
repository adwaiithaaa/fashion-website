// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-n-8 text-n-1 px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
            <p className="text-lg md:text-2xl mb-6">Page Not Found</p>
            <Link
                to="/"
                className="bg-color-1 text-white px-6 py-2 rounded-md hover:bg-color-2 transition duration-200"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
