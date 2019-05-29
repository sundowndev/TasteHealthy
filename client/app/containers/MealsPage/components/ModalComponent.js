/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow

/*
 * ModalComponent
 *
 * This is the modal which shows the available products
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

import {
  changeLunch,
  changeBreakfast,
  changeSnack,
  changeDinner,
} from '../actions';

type mealsType = {
  breakfast: any,
  dinner: any,
  snack: any,
  lunch: any,
};

type Props = {
  history: {
    push: string => void,
  },
  mealsData: mealsType,
  changeBreakfast: mealsType => any,
  changeLunch: mealsType => any,
  changeSnack: mealsType => any,
  changeDinner: mealsType => any,
};

const ModalComponent = ({
  props,
  currentModalName,
}: {
  props: Props,
  currentModalName: string,
}) => {
  // eslint-disable-next-line react/prop-types
  const { mealsData }: { mealsData: mealsType } = props;
  const [consummedAliments, changeConsumedAliments] = useState([]);
  const [notConsummedAliments, changeNotConsumedAliments] = useState([
    { product_name: '', id: 132, quantity: 100 },
  ]);
  const [meals, setMeals] = useState(mealsData);
  const { changeBreakfast, changeLunch, changeDinner, changeSnack } = props;

  const getProducts = products => {
    changeNotConsumedAliments(products.data.items);
  };

  const changeBreakfastData = data => changeBreakfast(data);
  const changeLunchData = data => changeLunch(data);
  const changeDinnerData = data => changeDinner(data);
  const changeSnackData = data => changeSnack(data);

  const updateStore = (mealType: string) => {
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
        changeDinnerData(consummedAliments);
        changeDinnerData({
          ...meals,
          [mealType]: {
            consummedAliments,
          },
        });
        break;
      case 'snack':
        changeSnackData(consummedAliments);
        changeSnackData({
          ...meals,
          [mealType]: {
            consummedAliments,
          },
        });
        break;
      case 'lunch':
        changeLunchData(consummedAliments);
        changeLunchData({
          ...meals,
          [mealType]: {
            consummedAliments,
          },
        });
        break;
      default:
        console.error('The meal type does not match anything ! ');
    }
  };

  return (
    <div>
      <SearchBar sendProducts={getProducts} />
      {notConsummedAliments.map(_ => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onClick={() => {
            if (!consummedAliments.some(e => e.id === _.id)) {
              changeConsumedAliments(consummedAliments.concat([_]));
            }
          }}
          key={_.id}
        >
          {_.product_name}
        </div>
      ))}
      <button
        type="button"
        onClick={async () => {
          await setMeals({
            ...meals,
            [currentModalName]: {
              consummedAliments,
            },
          });
          updateStore(currentModalName);
          // eslint-disable-next-line react/prop-types
          // return props.history.push('/result');
        }}
      >
        Valider
      </button>
      <h1>Aliments consommés</h1>
      {consummedAliments.map(el => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <div>
          <h1
            key={el.id}
            onClick={() =>
              changeConsumedAliments(
                consummedAliments.filter(ll => ll.id !== el.id),
              )
            }
          >
            {el.product_name}
            {el.quantity} gr
          </h1>
          <p
            onClick={() => {
              const tt = consummedAliments.map(aliment => {
                if (aliment.id === el.id) {
                  if (el.quantity > 100) {
                    aliment.quantity -= 100;
                  }
                }
                return aliment;
              });
              changeConsumedAliments(tt);
            }}
          >
            -
          </p>
          <p
            onClick={() => {
              const tt = consummedAliments.map(aliment => {
                if (aliment.id === el.id) {
                  aliment.quantity += 100;
                }
                return aliment;
              });
              changeConsumedAliments(tt);
            }}
          >
            +
          </p>
        </div>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  const { meals } = state;
  return { mealsData: meals };
}

export default connect(
  mapStateToProps,
  { changeBreakfast, changeLunch, changeDinner, changeSnack },
)(ModalComponent);
