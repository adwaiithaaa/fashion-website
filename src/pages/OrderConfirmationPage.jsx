import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const OrderConfirmationPage = () => {
    const [remainingPoints, setRemainingPoints] = useState(null);

    useEffect(() => {
        const points = localStorage.getItem('remainingPoints');
        if (points) {
            setRemainingPoints(Number(points));
        }
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <FaCheckCircle className="text-green-400 text-6xl mb-4" />
            <h1 className="text-3xl font-bold text-purple-300 mb-2">Order Confirmed!</h1>
            <p className="text-gray-400 text-center max-w-md mb-6">
                Thank you for your purchase. Your order has been placed successfully.
            </p>

            {remainingPoints !== null && (
                <div className="text-lg text-green-400 mb-4">
                    Available Balance: <span className="font-semibold">{remainingPoints.toLocaleString()} pts</span>
                </div>
            )}

            <Link
                to="/"
                className="inline-flex items-center bg-purple-600 px-6 py-3 rounded hover:bg-purple-700 text-white"
            >
                <FaHome className="mr-2" />
                Back to Shopping
            </Link>
        </div>
    );
};

export default OrderConfirmationPage;


