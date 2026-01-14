import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg"
          >
            🍲
          </motion.div>
          <span className="text-white font-bold text-xl tracking-wide">
            Recipe<span className="text-orange-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider ${
                isActive ? "text-orange-400" : "text-white/80"
              }`
            }
          >
            <motion.span whileHover={{ y: -2 }}>Home</motion.span>
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider ${
                isActive ? "text-orange-400" : "text-white/80"
              }`
            }
          >
            <motion.span whileHover={{ y: -2 }}>Favorite</motion.span>
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="text-orange-400 text-lg"
              >
                Home
              </NavLink>

              <NavLink
                to="/favorite"
                onClick={() => setOpen(false)}
                className="text-orange-400 text-lg"
              >
                Favorite
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
