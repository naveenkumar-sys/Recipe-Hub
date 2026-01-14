import React from "react";
import { useRecipes } from "../context/RecipeContext";
import FavoriteCard from "../components/FavoriteCard";

const Favorite = () => {
  const { favorites, loading } = useRecipes();
  return (
    <div className="pt-24 px-6">
      {loading && <p className="text-center text-white mt-10">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites && favorites.length > 0 ? (
          favorites.map((meal) => (
            <FavoriteCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <div className="col-span-full flex justify-center mt-24">
            <div
              className="px-10 py-8 rounded-3xl 
                  bg-white/70 backdrop-blur-xl
                  border border-white/30
                  shadow-2xl text-center"
            >
              <div className="text-gray-800 flex flex-col  items-center justify-center gap-4">
                <img
                  src="https://bellchocolate.com/wp-content/themes/shopwell/assets/images/shopwell-wishlist-empty.svg"
                  alt="No item in you wishlist"
                  className="h-50 w-50"
                />
                <p className="text-lg font-bold">Wishlist Empty</p>
                <p>Save your favorites products in one place♥️</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
