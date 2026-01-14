import { motion } from "framer-motion";
import { getByCategories } from "../api/mealsApi";
import { useRecipes } from "../context/RecipeContext";

const categories = [
  "All",
  "Chicken",
  "Beef",
  "Dessert",
  "Seafood",
  "Vegetarian",
  "Pasta",
  "Breakfast",
];

const FilterBar = () => {
  const { fetchMeals, setLoading, setMeals } = useRecipes();

  const fetchCategory = async (category) => {
    setLoading(true);

    if (category === "All") {
      await fetchMeals("a");
    } else {
      const data = await getByCategories(category);
      setMeals(data);
    }

    setLoading(false);
  };

  return (
    <section className="w-full mt-16 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide py-4">
          <div
            className="flex gap-4 sm:gap-5 
                       min-w-max 
                       justify-start sm:justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full 
                           bg-white/10 backdrop-blur-lg 
                           border border-white/20 
                           text-black font-medium
                           hover:text-orange-400 hover:border-orange-400 
                           transition whitespace-nowrap"
                onClick={() => fetchCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
