/*
 *
 * MealsPage reducer
 *
 */
// import produce from 'immer';
import {
  CHANGE_BREAKFAST,
  CHANGE_LUNCH,
  CHANGE_DINNER,
  CHANGE_SNACK,
  CHANGE_SUBSTITUTE,
} from './constants';

export const initialState = {
  breakfast: { consummedAliments: [] },
  dinner: { consummedAliments: [] },
  snack: { consummedAliments: [] },
  lunch: { consummedAliments: [] },
  substitute: { breakfast: [], dinner: [], snack: [], lunch: [], total: [] },
};

/* eslint-disable default-case, no-param-reassign */
const mealsProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BREAKFAST:
      return {
        ...state,
        breakfast: action.breakfast,
      };
    case CHANGE_SUBSTITUTE:
      return {
        ...state,
        substitute: action.substitute,
      };
    case CHANGE_LUNCH:
      return {
        ...state,
        lunch: action.lunch,
      };
    case CHANGE_DINNER:
      return {
        ...state,
        dinner: action.dinner,
      };
    case CHANGE_SNACK:
      return {
        ...state,
        snack: action.snack,
      };
  }
  return state;
};

export default mealsProviderReducer;
