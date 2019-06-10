/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ResultPage
 *
 * This is the result page, at the '/result' route
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../styles/ResultPage.css';
import axios from 'axios';

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
  const [arrayIndex, setArrayIndex] = useState(
    new Array(mealsElements.length).fill(true),
  );

  const [substitute, setSubstitute] = useState([]);

  const updateMeals = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const newMealsElements = mealsElements.map((el, index) => {
        if (!arrayIndex[index]) {
          return substitute[index];
        }
        return el;
      });
      // console.log(newMealsElements);
    }, 500);
  };

  const getData = async () => {
    const products = await mealsElements.map(async element =>
      axios
        .get(`http://localhost:3000/categories/${element.categoryId}/products`)
        .then(data => data.data.items[0]),
    );
    return products;
  };

  useEffect(() => {
    console.log(getData());
  }, []);

  const toggleCheck = index => {
    const newArray = arrayIndex.map((el, indexEl) =>
      index === indexEl ? !el : el,
    );
    setArrayIndex(newArray);
  };

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
          <img
            className="app__content__block__svg__half-circle"
            src={require('../../images/1.svg')}
          />
          <img
            className="app__content__block__svg__rectangle"
            src={require('../../images/2.svg')}
          />
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
              <div>{progressBar(getCalories(mealsElements), 280, 280, 40)}</div>
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
              <img
                src={require('../../images/octo.svg')}
                className="app__content__block__svg__special-rectangle"
              />
              <div className="app__content__blocks">
                <div className="app__content__substitute-products__content">
                  <p className="app__content__substitute-products__content__title">
                    Mes produits
                  </p>
                  {mealsElements.map((meal, index) => (
                    <ProductComponent
                      key={meal.id}
                      mealProps={meal}
                      isChecked={arrayIndex[index]}
                      onClick={() =>
                        !arrayIndex[index] ? toggleCheck(index) : null
                      }
                    />
                  ))}
                </div>

                <div className="app__content__substitute-products__content app__content__substitute-products__content--reverse">
                  <p className="app__content__substitute-products__content__title">
                    Les produits conseillés
                  </p>
                  {mealsElements.map((meal, index) => (
                    <SubstituteProductComponent
                      key={meal.id}
                      mealProps={meal}
                      isChecked={!arrayIndex[index]}
                      onClick={() =>
                        arrayIndex[index] ? toggleCheck(index) : null
                      }
                    />
                  ))}
                </div>
              </div>
              <a
                href="#"
                onClick={() => updateMeals()}
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
