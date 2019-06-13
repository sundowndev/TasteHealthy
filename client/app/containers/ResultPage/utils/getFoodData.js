import { mean } from 'ramda';

export const getMealsOrigin = mealsElements => {
  const resultArray = mealsElements.map(el => el.countries);
  const flattenArray = resultArray.flat();

  const counts = {};

  for (let i = 0; i < flattenArray.length; i += 1) {
    const num = flattenArray[i] === undefined ? 'Inconnu' : flattenArray[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
};

export const getMealsPackaging = mealsElements => {
  const resultArray = mealsElements.map(el => el.packaging);
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
    calories += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(calories * 0.23900573614 * 100) / 100;
};

export const getProteins = mealsElements => {
  let proteines = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.proteins_100g;
    proteines += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(proteines);
};

export const getFat = mealsElements => {
  let fat = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.fat_100g;
    fat += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(fat);
};

export const getSodium = mealsElements => {
  let sodium = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.carbohydrates_100g;
    sodium += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(sodium);
};

export const getSugar = mealsElements => {
  let sugar = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.sugars_100g;
    sugar += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(sugar);
};

export const getAdditives = mealsElements => {
  let additives = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].misc_data.additives_n;
    additives += nutrition;
  }
  return Math.round(additives);
};

export const getSalt = mealsElements => {
  let salt = 0;
  for (let i = 0; i < mealsElements.length; i += 1) {
    const nutrition = mealsElements[i].nutrition_facts.salt_100g;
    salt += (mealsElements[i].quantity * nutrition) / 100;
  }
  return Math.round(salt);
};
