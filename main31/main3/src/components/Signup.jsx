import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle registration
    console.log('Signing up with:', { name, email, password });
    // After successful sign up, you might redirect:
    // navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center px-4 relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #000000, #1a0f2f, #6b21a8), url('/bg-graphic.jpg')",
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="text-sm bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-10 py-12 z-10">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Join <span className="text-purple-500">REVA</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Discover trendy fashion tailored for students. Sign up and stay ahead of the curve.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 text-left">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500 placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500 placeholder-gray-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500 placeholder-gray-400"
              required
            />
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/signin" className="text-purple-400 underline hover:text-purple-300">
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:block w-full lg:w-1/2">
          <img
            src="/image2.jpeg"
            alt="Campus Style"
            className="rounded-xl shadow-lg object-cover w-full h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;