/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import HomeIcon from '../../images/home-icon.png';

import '../../styles/HomePage.css';

type Props = {
  history: {
    push: string => any,
  },
};

const base = {
  energy: '1887',
  fat: '70',
  saturated_fat: '20',
  carbohydrates: '59.3',
  sugars: '90',
  fiber: '4.2',
  proteins: '50',
  salt: '6',
  sodium: '1.5',
};

const maleCalc = sport => (66.5 + 13.8 * 77.4 + 5 * 175.6 - 6.8 * 35) * sport;

const femaleCalc = sport =>
  (655.1 + 9.563 * 62.4 + 1.85 * 162.5 - 4.676 * 35) * sport;

const calc = (sport, sexe) => {
  const sportValue = sport === 'modéré' ? 1.5 : 1.7;
  if (sexe === 'male') {
    return maleCalc(sportValue);
  }
  return femaleCalc(sportValue);
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: 'Sportif ?',
      sexe: 'Votre sexe ?',
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
              déjeuner, le déjeuner, le <br /> goûter ou le dinner, afin d’avoir
              une vue détaillée et davantage <br /> d’informations sur ce que
              vous mangez.
            </p>

            <select value={this.state.sport} onChange={this.handleSportChange}>
              <option selected>{this.state.sport} </option>
              <option value="modéré">modéré</option>
              <option value="intense">intense</option>
            </select>
            {/* <img alt="home-icon" src={Arrow}/> */}

            <select value={this.state.sexe} onChange={this.handleSexChange}>
              <option selected>{this.state.sexe} </option>
              <option value={'homme'.toUpperCase()}>
                {'homme'.toUpperCase()}
              </option>
              <option value={'femme'.toUpperCase()}>
                {'femme'.toUpperCase()}
              </option>
            </select>

            <button
              className="startButton"
              type="button"
              onClick={() => {
                // this.props.history.push('/meals');
                console.log(this.state);
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

export default HomePage;
