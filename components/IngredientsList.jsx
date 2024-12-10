import React, { useState } from "react";

export default function IngredientsList(props) {
  const [loading, setLoading] = useState(false); 

  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleGetRecipe = async () => {
    setLoading(true); 
    await props.getRecipe(); 
    setLoading(false); 
  };

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={handleGetRecipe} disabled={loading}>
            {loading ? "Loading..." : "Get a recipe"} 
          </button>
        </div>
      )}
    </section>
  );
}
