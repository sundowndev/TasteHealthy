import { mean } from 'ramda';
import mode from './mode';

export const getMealsOrigin = mealsElements => {
  const result = 'Inconnu';
  const arrayResult = mealsElements.map(el =>
    el.countries.match(/\S+(?=,)/) ? el.countries.match(/\S+(?=,)/)[0] : null,
  );
  const filtered = arrayResult.filter(el => el != null);
  return mode(filtered) || result;
};

export const getMealsPackaging = mealsElements => {
  const resultArray = mealsElements.map(el => el.packaging.split(','));
  const flattenArray = resultArray.flat();

  const counts = {};

  for (let i = 0; i < flattenArray.length; i += 1) {
    const num = flattenArray[i] === undefined ? 'Inconnu' : flattenArray[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
};

export const getMealsNutriScore = mealsElements => {
  const scores = ['a', 'b', 'c', 'd', 'e'];
  const counts = [];

  for (let i = 0; i < mealsElements.length; i += 1) {
    const num = scores.indexOf(mealsElements[i].misc_data.nutrition_grade_fr);
    counts.push(num);
  }

  return scores[Math.round(mean(counts))];
};

export const getCalories = mealsElements => {
  let calories = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.energy_100g;
    calories += (mealsElements[i].quantity * 100) / nutrition;
  }
  return Math.floor(calories) * 10;
};

export const getSodium = mealsElements => {
  let sodium = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.sodium_100g;
    sodium += (mealsElements[i].quantity * 100) / nutrition;
  }
  return Math.floor(sodium);
};

export const getSalt = mealsElements => {
  let salt = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.salt_100g;
    salt += (mealsElements[i].quantity * 100) / nutrition;
  }
  return Math.floor(salt);
};
