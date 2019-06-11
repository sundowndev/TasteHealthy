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
import '../../styles/mealsPage.css';
import close from '../../images/close.png';

import {
  changeLunch,
  changeBreakfast,
  changeSnack,
  changeDinner,
} from './actions';

Modal.setAppElement('#app');

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
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

const SummaryComponent = ({
  name,
  quantity,
}: {
  name: string,
  quantity: number,
}) => (
  <div>
    <div className="validateFood">
      <div>
        <p>{name}</p>
        <p className="weight">{quantity}gr</p>
      </div>
      <img src={close} alt="close" />
    </div>
  </div>
);

export const HomePage = (props: propsType) => {
  const [modalIsOpen, toggleModal] = useState(false);
  const [currentModalName, changeModalName] = useState(null);

  const openModal = (name: string) => {
    toggleModal(true);
    changeModalName(name);
  };

  const afterOpenModal = () => {};

  const getMeal = () => {
    switch (currentModalName) {
      case 'breakfast':
        return 'Petit Déjeuner';
      case 'lunch':
        return 'Déjeuner';
      case 'snack':
        return 'Goûter';
      case 'dinner':
        return 'Dîner';
      default:
        return null;
    }
  };

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
        <div className="mealsPage">
          <div className="modalContainer">
            <img
              className="closeModal"
              onClick={() => toggleModal(false)}
              src={close}
              alt="close"
            />
            <div className="searchContainer">
              <ModalComponent
                props={props}
                currentModalName={currentModalName}
              />
            </div>
            <div className="summaryContainer">
              <div className="modalContent">
                <h1>{getMeal()}</h1>
                {currentModalName &&
                  props.mealsData[currentModalName].consummedAliments.map(
                    el => (
                      <SummaryComponent
                        name={el.product_name}
                        quantity={el.quantity}
                      />
                    ),
                  )}
                <div className="buttonsContainer">
                  <button type="button" className="resetButton">
                    Vider
                  </button>
                  <button
                    onClick={() =>
                      currentModalName &&
                      props.history.push(`/result/${currentModalName}`)
                    }
                    type="button"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
