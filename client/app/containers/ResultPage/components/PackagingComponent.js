import React from 'react';
import '../../../styles/ResultPage.css';

const PackagingComponent = () => (
  <div>
    <p className="app__content__title app__content__title--md">Emballage</p>
    <div className="app__content__block app__content__block--packaging">
      <div className="app__content__block--packaging__content">
        <div className="app__content__block--packaging__content__column">
          <div>
            <div className="app__content__block--packaging__circle" />
            <p>
              <strong>34%</strong> Plastique
            </p>
          </div>
          <div>
            <div className="app__content__block--packaging__circle" />
            <p>
              <strong>45%</strong> Conserve
            </p>
          </div>
        </div>
        <div className="app__content__block--packaging__content__column">
          <div>
            <div className="app__content__block--packaging__circle" />
            <p>
              <strong>23%</strong> Canette
            </p>
          </div>
          <div>
            <div className="app__content__block--packaging__circle" />
            <p>
              <strong>0%</strong> Cassette
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PackagingComponent;
