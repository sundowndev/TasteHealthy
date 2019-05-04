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

export const HomePage = (props: propsType) => {
  const [meals, setMeals] = useState(props.mealsData);
  const [modalIsOpen, toggleModal] = useState(false);

  const afterOpenModal = () => {};

  const changeBreakfast = data => props.changeBreakfast(data);
  const changeLunch = data => props.changeLunch(data);
  const changeDinner = data => props.changeDinner(data);
  const changeSnack = data => props.changeSnack(data);

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
        <div>I am a modal</div>
      </Modal>
      {/**  */}

      <FormattedMessage {...messages.header} />
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
        TTTTT
      </button>
      <button type="button" onClick={() => toggleModal(true)}>
        Breakfast
      </button>
      <button type="button" onClick={() => toggleModal(true)}>
        Lunch
      </button>
      <button type="button" onClick={() => toggleModal(true)}>
        Dinner
      </button>
      <button type="button" onClick={() => toggleModal(true)}>
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
