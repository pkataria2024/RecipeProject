import React from "react";

const Recipe = ({ recipe, onDeleteRecipe }) => {
  const {name, cuisine, photo, ingredients, preparation } = recipe;
  
  const handleDelete = () => {
    onDeleteRecipe(name);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <img src={photo} alt="Recipe" style={{ width: '100px', height: 'auto' }} /> 
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
        <button name="delete" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Recipe;
