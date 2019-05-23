/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import '../../styles/index.css';

type Props = {
  history: {
    push: string => any,
  },
};

export default function HomePage(props: Props) {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
        <FormattedMessage {...messages.content} />
      </h1>
      <button type="button" onClick={() => props.history.push('/meals')}>
        {"commencer l'expérience".toUpperCase()}
      </button>
    </div>
  );
}
