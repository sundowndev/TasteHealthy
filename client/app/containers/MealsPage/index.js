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

import check from '../../images/check.png';
import pen from '../../images/pen.png';


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
  return (
    <input
      type="text"
      value={valueSearch}
      onChange={e => handleChange(e.target.value)}
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

  const afterOpenModal = () => {};

  // const changeBreakfast = data => props.changeBreakfast(data);
  // const changeLunch = data => props.changeLunch(data);
  // const changeDinner = data => props.changeDinner(data);
  // const changeSnack = data => props.changeSnack(data);

  return (
    <div
      className="choiceContainer"
      style={{
        backgroundImage: "url("+choice+")",
        backgroundSize: "100% 100%",
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
                backgroundImage: "url("+panier+")",
                backgroundSize: "100% 100%",
              }}
            >
              <ModalComponent mealsData={props.mealsData}/>
            </div>
            <div className="summaryContainer">
              <div className="modalContent">
                <h1>{currentModalName}</h1>
                {/* <SummaryComponent/> */}
                <div className="buttonsContainer">
                  <button
                  type="button"
                  className="resetButton"
                  >
                    Vider
                  </button>
                  <button
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
        <a
        className="backLink"
        href="/"
        >
          <img
            className="backArrow"
            src={leftArrow}
          />
          <p className="backText">Retour</p>
        </a>

        <h1 className="choiceText">
          {/* <FormattedMessage {...messages.header} /> */}
          Remplissez le(s) repas <br/> de votre choix.
        </h1>

        <div className="mealsButtonsContainer">
          <div className="articlesContainer">
            <img
              className="mealsPictures"
              src={breakfast}
            />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                toggleModal(true);
                changeModalName('Breakfast');
              }}
            >
              Petit Déjeuner

              <img
                className="more"
                src={more}
              />
            </button>
          </div>

          <div className="articlesContainer">
            <img
              className="mealsPictures"
              src={lunch}
            />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                toggleModal(true);
                changeModalName('Lunch');
              }}
            >
              Déjeuner

              <img
                className="more"
                src={more}
              />
            </button>
          </div>

          <div className="articlesContainer">
            <img
              className="mealsPictures"
              src={snack}
            />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                toggleModal(true);
                changeModalName('Snack');
              }}
            >
              Goûter

              <img
                className="more"
                src={more}
              />
            </button>
          </div>

          <div className="articlesContainer">
            <img
              className="mealsPictures"
              src={dinner}
            />
            <button
              className="mealButtons"
              type="button"
              onClick={() => {
                toggleModal(true);
                changeModalName('Dinner');
              }}
            >
              Dinner
              <img
                className="more"
                src={more}
              />
            </button>
          </div>
        </div>

        <a href="/">
          <div className="datavizLink">
            <p className="linkText">
              Visualiser
            </p>
            <img
            className="rightArrow"
            src={rightArrow}
            />
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
