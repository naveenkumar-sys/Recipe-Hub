import React from "react";
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
      className="w-full max-w-2xl mx-auto mb-12 px-4"
    >
      <div
        className="flex flex-col sm:flex-row gap-4
                   bg-white/10 backdrop-blur-xl 
                   border border-white/20 
                   rounded-2xl p-4 shadow-lg"
      >
        {/* Input */}
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full bg-transparent outline-none
                     placeholder-black/50 text-lg text-black
                     px-4 py-3 rounded-xl border border-white/20"
          onChange={handleChange}
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto
                     bg-orange-500 text-black 
                     px-6 py-3 rounded-xl 
                     font-semibold"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
