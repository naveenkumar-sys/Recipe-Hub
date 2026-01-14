import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

//get meal by query
export const searchMeals = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search.php?s=${query}`);
    return res.data.meals || [];
  } catch (error) {
    console.log(error);
  }
};

// get meal by It Id
export const getMealById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return res.data.meals ? res.data.meals[0] : null; // [{}] returns like this so we take only {} -> object
  } catch (error) {
    console.log(error);
  }
};

//get all meals
export const getAllCategories = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/categories.php`);
    return res.data.categories || [];
  } catch (error) {
    console.log(error);
  }
};

//get meal by its category
export const getByCategories = async (category) => {
  try {
    const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return res.data.meals || [];
  } catch (error) {
    console.log(error);
  }
};
