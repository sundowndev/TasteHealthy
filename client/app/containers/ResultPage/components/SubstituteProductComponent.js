import React from 'react';
import '../../../styles/ResultPage.css';

const SubstituteProductComponent = ({ mealProps }: { mealProps: any }) => (
  <div className="app__content__substitute-products__block">
    <div className="app__content__substitute-products__block__check is-checked" />
    <div>
      <strong>{mealProps.product_name}</strong>
      <p>{mealProps.quantity}g</p>
    </div>
  </div>
);

export default SubstituteProductComponent;
