// @flow

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import messages from './messages';
import {
  changeLunch,
  changeBreakfast,
  changeSnack,
  changeDinner,
} from './actions';

type mealsType = {
  breakfast: any,
  dinner: any,
  snack: any,
  lunch: any,
};

type propsType = {
  changeBreakfast: mealsType => any,
  changeLunch: mealsType => any,
  changeSnack: mealsType => any,
  changeDinner: mealsType => any,
  mealsData: mealsType,
};

export const HomePage = (props: propsType) => {
  const [meals, setMeals] = useState(props.mealsData);

  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <button
        type="button"
        onClick={() =>
          setMeals({
            ...meals,
            breakfast: {
              test: 'OK',
            },
          })
        }
      >
        TTTTT
      </button>
      <button type="button" onClick={() => props.changeBreakfast(meals)}>
        -
      </button>
    </h1>
  );
};

function mapStateToProps(state) {
  const { meals } = state;
  return { mealsData: meals };
}

export default connect(
  mapStateToProps,
  { changeBreakfast, changeLunch, changeDinner, changeSnack },
)(HomePage);
