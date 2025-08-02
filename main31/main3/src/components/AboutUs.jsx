import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Fashion, Points & Purpose
          </motion.h1>
          <p className="text-gray-400 text-lg mb-6">
            We are building a fashion ecosystem that runs on creativity,
            community, and sustainability. Earn points. Style more. Waste less.
          </p>
          <div className="flex gap-4">
            <Link to="/signup">
              <button className="bg-purple-500 hover:bg-purple-600 text-black px-6 py-3 rounded-full font-semibold transition">
                Join Now
              </button>
            </Link>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Fashion
            </button>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="image5.jpeg"
          alt="Fashion Hero"
          className="md:w-1/2 rounded-xl object-cover hover:scale-105 transition duration-500 ease-in-out shadow-xl"
        />
      </section>

      {/* Dress to Impress Section */}
      <section className="px-6 md:px-20 py-20 bg-[linear-gradient(to_right,_#2e1a47,_#1f1f2e)]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            src="image6.jpeg"
            alt="Dress to Impress"
            className="rounded-xl object-cover hover:scale-105 transition duration-500 ease-in-out shadow-xl"
          />
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              🏆 Dress to Impress
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Compete in our weekly themed fashion challenge. Submit your look,
              get votes, and rank in the top 3 to earn big points.
            </p>
            <p className="text-gray-400 text-lg">
              Fashion meets fun. It's not just about wearing outfits—it's about
              winning them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="px-6 md:px-20 py-20 bg-gray-900">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              🌿 Fashion That Gives Back
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Our circular fashion model encourages borrowing, renting, and
              swapping—helping reduce waste and extend the life of clothes.
            </p>
            <p className="text-gray-400 text-lg">
              Every outfit reused is one less added to landfills. Let's make
              sustainable fashion the new default.
            </p>
          </motion.div>
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            src="image4.jpeg"
            alt="Sustainable Fashion"
            className="rounded-xl object-cover hover:scale-105 transition duration-500 ease-in-out shadow-xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-6 md:px-20 py-20 bg-[linear-gradient(to_right,_#2e1a47,_#1f1f2e)]">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Join the Movement
        </motion.h2>
        <p className="text-gray-400 text-lg mb-8">
          Build your wardrobe, win points, and help redefine fashion with
          purpose.
        </p>
        <Link to="/signup">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition">
            Sign Up & Start Earning
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;