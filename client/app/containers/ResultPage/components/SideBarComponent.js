import React from 'react';
import '../../../styles/ResultPage.css';

const SidebarComponent = ({ props }: { props: any }) => (
  <div className="app__sidebar">
    <p className="app__sidebar__title">Ma consommation</p>
    <div className="app__sidebar__content">
      <div
        onClick={() =>
          props.mealsData.breakfast.consummedAliments
            ? props.history.push('/result/breakfast')
            : null
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Petit Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div
        onClick={() =>
          props.mealsData.lunch.consummedAliments
            ? props.history.push('/result/lunch')
            : null
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div
        onClick={() =>
          props.mealsData.snack.consummedAliments
            ? props.history.push('/result/snack')
            : null
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Goûter</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div
        onClick={() =>
          props.mealsData.breakfast.consummedAliments
            ? props.history.push('/result/dinner')
            : null
        }
        className="app__sidebar__content__block"
      >
        <div className="app__sidebar__content__block__left">
          <p>Dinner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>
    </div>
  </div>
);

export default SidebarComponent;
