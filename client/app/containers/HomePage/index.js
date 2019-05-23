/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './HomePage.css';
import HomeIcon from '/client/app/images/home-icon.png';

import '../../styles/index.css';

type Props = {
  history: {
    push: string => any,
  },
};

export default function HomePage(props: Props) {
  return (
    <div className="homePage">
      <div className="contentContainer">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <input className="age" maxLength="3" pattern="\d*" type="text" placeholder="Votre age ?"></input>
        <select className="gender">
          <option disabled selected>Votre sexe ?</option>
          <option>{"homme".toUpperCase()}</option>
          <option>{"femme".toUpperCase()}</option>
        </select>
        <button className="startButton" type="button" onClick={() => props.history.push('/meals')}>
          {"C'est parti !".toUpperCase()}
        </button>
      </div>

      <div className="imgContainer">
        <img src={HomeIcon} className="Background"/>
      </div>
    </div>
  );
}
