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
import { map, assoc, prop } from 'ramda';

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
  getProteins,
  getFat,
  getSugar,
  getAdditives,
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
  const [mealsElements, setMealsElements] = useState(
    mealType === 'total'
      ? [].concat.apply(
        [],
        [
          props.mealsData.breakfast.consummedAliments,
          props.mealsData.lunch.consummedAliments,
          props.mealsData.snack.consummedAliments,
          props.mealsData.dinner.consummedAliments,
        ],
      )
      : props.mealsData[mealType].consummedAliments,
  );
  const [usedMealsElements, setUsedMealsElements] = useState(mealsElements);
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
      setUsedMealsElements(newMealsElements);
    }, 500);
  };

  useEffect(() => {
    const mealsElements2 =
      mealType === 'total'
        ? [].concat.apply(
          [],
          [
            props.mealsData.breakfast.consummedAliments,
              props.mealsData.lunch.consummedAliments,
            props.mealsData.snack.consummedAliments,
            props.mealsData.dinner.consummedAliments,
            ],
        )
        : props.mealsData[mealType].consummedAliments;
    const promises = [];
    for (let i = 0; i < mealsElements2.length; i++) {
      promises.push(
        axios
          .get(
            `http://localhost:3000/categories/${
              mealsElements2[i].categoryId
            }/products`,
          )
          .then(data => data.data.items[0]),
      );
    }
    setMealsElements(mealsElements2);
    setUsedMealsElements(mealsElements2);
    // setArrayIndex(new Array(mealsElements.length).fill(true));

    Promise.all(promises)
      .then(rr => {
        setSubstitute(map(assoc('quantity', 100), rr));
      })
      .catch(err => {
        console.log(err);
      });
  }, [mealType]);

  const toggleCheck = index => {
    const newArray = arrayIndex.map((el, indexEl) =>
      index === indexEl ? !el : el,
    );
    setArrayIndex(newArray);
  };

  const checkReRender = () => {
    const array1 = map(prop('id'), mealsElements);
    const array2 = map(prop('id'), usedMealsElements);
    const quantity1 = map(prop('quantity'), mealsElements);
    const quantity2 = map(prop('quantity'), usedMealsElements);
    if (
      JSON.stringify(quantity1) !== JSON.stringify(quantity2) ||
      JSON.stringify(array1) !== JSON.stringify(array2)
    ) {
      return true;
    }
    return false;
  };

  const getMeal = () => {
    switch (mealType) {
      case 'breakfast':
        return 'Petit Déjeuner';
      case 'lunch':
        return 'Déjeuner';
      case 'snack':
        return 'Goûter';
      case 'dinner':
        return 'Dîner';
      default:
        return 'Total';
    }
  };

  return (
    <div className="app">
      <div className="app__top" />
      <div className="app__right" />
      <div className="app__bottom" />
      <div className="app__left" />

      <div className="app__logo" />

      <div className="app__container">
        <SidebarComponent
          mealType={mealType}
          props={props}
          mealsData={mealsData}
        />

        <div className="app__content">
          <p className="app__content__title">
            Produits consommés - {getMeal()}
          </p>
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
                {progressBar(
                  getSugar(usedMealsElements),
                  70,
                  70,
                  16,
                  'g',
                  checkReRender() ? getSugar(mealsElements) : null,
                )}
                <p className="app__content__block__flex__left__detail">Sucre</p>
              </div>
              <div className="app__content__block__flex__component">
                {progressBar(
                  getSodium(usedMealsElements),
                  70,
                  70,
                  16,
                  'g',
                  checkReRender() ? getSodium(mealsElements) : null,
                )}
                <p className="app__content__block__flex__left__detail">
                  Sodium
                </p>
              </div>
              <div className="app__content__block__flex__component">
                {progressBar(
                  getSalt(usedMealsElements),
                  70,
                  70,
                  16,
                  'g',
                  checkReRender() ? getSalt(mealsElements) : null,
                )}
                <p className="app__content__block__flex__left__detail">Sel</p>
              </div>
            </div>
            <div className="app__content__block__flex__middle">
              <div>
                {progressBar(
                  getCalories(usedMealsElements),
                  280,
                  280,
                  35,
                  'cal',
                  checkReRender() ? getCalories(mealsElements) : null,
                  props.caloriesData.calories,
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Apercu',
                  marginTop: '10px',
                  textAlign: 'center',
                  fontSize: '15px',
                }}
              >
                | <br />
                <br /> Consommation recommandée
              </p>
            </div>

            <div
              style={{ alignItems: 'flex-end' }}
              className="app__content__block__flex__right"
            >
              <div className="app__content__block__flex__component">
                <p className="app__content__block__flex__right__detail">
                  Protéines
                </p>
                {progressBar(
                  getProteins(usedMealsElements),
                  70,
                  70,
                  16,
                  'g',
                  checkReRender() ? getProteins(mealsElements) : null,
                )}
              </div>
              <div className="app__content__block__flex__component">
                <p className="app__content__block__flex__right__detail">
                  Graisses
                </p>
                {progressBar(
                  getFat(usedMealsElements),
                  70,
                  70,
                  16,
                  'g',
                  checkReRender() ? getFat(mealsElements) : null,
                )}
              </div>
              <div className="app__content__block__flex__component">
                <p className="app__content__block__flex__right__detail">
                  Additifs
                </p>
                {progressBar(
                  getAdditives(usedMealsElements),
                  70,
                  70,
                  16,
                  '',
                  checkReRender() ? getAdditives(mealsElements) : null,
                )}
              </div>
            </div>
          </div>

          <div className="app__content__blocks app__content__blocks--three">
            <NutriscoreComponent
              letter={getMealsNutriScore(usedMealsElements)}
            />

            <OriginComponent origin={getMealsOrigin(usedMealsElements)} />

            <PackagingComponent data={getMealsPackaging(usedMealsElements)} />
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
                      key={index}
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
                  {substitute.map((meal, index) => (
                    <SubstituteProductComponent
                      key={index}
                      mealProps={meal}
                      isChecked={!arrayIndex[index]}
                      onClick={() =>
                        arrayIndex[index] ? toggleCheck(index) : null
                      }
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => updateMeals()}
                className="app__content__block__button"
              >
                Visualiser avec les nouveaux produits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { meals, calories } = state;
  return { mealsData: meals, caloriesData: calories };
}

export default connect(mapStateToProps)(ResultPage);
