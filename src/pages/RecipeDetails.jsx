import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecipes } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const { loading, selectedMeal, fetchMealById } = useRecipes();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    fetchMealById(id);
  }, [id]);

  if (loading || !selectedMeal) {
    return <p className="text-center text-white mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-10 ">
      <Link to={"/"} className="hover:text-orange-400 text-xl">
        {" "}
        ◀️ Back{" "}
      </Link>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
        <div>
          {/* Image */}
          <motion.img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{selectedMeal.strMeal}</h1>
          <p className="text-orange-400 mb-2">{selectedMeal.strCategory}</p>
          <p className="text-white/70 mb-6">{selectedMeal.strArea}</p>
          <div className="flex justify-around cursor-pointer ">
            <h2
              className={`text-2xl font-semibold mb-2 ${
                display ? "text-orange-400" : "text-white"
              }`}
              onClick={() => setDisplay(true)}
            >
              Ingredients
            </h2>
            <h2
              className={`text-2xl font-semibold mb-2 ${
                display ? "text-white" : "text-orange-400"
              }`}
              onClick={() => setDisplay(false)}
            >
              Instructions
            </h2>
          </div>
          {display === true ? (
            <div>
              <ul className="space-y-2 mt-4">
                {/* creating the new loop accessing based on the number  */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                  const ingredient = selectedMeal[`strIngredient${num}`];
                  const measure = selectedMeal[`strMeasure${num}`];

                  if (!ingredient || ingredient.trim() === "") return null;

                  return (
                    <li
                      key={num}
                      className="flex justify-between bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white/80"
                    >
                      <span>{ingredient}</span>
                      <span className="text-orange-400">{measure}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div>
              <ul className="space-y-3 mt-4">
                {selectedMeal.strInstructions
                  .split(".")
                  .filter((step) => step.trim() !== "")
                  .map((step, index) => (
                    <li
                      key={index}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white/80"
                    >
                      <span className="text-orange-400 font-semibold mr-2">
                        Step {index + 1}:
                      </span>
                      {step.trim()}.
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {selectedMeal.strYoutube && (
            <a
              href={selectedMeal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-orange-500 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Watch Video ▶
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
