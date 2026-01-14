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
      const data = await fetchMeals("a");
    } else {
      const data = await getByCategories(category);
      setMeals(data);
    }
    setLoading(false);
  };
  return (
    <div className="w-full overflow-x-auto  mb-10 mt-10 p-5 flex  justify-center items-center ">
      <div className="flex gap-4 min-w-max px-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-black hover:text-orange-400 hover:border-orange-400 transition whitespace-nowrap"
            onClick={() => fetchCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
