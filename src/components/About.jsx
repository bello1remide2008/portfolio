
import { motion } from "framer-motion";
import { FaShieldAlt,  FaCode, FaLaptopCode, } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-20 md:px-12">

      {/* About heading */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <FaShieldAlt className="text-3xl text-[#FFFDD0]" />

          <h1 className="bg-gradient-to-r from-white via-zinc-200 to-[#FFFDD0] bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            About IreCoding
          </h1>
        </div>

        <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          Welcome to IreCoding! I'm a passionate developer dedicated to
          creating amazing web experiences.
        </p>
      </div>

      {/* Services section */}
      <div className="mx-auto mt-16 max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          My Skills & Services
          <span className="mt-3 block text-sm font-medium tracking-widest text-[#FFFDD0]">
            what i can use to build your project
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg transition-colors duration-300 hover:border-[#FFFDD0]/50"
          >
            <FaRegFileCode className="mb-5 text-3xl text-[#FFFDD0]" />

            <h3 className="mb-4 text-xl font-bold text-white">
              HTML AND CSS DEVELOPMENT
            </h3>

            <p className="leading-7 text-zinc-400">
             I use HTML and CSS to create responsive and visually appealing websites with great user experiences.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg transition-colors duration-300 hover:border-[#FFFDD0]/50"
          >
            <FaCode className="mb-5 text-3xl text-[#FFFDD0]" />

            <h3 className="mb-4 text-xl font-bold text-white">
              JAVASCRPT MODULES AND PYTHON
            </h3>

            <p className="leading-7 text-zinc-400">
             I develop JavaScript modules using react, node and other modules and Python scripts to create powerful and efficient web applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg transition-colors duration-300 hover:border-[#FFFDD0]/50"
          >
            <FaLaptopCode className="mb-5 text-3xl text-[#FFFDD0]" />

            <h3 className="mb-4 text-xl font-bold text-white">
              Backend frameworks using express
            </h3>

            <p className="leading-7 text-zinc-400">
              I build robust backend APIs and services using Express.js and other modern frameworks to ensure seamless integration and optimal performance.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Skills section */}
      <div className="mx-auto mt-20 max-w-6xl">
        <Skills />
      </div>

    </section>
  );
};

export default About;