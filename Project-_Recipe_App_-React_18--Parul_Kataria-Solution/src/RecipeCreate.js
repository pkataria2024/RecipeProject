import React, { useState } from "react";

function RecipeCreate({onCreateRecipe}) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [fields, setFields] = useState({ ...initialState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateRecipe(fields);
    setFields({ ...initialState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={fields.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={fields.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <input
                id="photo"
                name="photo"
                type="url"
                value={fields.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={fields.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <textarea
                id="preparation"
                name="preparation"
                value={fields.preparation}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
