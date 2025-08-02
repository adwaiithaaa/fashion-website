import React, { useEffect, useState } from 'react';

const BuyPointsPage = () => {
    const conversionRate = 10; // 1 INR = 10 Points
    const [amountInINR, setAmountInINR] = useState('');
    const [points, setPoints] = useState(0);
    const [userPoints, setUserPoints] = useState(0);
    const [coupon, setCoupon] = useState('');
    const [bonusPercent, setBonusPercent] = useState(0);

    const fixedUpiID = 'reyva@upi'; // Your actual UPI ID here

    const couponList = {
        SAVE10: 10,
        FEST50: 50,
        BONUS25: 25,
    };

    useEffect(() => {
        const savedPoints = Number(localStorage.getItem('userPoints')) || 0;
        setUserPoints(savedPoints);
    }, []);

    const updatePoints = (newTotal) => {
        setUserPoints(newTotal);
        localStorage.setItem('userPoints', newTotal);
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && Number(value) >= 0) {
            setAmountInINR(value);
            const basePoints = Number(value) * conversionRate;
            const bonus = basePoints * (bonusPercent / 100);
            setPoints(basePoints + bonus);
        }
    };

    const applyCoupon = () => {
        const upperCode = coupon.trim().toUpperCase();
        if (couponList[upperCode]) {
            const bonus = couponList[upperCode];
            setBonusPercent(bonus);
            const basePoints = Number(amountInINR) * conversionRate;
            const bonusPoints = basePoints * (bonus / 100);
            setPoints(basePoints + bonusPoints);
            alert(`🎉 Coupon Applied! +${bonus}% Bonus`);
        } else {
            alert("❌ Invalid Coupon Code");
            setBonusPercent(0);
            const basePoints = Number(amountInINR) * conversionRate;
            setPoints(basePoints);
        }
    };

    const handleBuy = () => {
        const amount = Number(amountInINR);
        if (amount <= 0) {
            alert("Enter a valid amount");
            return;
        }

        const newTotal = userPoints + points;
        updatePoints(newTotal);
        alert(`✅ You purchased ${points.toFixed(0)} points for ₹${amount}.\nPlease ensure payment is made to ${fixedUpiID}`);

        // Reset
        setAmountInINR('');
        setPoints(0);
        setCoupon('');
        setBonusPercent(0);
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-xl p-8 bg-gray-900 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center">Buy Points</h1>

                <div className="mb-4 p-4 bg-gray-800 rounded-lg text-green-400 text-center">
                    🏦 Your Balance: <span className="font-bold">{userPoints} Points</span>
                </div>

                <p className="text-gray-400 mb-6 text-center">
                    Conversion Rate: <span className="text-purple-400 font-semibold">₹1 = {conversionRate} Points</span>
                </p>

                <label className="block mb-2 text-sm">Enter Amount (INR)</label>
                <input
                    type="number"
                    value={amountInINR}
                    onChange={handleAmountChange}
                    placeholder="e.g. 100"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600 mb-4"
                />

                <label className="block mb-2 text-sm">Coupon Code (optional)</label>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="e.g. SAVE10"
                        className="flex-1 p-3 rounded-l bg-gray-800 border border-gray-600"
                    />
                    <button
                        onClick={applyCoupon}
                        className="px-4 bg-purple-600 hover:bg-purple-500 rounded-r text-white font-semibold"
                    >
                        Apply
                    </button>
                </div>

                <div className="mb-6 text-center">
                    <p className="text-lg">
                        You will receive:{" "}
                        <span className="text-green-400 font-bold">{points.toFixed(0)} Points</span>
                        {bonusPercent > 0 && (
                            <span className="text-sm text-yellow-400 ml-2">(+{bonusPercent}% Bonus)</span>
                        )}
                    </p>
                </div>

                <div className="mb-4 text-center">
                    <p className="mb-2 text-sm text-gray-400">Scan this UPI QR to Pay</p>
                    <img
                        src="/your-qr-code.jpg"
                        alt="UPI QR Code"
                        className="w-48 h-48 mx-auto border border-gray-700 rounded"
                    />
                    <p className="mt-2 text-sm text-gray-300">or pay to: <span className="text-yellow-300 font-semibold">{fixedUpiID}</span></p>
                </div>

                <button
                    onClick={handleBuy}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold text-white"
                >
                    CONFIRM PAYMENT
                </button>
            </div>
        </div>
    );
};

export default BuyPointsPage;






