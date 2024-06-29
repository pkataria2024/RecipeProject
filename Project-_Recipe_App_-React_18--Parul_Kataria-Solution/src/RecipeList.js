import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes, onDeleteRecipe }) => {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <Recipe key={recipe.name}  recipe={recipe} onDeleteRecipe={onDeleteRecipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
