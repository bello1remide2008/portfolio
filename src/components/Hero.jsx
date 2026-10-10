
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 lg:px-20">
      
      <div className="max-w-6xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase mb-5"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          I BUILD
          <br />

          <span className="text-gray-400">
            DIGITAL EXPERIENCES.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed"
        >
          I'm Ire, a web developer passionate about building modern,
          responsive and interactive websites with clean code and
          great user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/about"
            className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition duration-300"
          >
            About Me
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3 border border-gray-700 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;