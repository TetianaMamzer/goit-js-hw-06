const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsCollection = ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
ingredientsList.classList.add('main');
ingredientsList.textContent = ingredient;
return ingredientsList;

});

const ingredientGroup = document.querySelector('#ingredients');
ingredientGroup.append(...ingredientsCollection);

