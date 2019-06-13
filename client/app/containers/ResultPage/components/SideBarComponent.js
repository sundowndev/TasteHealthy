import React from 'react';
import '../../../styles/ResultPage.css';

const rightComponent = props => (
  <div>
    <img
      style={{ marginLeft: '5px', marginRight: '5px', zIndex: 999 }}
      alt="checked"
      // onClick={() => props.history.push('/meals')}
      src={require('../../../images/checked.svg')}
    />
    <img alt="checked" src={require('../../../images/checked2.svg')} />
  </div>
);

const SidebarComponent = ({
  props,
  mealType,
}: {
  props: any,
  mealType: any,
}) => (
  <div className="app__sidebar">
    <img alt="avatar" src={require('../../../images/avatar.svg')} />
    <p className="app__sidebar__title">Ma consommation</p>
    <div className="app__sidebar__content">
      <div
        style={mealType === 'breakfast' ? {} : { opacity: 0.5 }}
        className="app__sidebar__content__block"
      >
        <div
          className="app__sidebar__content__block__left"
          onClick={() =>
            props.mealsData.breakfast.consummedAliments.length > 0
              ? props.history.push('/result/breakfast')
              : props.history.push('/meals')
          }
        >
          <p>Petit Déjeuner</p>
        </div>
        <div
          className="app__sidebar__content__block__right"
          onClick={() =>
            props.mealsData.breakfast.consummedAliments.length > 0
              ? props.history.push('/meals')
              : null
          }
        >
          {props.mealsData.breakfast.consummedAliments.length > 0 ? (
            rightComponent(props)
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        style={mealType === 'lunch' ? {} : { opacity: 0.5 }}
        className="app__sidebar__content__block"
      >
        <div
          className="app__sidebar__content__block__left"
          onClick={() =>
            props.mealsData.lunch.consummedAliments.length > 0
              ? props.history.push('/result/lunch')
              : props.history.push('/meals')
          }
        >
          <p>Déjeuner</p>
        </div>
        <div
          className="app__sidebar__content__block__right"
          onClick={() =>
            props.mealsData.lunch.consummedAliments.length > 0
              ? props.history.push('/meals')
              : null
          }
        >
          {props.mealsData.lunch.consummedAliments.length > 0 ? (
            rightComponent(props)
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        style={mealType === 'snack' ? {} : { opacity: 0.5 }}
        className="app__sidebar__content__block"
      >
        <div
          className="app__sidebar__content__block__left"
          onClick={() =>
            props.mealsData.snack.consummedAliments.length > 0
              ? props.history.push('/result/snack')
              : props.history.push('/meals')
          }
        >
          <p>Goûter</p>
        </div>
        <div
          className="app__sidebar__content__block__right"
          onClick={() =>
            props.mealsData.snack.consummedAliments.length > 0
              ? props.history.push('/meals')
              : null
          }
        >
          {props.mealsData.snack.consummedAliments.length > 0 ? (
            rightComponent(props)
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        style={mealType === 'dinner' ? {} : { opacity: 0.5 }}
        className="app__sidebar__content__block"
      >
        <div
          className="app__sidebar__content__block__left"
          onClick={() =>
            props.mealsData.dinner.consummedAliments.length > 0
              ? props.history.push('/result/dinner')
              : props.history.push('/meals')
          }
        >
          <p>Dîner</p>
        </div>
        <div
          className="app__sidebar__content__block__right"
          onClick={() =>
            props.mealsData.dinner.consummedAliments.length > 0
              ? props.history.push('/meals')
              : null
          }
        >
          {props.mealsData.dinner.consummedAliments.length > 0 ? (
            rightComponent(props)
          ) : (
            <img alt="add" src={require('../../../images/add.svg')} />
          )}
        </div>
      </div>

      <div
        style={mealType === 'total' ? {} : { opacity: 0.5 }}
        onClick={() =>
          props.mealsData.dinner.consummedAliments.length > 0 &&
          props.mealsData.snack.consummedAliments.length > 0 &&
          props.mealsData.lunch.consummedAliments.length > 0 &&
          props.mealsData.breakfast.consummedAliments.length > 0
            ? props.history.push('/result/total')
            : props.history.push('/meals')
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Total</p>
        </div>
        <div className="app__sidebar__content__block__right">
          {props.mealsData.dinner.consummedAliments.length > 0 &&
          props.mealsData.snack.consummedAliments.length > 0 &&
          props.mealsData.lunch.consummedAliments.length > 0 &&
          props.mealsData.breakfast.consummedAliments.length > 0 ? (
            rightComponent(props)
            ) : (
              <img alt="add" src={require('../../../images/add.svg')} />
            )}
        </div>
      </div>
    </div>
  </div>
);

export default SidebarComponent;
