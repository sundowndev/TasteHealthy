/*
 * ResultPage
 *
 * This is the result page, at the '/result' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import '../../styles/ResultPage.css';

// Components
import { forEachObjIndexed } from 'ramda';
import SidebarComponent from './components/SideBarComponent';
import NutriscoreComponent from './components/NutriscoreComponent';
import OriginComponent from './components/OriginComponent';
import PackagingComponent from './components/PackagingComponent';
import ProductComponent from './components/ProductComponent';
import SubstituteProductComponent from './components/SubstituteProductComponent';

import mode from './utils/mode';

const ResultPage = props => {
  const { mealType } = props.match.params;
  const mealsElements = props.mealsData[mealType].consummedAliments;

  const getMealsOrigin = mealsElements => {
    const result = 'Inconnu';
    const arrayResult = mealsElements.map(el =>
      el.countries.match(/\S+(?=,)/) ? el.countries.match(/\S+(?=,)/)[0] : null,
    );
    const filtered = arrayResult.filter(el => el != null);
    return mode(filtered) || result;
  };

  const getMealsPackaging = mealsElements => {
    const resultArray = mealsElements.map(el => el.packaging.split(','));
    const flattenArray = resultArray.flat();

    const counts = {};

    for (let i = 0; i < flattenArray.length; i++) {
      const num = flattenArray[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts;
  };

  const getMealsNutriScore = mealsElements => {
    const counts = {};

    for (let i = 0; i < mealsElements.length; i++) {
      const num = mealsElements[i].misc_data.nutrition_grade_fr;
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts;
  };

  getMealsNutriScore(mealsElements);

  return (
    <div className="app">
      <div className="app__top" />
      <div className="app__right" />
      <div className="app__bottom" />
      <div className="app__left" />

      <div className="app__logo" />

      <div className="app__container">
        <SidebarComponent />

        <div className="app__content">
          <p className="app__content__title">Produits consommés</p>
          <div className="app__content__block" />

          <div className="app__content__blocks app__content__blocks--three">
            <NutriscoreComponent />

            <OriginComponent origin={getMealsOrigin(mealsElements)} />

            <PackagingComponent />
          </div>

          <div className="app__content__substitute-products">
            <p className="app__content__title">Produits de substitutions</p>
            <div className="app__content__block">
              <div className="app__content__blocks">
                <div className="app__content__substitute-products__content">
                  <p className="app__content__substitute-products__content__title">
                    Mes produits
                  </p>
                  {mealsElements.map(meal => (
                    <ProductComponent mealProps={meal} />
                  ))}
                </div>

                <div className="app__content__substitute-products__content app__content__substitute-products__content--reverse">
                  <p className="app__content__substitute-products__content__title">
                    Les produits conseillés
                  </p>
                  {[1, 1, 1, 1, 1].map(_ => (
                    <SubstituteProductComponent />
                  ))}
                </div>
              </div>

              <a href="#" className="app__content__block__button">
                Visualiser avec les nouveaux produits
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { meals } = state;
  return { mealsData: meals };
}

export default connect(mapStateToProps)(ResultPage);
