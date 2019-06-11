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
// import ModalComponent from './components/ModalComponent';
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

const SearchBar = () => {
  const [valueSearch, handleChange] = useState('');
  return (
    <input
      type="text"
      value={valueSearch}
      onChange={e => handleChange(e.target.value)}
      placeholder="Saisissez votre aliment ?"
      className="searchBar"
    />
  );
};

const ModalComponent = ({ mealsData }: { mealsData: mealsType }) => {
  const [consummedAliments, changeConsumedAliments] = useState([]);
  const [meals, setMeals] = useState(mealsData);
  return (
    <div className="modalContent">
      <SearchBar />
      <div>
        {[
          { name: 'Riz Blanc', id: 132, quantity: 100 },
          { name: 'Riz complet', id: 341, quantity: 100 },
          { name: 'ddddlsls', id: 122, quantity: 100 },
          { name: 'lslsmdmdpdpdpd', id: 333, quantity: 100 },
          { name: 'ccccvvvbb', id: 156, quantity: 100 },
          { name: 'wwwwwcccccsq', id: 378, quantity: 100 },
          { name: 'pppppppppp', id: 199, quantity: 100 },
          { name: 'Raaaaaaaaaaaa', id: 312, quantity: 100 },
        ].map(_ => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions

          <div
            role="button"
            tabIndex={0}
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

        {consummedAliments.map(el => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <div>
            <div className="foodItemContainer">
              <div className="foodItemContent">
                <p
                  key={el.id}
                  onClick={() =>
                    changeConsumedAliments(
                      consummedAliments.filter(ll => ll.id !== el.id),
                    )
                  }
                >
                  {el.name}
                  <br />
                  {el.quantity} gr
                </p>
                <p
                  className="operations"
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
                  className="operations"
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
              <button
                type="button"
                className="addFood"
                onClick={() =>
                  setMeals({
                    ...meals,
                    breakfast: {
                      test: 'OK',
                    },
                  })
                }
              >
                Ajouter
              </button>
            </div>
            <div className="line" />
          </div>
        ))}
      </div>
    </div>
  );
};

const SummaryComponent = () => (
  <div>
    <div className="validateFood">
      <div>
        <p>Riz Blanc</p>
        <p className="weight">100gr</p>
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
              <ModalComponent mealsData={props.mealsData} />
            </div>
            <div className="summaryContainer">
              <div className="modalContent">
                <h1>{currentModalName}</h1>
                <SummaryComponent />
                <div className="buttonsContainer">
                  <button type="button" className="resetButton">
                    Vider
                  </button>
                  <button type="button">Valider</button>
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
