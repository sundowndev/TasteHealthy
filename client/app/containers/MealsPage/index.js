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
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import axios from 'axios';
// import { withRouter } from 'react-router';
import messages from './messages';

import {
  changeLunch,
  changeBreakfast,
  changeSnack,
  changeDinner,
} from './actions';

type mealsType = {
  breakfast: any,
  dinner: any,
  snack: any,
  lunch: any,
};

type propsType = {
  changeBreakfast: mealsType => any,
  changeLunch: mealsType => any,
  changeSnack: mealsType => any,
  changeDinner: mealsType => any,
  mealsData: mealsType,
};

const customStyles = {
  content: {
    top: '5%',
    left: '5%',
    right: '5%',
    bottom: '5%',
  },
};

const SearchBar = () => {
  const [valueSearch, handleChange] = useState('');

  const handleValueChange = (name: string) => {
    handleChange(name);

    if (name.length >= 3) {
      axios
        .post(`localhost:3000/products?query=${name}`)
        .then(data => console.log(data));
    }
  };

  return (
    <input
      type="text"
      value={valueSearch}
      onChange={e => handleValueChange(e.target.value)}
      placeholder="Search..."
    />
  );
};

const ModalComponent = ({ mealsData }: { mealsData: mealsType }) => {
  const [consummedAliments, changeConsumedAliments] = useState([]);
  const [meals, setMeals] = useState(mealsData);
  return (
    <div>
      <SearchBar />
      {[
        { name: 'ZAEAZZE', id: 132, quantity: 100 },
        { name: 'fsddsfsd', id: 341, quantity: 100 },
      ].map(_ => (
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
          {_.name}
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setMeals({
            ...meals,
            breakfast: {
              test: 'OK',
            },
          })
        }
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
            {el.name}
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

export const HomePage = (props: propsType) => {
  const [modalIsOpen, toggleModal] = useState(false);
  const [currentModalName, changeModalName] = useState(null);

  const openModal = (name: string) => {
    toggleModal(true);
    changeModalName(name);
  };

  const afterOpenModal = () => {};

  // const changeBreakfast = data => props.changeBreakfast(data);
  // const changeLunch = data => props.changeLunch(data);
  // const changeDinner = data => props.changeDinner(data);
  // const changeSnack = data => props.changeSnack(data);

  return (
    <h1>
      {/**
       * Modal component
       */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => toggleModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={() => toggleModal(false)}>
          close
        </button>
        <div>{currentModalName}</div>
        <ModalComponent mealsData={props.mealsData} />
      </Modal>
      {/**  */}

      <FormattedMessage {...messages.header} />
      <button type="button" onClick={() => openModal('Breakfast')}>
        Breakfast
      </button>
      <button type="button" onClick={() => openModal('Lunch')}>
        Lunch
      </button>
      <button type="button" onClick={() => openModal('Dinner')}>
        Dinner
      </button>
      <button type="button" onClick={() => openModal('Snack')}>
        Snack
      </button>
    </h1>
  );
};

function mapStateToProps(state) {
  const { meals } = state;
  return { mealsData: meals };
}

export default connect(
  mapStateToProps,
  { changeBreakfast, changeLunch, changeDinner, changeSnack },
)(HomePage);
