/* eslint-disable */

import React from 'react';
import '../../../styles/ResultPage.css';

const ProductComponent = ({
  mealProps,
  isChecked,
  onClick,
}: {
  mealProps: any,
  isChecked: boolean,
  onClick: any => any,
}) => (
  <div
    onClick={() => onClick()}
    className="app__content__substitute-products__block"
  >
    <div>
      <strong>{mealProps.product_name}</strong>
      <p>{mealProps.quantity}g</p>
    </div>
    {isChecked ? (
      <img
        className="app__content__substitute-products__block__check"
        alt="checked"
        src={require('../../../images/checked2.svg')}
      />
    ) : (
      <div className="app__content__substitute-products__block__check" />
    )}
  </div>
);

export default ProductComponent;
