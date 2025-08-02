import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CheckoutPage = () => {
    const { cartWithItemTotals, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [userPoints] = useState(5000);
    const discount = cartTotal > 2000 ? cartTotal * 0.1 : 0;
    const deliveryCharge = cartTotal > 1000 ? 0 : 50;
    const finalTotal = cartTotal - discount + deliveryCharge;
    const remainingPoints = userPoints - finalTotal;
    const hasEnoughPoints = remainingPoints >= 0;

    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        paymentMethod: 'UPI',
        notes: '',
        agree: false,
    });

    const [showTerms, setShowTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleOrder = (e) => {
        e.preventDefault();
        if (!form.agree) {
            alert('Please agree to the terms before placing order.');
            return;
        }
        if (!hasEnoughPoints) {
            alert('You do not have enough points to place this order.');
            return;
        }
        clearCart();
        navigate('/order-confirmation');
    };

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="mb-6">
                <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-200">
                    <FaArrowLeft className="mr-2" />
                    Back to Shopping
                </Link>
            </div>

            <h2 className="text-3xl font-bold mb-6">Checkout</h2>

            <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-purple-300">Points Summary</h3>
                <div className="space-y-1 text-sm">
                    <p>Your Points: <span className="font-semibold text-white">{userPoints.toLocaleString()} pts</span></p>
                    <p>Final Total: <span className="text-white font-semibold">{finalTotal.toLocaleString()} pts</span></p>
                    <p>
                        Remaining Points:{" "}
                        <span className={`font-semibold ${hasEnoughPoints ? "text-green-400" : "text-red-400"}`}>
                            {remainingPoints.toLocaleString()} pts
                        </span>
                    </p>
                    {!hasEnoughPoints && (
                        <p className="text-red-400">❌ You don’t have enough points to complete this order.</p>
                    )}
                </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Your Items</h3>
                {cartWithItemTotals.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cartWithItemTotals.map((item, index) => (
                            <div key={index} className="border-b border-gray-700 py-4 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded-md border border-gray-700"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold">{item.title}</div>
                                    {item.size && (
                                        <div className="text-sm text-gray-400">Size: {item.size}</div>
                                    )}
                                    <div className="text-sm text-gray-400">Quantity: {item.quantity}</div>
                                    <div className="text-sm text-gray-400">
                                        Price per item: {item.price.toLocaleString()} pts
                                    </div>
                                </div>
                                <div className="font-bold text-right">
                                    {item.itemTotal.toLocaleString()} pts
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 text-sm space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{cartTotal.toLocaleString()} pts</span>
                            </div>
                            <div className="flex justify-between text-green-400">
                                <span>Discount:</span>
                                <span>-{discount.toLocaleString()} pts</span>
                            </div>
                            <div className="flex justify-between text-yellow-400">
                                <span>Delivery Charges:</span>
                                <span>{deliveryCharge.toLocaleString()} pts</span>
                            </div>
                            <hr className="border-gray-700 my-2" />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total Payable:</span>
                                <span>{finalTotal.toLocaleString()} pts</span>
                            </div>
                            <div className="text-right text-sm text-gray-400">
                                Estimated delivery by <span className="text-white font-medium">{formattedDate}</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <form onSubmit={handleOrder} className="space-y-4 max-w-xl">
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Delivery Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />

                <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                >
                    <option value="UPI">UPI</option>
                    <option value="Card">Credit/Debit Card</option>
                    <option value="COD">Cash on Delivery</option>
                </select>

                <textarea
                    name="notes"
                    placeholder="Order Notes (optional)"
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />

                {/* Terms and Conditions */}
                <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="accent-purple-600 mt-1"
                        />
                        <label htmlFor="agree" className="text-sm text-gray-300">
                            I agree to the{" "}
                            <button
                                type="button"
                                onClick={() => setShowTerms(!showTerms)}
                                className="underline text-purple-400 hover:text-purple-300"
                            >
                                Terms and Conditions
                            </button>
                        </label>
                    </div>

                    {showTerms && (
                        <div className="ml-6 mt-2 bg-gray-800 p-3 rounded text-xs text-gray-400">
                            <ul className="list-disc pl-4 space-y-1">
                                <li>All orders are final and non-refundable once confirmed.</li>
                                <li>Delivery times are estimates and may vary due to logistics.</li>
                                <li>Products are subject to availability and may be limited.</li>
                                <li>We are not liable for delays caused by third-party services.</li>
                                <li>Misuse of the platform may lead to order cancellation.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!hasEnoughPoints}
                    className={`w-full py-3 rounded font-semibold transition 
                        ${hasEnoughPoints
                        ? 'bg-purple-600 hover:bg-purple-500 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;





