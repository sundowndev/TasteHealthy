import React from 'react';
import '../../../styles/ResultPage.css';

const OriginComponent = ({ origin }: { origin: string }) => (
  <div>
    <p className="app__content__title app__content__title--md">
      Origine du produit
    </p>
    <div className="app__content__block">
      <p className="app__content__block__text__origin">{origin}</p>
    </div>
  </div>
);

export default OriginComponent;
