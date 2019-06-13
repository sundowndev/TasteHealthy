/* eslint-disable */
import React from 'react';
import '../../../styles/ResultPage.css';

// DoughnutComponent
import DoughnutComponent from '../utils/Doughnut';

const OriginComponent = ({ origin }) => (
  <div style={{ width: '280px' }}>
    <p className="app__content__title app__content__title--md">
      Origines des produits
    </p>
    <div className="app__content__block">
      <div>
        <div>
          <DoughnutComponent elements={origin} />
        </div>
      </div>
    </div>
  </div>
);

export default OriginComponent;
