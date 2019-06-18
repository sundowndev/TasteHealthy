/*
 *
 * HomePage reducer
 *
 */
import { CHANGE_CALORIES } from './constants';

export const initialState = {
  calories: 0,
};

/* eslint-disable default-case, no-param-reassign */
const caloriesProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CALORIES:
      return {
        ...state,
        calories: action.calories,
      };
  }
  return state;
};

export default caloriesProviderReducer;
