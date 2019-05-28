/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import SearchBar from './SearchBar';

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

  const getProducts = products => {
    changeNotConsumedAliments(products);
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
          // eslint-disable-next-line react/prop-types
          return props.history.push('/result');
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

export default ModalComponent;
