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
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ModalComponent from './components/ModalComponent';
// import { withRouter } from 'react-router';
import messages from './messages';
import '../../styles/mealsPage.css';
import close from '../../images/close.png';

import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';
import choice from '../../images/choice.jpg';
import panier from '../../images/panier.jpg';
import more from '../../images/more.png';
import breakfast from '../../images/breakfast.png';
import lunch from '../../images/lunch.png';
import snack from '../../images/snack.png';
import dinner from '../../images/dinner.png';

// import check from '../../images/check.png';
// import pen from '../../images/pen.png';

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
  // changeBreakfast: mealsType => any,
  // changeLunch: mealsType => any,
  // changeSnack: mealsType => any,
  // changeDinner: mealsType => any,
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
    <div
      className="choiceContainer"
      style={{
        backgroundImage: `url(${choice})`,
        backgroundSize: '100% 100%',
      }}
    >
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
            <div
              className="searchContainer"
              style={{
                backgroundImage: `url(${panier})`,
                backgroundSize: '100% 100%',
              }}
            >
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

      <div className="choicePageContainer">
        <a className="backLink" href="/">
          <img alt="backArrow" className="backArrow" src={leftArrow} />
          <p className="backText">Retour</p>
        </a>

        <h1 className="choiceText">
          {/* <FormattedMessage {...messages.header} /> */}
          Remplissez le(s) repas <br /> de votre choix.
        </h1>

        <div className="mealsButtonsContainer">
          <div className="articlesContainer">
            <img
              alt="mealsPictures"
              className="mealsPictures"
              src={breakfast}
            />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                openModal('breakfast');
              }}
            >
              Petit Déjeuner
              <img alt="more" className="more" src={more} />
            </button>
          </div>

          <div className="articlesContainer">
            <img alt="mealsPictures" className="mealsPictures" src={lunch} />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                openModal('lunch');
              }}
            >
              Déjeuner
              <img alt="more" className="more" src={more} />
            </button>
          </div>

          <div className="articlesContainer">
            <img alt="mealsPictures" className="mealsPictures" src={snack} />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                openModal('snack');
              }}
            >
              Goûter
              <img alt="more" className="more" src={more} />
            </button>
          </div>

          <div className="articlesContainer">
            <img alt="mealsPictures" className="mealsPictures" src={dinner} />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                openModal('dinner');
              }}
            >
              Dinner
              <img alt="more" className="more" src={more} />
            </button>
          </div>
        </div>

        <a href="/">
          <div className="datavizLink">
            <p className="linkText">Visualiser</p>
            <img alt="rightArrow" className="rightArrow" src={rightArrow} />
          </div>
        </a>
      </div>
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
)(HomePage);
