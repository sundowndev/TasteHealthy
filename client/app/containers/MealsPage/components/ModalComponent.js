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

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { map, prop } from 'ramda';
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

  const idConsummedElements = map(prop('id'), consummedAliments);

  useEffect(() => {
    changeConsumedAliments(mealsData[currentModalName].consummedAliments);
  }, [mealsData]);

  return (
    <div className="modalContent">
      <SearchBar sendProducts={getProducts} />
      {notConsummedAliments !== [] &&
        notConsummedAliments.map(el => {
          if (!idConsummedElements.includes(el.id)) {
            return (
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
                              if (el.quantity > 50) {
                                aliment.quantity -= 50;
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
                              aliment.quantity += 50;
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
                      }}
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="line" />
                </div>
              </div>
            );
          }
        })}
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
