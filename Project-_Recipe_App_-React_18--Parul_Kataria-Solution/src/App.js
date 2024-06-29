import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipeByName = (name) => {
    const updatedRecipes = recipes.filter(recipe => recipe.name !== name);
    setRecipes(updatedRecipes);
  };

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipeByName} />
      <RecipeCreate onCreateRecipe={addRecipe} />
    </div>
  );
}

export default App;
