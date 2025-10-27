/* global $ */
(async function () {
  'use strict';
  const DropDown = $('#recipe-dropdown');
  const recipeImage = $('#recipe-image');
  const recipeIngredients = $('#ingredients-list');
  const recipeName = $('#recipe-name');
  const recipeDirections = $('#directions-list');

  try {
    const recipes = await fetch('foods.json');
    if (!recipes.ok) {
      throw new Error(
        `HTTP error! status: ${recipes.status} - ${recipes.statusText}`
      );
    }
    const recipesData = await recipes.json();

    recipesData.forEach((recipe) => {
      DropDown.append(`<option value=${recipe.id}>${recipe.name}</option>`);
    });

    DropDown.change(async (e) => {
      try {
        const name = `recipe_${DropDown.val()}.json`;
        const recipe = await fetch(name);
        if (!recipe.ok) {
          throw new Error(
            `HTTP error! status: ${recipes.status} - ${recipes.statusText}`
          );
        }
        recipeIngredients.empty();
        recipeDirections.empty();
        const recipeData = await recipe.json();
        recipeName.text(recipeData.name);
        recipeImage.attr('src', recipeData.image);
        recipeData.ingredients.forEach((ingredient) => {
          recipeIngredients.append(`<li>${ingredient}</li>`);
        });
        recipeData.instructions.forEach((ingredient) => {
          recipeDirections.append(`<li>${ingredient}</li>`);
        });
      } catch (e) {
        console.error(e);
      }
    });
  } catch (e) {
    console.error(e);
  }
}());
