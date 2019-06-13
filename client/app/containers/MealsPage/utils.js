export const updateStore = (
  mealType: string,
  consummedAliments: any,
  meals: any,
  changeBreakfastData: any,
  changeDinnerData: any,
  changeSnackData: any,
  changeLunchData: any,
) => {
  switch (mealType) {
    case 'breakfast':
      changeBreakfastData({
        ...meals,
        [mealType]: {
          consummedAliments,
        },
      });
      break;
    case 'dinner':
      changeDinnerData({
        ...meals,
        [mealType]: {
          consummedAliments,
        },
      });
      break;
    case 'snack':
      changeSnackData({
        ...meals,
        [mealType]: {
          consummedAliments,
        },
      });
      break;
    case 'lunch':
      changeLunchData({
        ...meals,
        [mealType]: {
          consummedAliments,
        },
      });
      break;
    default:
    // console.error('The meal type does not match anything ! ');
  }
};
