import React from 'react';
import '../../../styles/ResultPage.css';

const SidebarComponent = () => (
  <div className="app__sidebar">
    <p className="app__sidebar__title">Ma consommation</p>
    <div className="app__sidebar__content">
      <div className="app__sidebar__content__block">
        <div className="app__sidebar__content__block__left">
          <p>Petit Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div className="app__sidebar__content__block">
        <div className="app__sidebar__content__block__left">
          <p>Déjeuner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div className="app__sidebar__content__block">
        <div className="app__sidebar__content__block__left">
          <p>Goûter</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>

      <div className="app__sidebar__content__block">
        <div className="app__sidebar__content__block__left">
          <p>Dinner</p>
        </div>
        <div className="app__sidebar__content__block__right" />
      </div>
    </div>
  </div>
);

export default SidebarComponent;
