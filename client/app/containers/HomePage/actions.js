/*
 *
 * MealsPage actions
 *
 */

import { CHANGE_CALORIES } from './constants';

type caloriesType = {
  calories: string,
};

export const changeCalories = (data: caloriesType) => ({
  type: CHANGE_CALORIES,
  calories: data.calories,
});
