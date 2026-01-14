import { createContext, useContext, useState } from "react";
import { getMealById, searchMeals, getByCategories } from "../api/mealsApi";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const fetchMeals = async (query) => {
    setLoading(true);
    const data = await searchMeals(query);
    setMeals(data || []);
    setLoading(false);
  };

  const fetchMealById = async (id) => {
    setLoading(true);
    const data = await getMealById(id);
    setSelectedMeal(data);
    setLoading(false);
  };

  const fetchByCategory = async (category) => {
    setLoading(true);
    const data =
      category === "All"
        ? await searchMeals("a")
        : await getByCategories(category);

    setMeals(data || []);
    setLoading(false);
  };

  console.log(favorites);
  

  return (
    <RecipeContext.Provider
      value={{
        meals,
        selectedMeal,
        loading,
        favorites,
        setFavorites,
        fetchMeals,
        fetchMealById,
        fetchByCategory,
        setLoading,
        setMeals,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
