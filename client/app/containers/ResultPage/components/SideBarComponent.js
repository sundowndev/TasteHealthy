import React from 'react';
import '../../../styles/ResultPage.css';

const rightComponent = () => (
  <div>
    <img
      style={{ marginLeft: '5px', marginRight: '5px' }}
      alt="checked"
      src={require('../../../images/checked.svg')}
    />
    <img alt="checked" src={require('../../../images/checked2.svg')} />
  </div>
);

const SidebarComponent = ({ props }: { props: any }) => (
  <div className="app__sidebar">
    <p className="app__sidebar__title">Ma consommation</p>
    <div className="app__sidebar__content">
      <div
        onClick={() =>
          props.mealsData.breakfast.consummedAliments
            ? props.history.push('/result/breakfast')
            : props.history.push('/meals')
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Petit Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right">
          {props.mealsData.breakfast.consummedAliments ? (
            rightComponent()
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        onClick={() =>
          props.mealsData.lunch.consummedAliments
            ? props.history.push('/result/lunch')
            : props.history.push('/meals')
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right">
          {props.mealsData.lunch.consummedAliments ? (
            rightComponent()
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        onClick={() =>
          props.mealsData.snack.consummedAliments
            ? props.history.push('/result/snack')
            : props.history.push('/meals')
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Goûter</p>
        </div>
        <div className="app__sidebar__content__block__right">
          {props.mealsData.snack.consummedAliments ? (
            rightComponent()
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        onClick={() =>
          props.mealsData.dinner.consummedAliments
            ? props.history.push('/result/dinner')
            : props.history.push('/meals')
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Dinner</p>
        </div>
        <div className="app__sidebar__content__block__right">
          {props.mealsData.dinner.consummedAliments ? (
            rightComponent()
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default SidebarComponent;
