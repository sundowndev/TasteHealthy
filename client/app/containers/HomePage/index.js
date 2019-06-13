/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeIcon from '../../images/home-icon.png';
import '../../styles/HomePage.css';

import { changeCalories } from './actions';

type Props = {
  history: {
    push: string => any,
  },
};

const maleCalc = sport => (66.5 + 13.8 * 77.4 + 5 * 175.6 - 6.8 * 35) * sport;

const femaleCalc = sport =>
  (655.1 + 9.563 * 62.4 + 1.85 * 162.5 - 4.676 * 35) * sport;

const calc = (sport, sexe) => {
  const sportValue = sport === 'modéré' ? 1.6 : 1.8;
  if (sexe === 'male') {
    return Math.round(maleCalc(sportValue));
  }
  return Math.round(femaleCalc(sportValue));
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: 'Activité sportive',
      sexe: 'Votre sexe',
    };
  }

  handleSexChange = event => this.setState({ sexe: event.target.value });

  handleSportChange = event => this.setState({ sport: event.target.value });

  render() {
    return (
      <div className="homePage">
        <div className="ho">
          <div className="contentContainer">
            <h1>
              {/* <FormattedMessage {...messages.header} /> */}
              Évaluez la qualité <br /> de ce que vous mangez
            </h1>
            <p>
              Saisissez votre consommation journalière, que ce soit le petit
              déjeuner, le déjeuner, le goûter ou le dîner, afin d’avoir une vue
              détaillée
              <br /> et davantage d’informations sur ce que vous mangez.
            </p>

            <select value={this.state.sport} onChange={this.handleSportChange}>
              <option selected>{this.state.sport} </option>
              <option value="modéré">Modéré</option>
              <option value="intense">Intense</option>
            </select>
            {/* <img alt="home-icon" src={Arrow}/> */}

            <select
              name="test"
              value={this.state.sexe}
              onChange={this.handleSexChange}
            >
              <option selected>{this.state.sexe} </option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femmme</option>
            </select>

            <button
              className="startButton"
              type="button"
              onClick={() => {
                if (
                  this.state.sport !== 'Activité sportive' &&
                  this.state.sexe !== 'Votre sexe'
                ) {
                  this.props.changeCalories({
                    calories: calc(this.state.sport, this.state.sexe),
                  });
                  this.props.history.push('/meals');
                }
              }}
            >
              {"C'est parti !"}
            </button>
          </div>

          <div className="imgContainer">
            <img alt="home-icon" src={HomeIcon} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { calories } = state;
  return { caloriesData: calories };
}

export default connect(
  mapStateToProps,
  { changeCalories },
)(HomePage);
