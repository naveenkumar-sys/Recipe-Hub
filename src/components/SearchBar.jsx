import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRecipes } from "../context/RecipeContext";

const SearchBar = () => {
  const { fetchMeals } = useRecipes();

  const handleChange = (e) => {
    const query = e.target.value;
    fetchMeals(query);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
        {/* <FaSearch className="text-orange-400 text-xl mr-4" /> */}

        <input
          type="text"
          placeholder="Search recipes..."
          className="flex-1 bg-transparent outline-none  placeholder-black/50 text-lg text-black"
          onChange={(e) => handleChange(e)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-black px-6 py-2 rounded-xl font-semibold"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
