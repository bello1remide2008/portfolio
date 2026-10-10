import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const logoLetters = [
  { letter: "I", color: "text-orange-400" },
  { letter: "R", color: "text-pink-400" },
  { letter: "E", color: "text-cyan-400" },
  { letter: "C", color: "text-yellow-400" },
  { letter: "O", color: "text-green-400" },
  { letter: "D", color: "text-blue-400" },
  { letter: "I", color: "text-purple-400" },
  { letter: "N", color: "text-red-400" },
  { letter: "G", color: "text-emerald-400" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center"
          >
            <motion.div
              className="flex items-center font-black text-2xl md:text-3xl tracking-tight"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {logoLetters.map((item, index) => (
                <motion.span
                  key={`${item.letter}-${index}`}
                  className={item.color}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.08,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                >
                  {item.letter}
                </motion.span>
              ))}
            </motion.div>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="flex flex-col gap-2 py-4 pb-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;;