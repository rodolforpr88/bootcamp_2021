let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp'
]

console.log(ingredients.includes('water'));
console.log(ingredients.includes('fire'));

console.log(ingredients.includes('water', 3));
console.log(ingredients.includes('water', 0));

if (ingredients.includes('flour')) {
  console.log('TRUE');
}

console.log(ingredients.indexOf('flour'));
console.log(ingredients.indexOf('other'));