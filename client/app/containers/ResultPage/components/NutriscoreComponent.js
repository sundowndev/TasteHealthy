import React from 'react';
import '../../../styles/ResultPage.css';

const NutriscoreComponent = ({ letter }: { letter: string }) => (
  <div>
    <p className="app__content__title app__content__title--md">
      Nutriscore moyen
    </p>
    <div className="app__content__block">
      <img
        style={{ width: '150px' }}
        alt=""
        // eslint-disable-next-line global-require
        src={require(`../../../images/nutriscore-${letter}.jpg`)}
      />
    </div>
  </div>
);

export default NutriscoreComponent;
