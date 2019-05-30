import React from 'react';
import '../../../styles/ResultPage.css';

const ProductComponent = ({ mealProps }: { mealProps: any }) => (
  <div className="app__content__substitute-products__block">
    <div>
      <strong>{mealProps.product_name}</strong>
      <p>{mealProps.quantity}g</p>
    </div>
    <div className="app__content__substitute-products__block__check" />
  </div>
);

export default ProductComponent;
