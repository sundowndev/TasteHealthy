/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import HomeIcon from '../../images/home-icon.png';

import '../../styles/HomePage.css';

type Props = {
  history: {
    push: string => any,
  },
};

export default function HomePage(props: Props) {
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
            une vue détaillée et davantage <br /> d’informations sur ce que vous
            mangez.
          </p>

          <select>
            <option selected="selected">Sportif ?</option>
            <option>modéré</option>
            <option>intense</option>
          </select>
          {/* <img alt="home-icon" src={Arrow}/> */}

          <select>
            <option selected="selected">Votre sexe ?</option>
            <option>{'homme'.toUpperCase()}</option>
            <option>{'femme'.toUpperCase()}</option>
          </select>

          <button
            className="startButton"
            type="button"
            onClick={() => props.history.push('/meals')}
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
