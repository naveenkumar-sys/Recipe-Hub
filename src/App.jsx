import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
