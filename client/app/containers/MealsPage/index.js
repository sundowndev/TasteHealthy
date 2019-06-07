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
import messages from './messages';
import '../../styles/mealsPage.css';
import close from '../../images/close.png';

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
      placeholder="Search..."
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
            <div className="searchContainer">
              <ModalComponent mealsData={props.mealsData}/>
            </div>
            <div className="summaryContainer">
              <img
                className="closeModal"
                onClick={() => toggleModal(false)}
                src={close}
                alt="close"
              />
              <h1>{currentModalName}</h1>
            </div>
          </div>
        </div>
      </Modal>
      {/**  */}

      <FormattedMessage {...messages.header} />
      <button
        type="button"
        onClick={() => {
          toggleModal(true);
          changeModalName('Breakfast');
        }}
      >
        Breakfast
      </button>
      <button
        type="button"
        onClick={() => {
          toggleModal(true);
          changeModalName('Lunch');
        }}
      >
        Lunch
      </button>
      <button
        type="button"
        onClick={() => {
          toggleModal(true);
          changeModalName('Dinner');
        }}
      >
        Dinner
      </button>
      <button
        type="button"
        onClick={() => {
          toggleModal(true);
          changeModalName('Snack');
        }}
      >
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
