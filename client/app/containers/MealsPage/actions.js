/*
 *
 * MealsPage actions
 *
 */

import {
  CHANGE_LUNCH,
  CHANGE_BREAKFAST,
  CHANGE_SNACK,
  CHANGE_DINNER,
  CHANGE_SUBSTITUTE,
} from './constants';

type mealsType = {
  breakfast: any,
  dinner: any,
  snack: any,
  lunch: any,
  substitute: any,
};

export const changeBreakfast = (data: mealsType) => ({
  type: CHANGE_BREAKFAST,
  breakfast: data.breakfast,
});
export const changeSubstitue = (data: mealsType) => ({
  type: CHANGE_SUBSTITUTE,
  breakfast: data.substitute,
});
export const changeLunch = (data: mealsType) => ({
  type: CHANGE_LUNCH,
  lunch: data.lunch,
});
export const changeDinner = (data: mealsType) => ({
  type: CHANGE_DINNER,
  dinner: data.dinner,
});
export const changeSnack = (data: mealsType) => ({
  type: CHANGE_SNACK,
  snack: data.snack,
});
