import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRecipes } from "../context/RecipeContext";
import ButtonHoverOutLine from "../components/ButtonHoverOutLine";

const FavoriteCard = ({ meal }) => {
  const { favorites, setFavorites } = useRecipes();

  const handleRemove = (meal) => {
    const filter = favorites.filter((item) => item.idMeal !== meal.idMeal);
    setFavorites(filter);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg relative"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <FontAwesomeIcon
        icon={faHeart}
        className="absolute top-2 right-2 text-red-400 text-xl cursor-pointer z-10 hover:text-red-500"
        onClick={(e) => {
          e.stopPropagation(); // stop Link click
          e.preventDefault(); // stop navigation
          handleRemove(meal);
        }}
      />

      <div className="p-4 text-black">
        <h3 className="font-semibold text-2xl">{meal.strMeal}</h3>
      </div>

      <div className="p-4 text-black flex justify-between">
        {meal.strCategory ? (
          <p>{meal.strCategory}</p>
        ) : (
          <p className="opacity-50">—</p>
        )}
        {meal.strArea ? (
          <p>📍{meal.strArea}</p>
        ) : (
          <p className="opacity-50">—</p>
        )}
      </div>

      {/* Hover Button */}
      <Link
        to={`/recipeDetails/${meal.idMeal}`}
        className="absolute inset-0 flex items-center justify-center
                   bg-black/50 opacity-0 group-hover:opacity-100
                   transition-all duration-300"
      >
        <ButtonHoverOutLine text="View Recipe" />
      </Link>
    </motion.div>
  );
};

export default FavoriteCard;
