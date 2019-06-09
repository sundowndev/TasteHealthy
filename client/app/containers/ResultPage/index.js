/* eslint-disable jsx-a11y/anchor-is-valid */
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
import SidebarComponent from './components/SideBarComponent';
import NutriscoreComponent from './components/NutriscoreComponent';
import OriginComponent from './components/OriginComponent';
import PackagingComponent from './components/PackagingComponent';
import ProductComponent from './components/ProductComponent';
import SubstituteProductComponent from './components/SubstituteProductComponent';

// Food data
import {
  getMealsNutriScore,
  getMealsOrigin,
  getMealsPackaging,
  getCalories,
  getSodium,
  getSalt,
} from './utils/getFoodData';

import progressBar from './components/ProgressBarComponent';

type Props = {
  match: {
    params: {
      mealType: string,
    },
  },
  mealsData: any,
};

const ResultPage = (props: Props) => {
  const { mealType } = props.match.params;
  const { mealsData } = props;
  const mealsElements = props.mealsData[mealType].consummedAliments;

  return (
    <div className="app">
      <div className="app__top" />
      <div className="app__right" />
      <div className="app__bottom" />
      <div className="app__left" />

      <div className="app__logo" />

      <div className="app__container">
        <SidebarComponent props={props} mealsData={mealsData} />

        <div className="app__content">
          <p className="app__content__title">Produits consommés</p>
          <div className="app__content__block__flex">
            <div
              className="app__content__block__flex__left"
              style={{ alignItems: 'baseline' }}
            >
              <div className="app__content__block__flex__component">
                {progressBar(getCalories(mealsElements), 70, 70)}
                Calories
              </div>
              <div className="app__content__block__flex__component">
                {progressBar(getSodium(mealsElements), 70, 70)}
                Sodium
              </div>
              <div className="app__content__block__flex__component">
                {progressBar(getSalt(mealsElements), 70, 70)}
                Salt
              </div>
            </div>
            <div className="app__content__block__flex__middle">
              <div>{progressBar(getSalt(mealsElements), 280, 280, 40)}</div>
            </div>

            <div
              style={{ alignItems: 'flex-end' }}
              className="app__content__block__flex__right"
            >
              <div className="app__content__block__flex__component">
                Calories
                {progressBar(getCalories(mealsElements), 70, 70)}
              </div>
              <div className="app__content__block__flex__component">
                Sodium
                {progressBar(getSodium(mealsElements), 70, 70)}
              </div>
              <div className="app__content__block__flex__component">
                Salt
                {progressBar(getSalt(mealsElements), 70, 70)}
              </div>
            </div>
          </div>

          <div className="app__content__blocks app__content__blocks--three">
            <NutriscoreComponent letter={getMealsNutriScore(mealsElements)} />

            <OriginComponent origin={getMealsOrigin(mealsElements)} />

            <PackagingComponent data={getMealsPackaging(mealsElements)} />
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
                  {mealsElements.map(meal => (
                    <SubstituteProductComponent mealProps={meal} />
                  ))}
                </div>
              </div>
              <a
                href="#"
                onClick={() => window.scrollTo(0, 0)}
                className="app__content__block__button"
              >
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
