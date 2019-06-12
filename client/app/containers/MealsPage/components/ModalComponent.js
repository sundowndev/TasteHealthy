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
import { updateStore } from '../utils.js';

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
  const [consummedAliments, changeConsumedAliments] = useState(
    mealsData[currentModalName].consummedAliments,
  );
  const [notConsummedAliments, changeNotConsumedAliments] = useState([]);
  const [meals, setMeals] = useState(mealsData);
  const { changeBreakfast, changeLunch, changeDinner, changeSnack } = props;

  const getProducts = products => {
    changeNotConsumedAliments(products.data.items);
  };

  const changeBreakfastData = data => changeBreakfast(data);
  const changeLunchData = data => changeLunch(data);
  const changeDinnerData = data => changeDinner(data);
  const changeSnackData = data => changeSnack(data);

  return (
    <div className="modalContent">
      <SearchBar sendProducts={getProducts} />
      {notConsummedAliments !== [] &&
        notConsummedAliments.map(el => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div role="button" tabIndex={0} key={el.id}>
            <div>
              <div className="foodItemContainer">
                <div className="foodItemContent">
                  <p key={el.id}>
                    {el.product_name}
                    <br />
                    {el.quantity} gr
                  </p>
                  <p
                    className="operations"
                    onClick={() => {
                      const tt = notConsummedAliments.map(aliment => {
                        if (aliment.id === el.id) {
                          if (el.quantity > 100) {
                            aliment.quantity -= 100;
                          }
                        }
                        return aliment;
                      });
                      changeNotConsumedAliments(tt);
                    }}
                  >
                    -
                  </p>
                  <p
                    className="operations"
                    onClick={() => {
                      const tt = notConsummedAliments.map(aliment => {
                        if (aliment.id === el.id) {
                          aliment.quantity += 100;
                        }
                        return aliment;
                      });
                      changeNotConsumedAliments(tt);
                    }}
                  >
                    +
                  </p>
                </div>
                <button
                  type="button"
                  className="addFood"
                  onClick={async () => {
                    if (!consummedAliments.some(e => e.id === el.id)) {
                      const test = consummedAliments.concat(el);
                      changeConsumedAliments(test);
                      await setMeals({
                        ...meals,
                        [currentModalName]: {
                          consummedAliments: test,
                        },
                      });
                      updateStore(
                        currentModalName,
                        test,
                        meals,
                        changeBreakfastData,
                        changeDinnerData,
                        changeSnackData,
                        changeLunchData,
                      );
                    }
                  }}
                >
                  Ajouter
                </button>
              </div>
              <div className="line" />
            </div>
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
