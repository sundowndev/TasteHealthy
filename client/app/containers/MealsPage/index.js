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
import ModalComponent from './components/ModalComponent';
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
  history: {
    push: string => void,
  },
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
  const [modalIsOpen, toggleModal] = useState(false);
  const [currentModalName, changeModalName] = useState(null);

  const openModal = (name: string) => {
    toggleModal(true);
    changeModalName(name);
  };

  const afterOpenModal = () => {};

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
        <ModalComponent props={props} currentModalName={currentModalName} />
      </Modal>
      {/**  */}

      <FormattedMessage {...messages.header} />
      <button type="button" onClick={() => openModal('breakfast')}>
        Breakfast
      </button>
      <button type="button" onClick={() => openModal('lunch')}>
        Lunch
      </button>
      <button type="button" onClick={() => openModal('dinner')}>
        Dinner
      </button>
      <button type="button" onClick={() => openModal('snack')}>
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
