import React from 'react';
import '../../../styles/ResultPage.css';

// DoughnutComponent
import DoughnutComponent from '../utils/Doughnut';

const PackagingComponent = ({ data }) => (
  <div>
    <p className="app__content__title app__content__title--md">Emballage</p>
    <div className="app__content__block app__content__block--packaging">
      <div className="app__content__block--packaging__content">
        <div
          style={{ width: '400px' }}
          className="app__content__block--packaging__content__column"
        >
          <DoughnutComponent elements={data} />
        </div>
      </div>
    </div>
  </div>
);

export default PackagingComponent;
