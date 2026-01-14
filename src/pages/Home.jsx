import {useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { useRecipes } from "../context/RecipeContext";

const Home = () => {
  const { meals, fetchMeals, loading } = useRecipes();

  useEffect(() => {
    fetchMeals("a"); // load default meals
  }, []);

  return (
    <div className="pt-24 px-6">
      <div>
        <SearchBar />
        <FilterBar/>
      </div>
      {loading && <p className="text-center text-white mt-10">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals && meals.length > 0 ? (
          meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : (
          <div className="col-span-full flex justify-center mt-24">
            <div
              className="px-10 py-8 rounded-3xl 
                  bg-white/70 backdrop-blur-xl
                  border border-white/30
                  shadow-2xl text-center"
            >
              <p className="text-2xl font-semibold text-gray-800">
                No results found
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
