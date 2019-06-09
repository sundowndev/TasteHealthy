import React from 'react';
// CircularProgressBar
import ProgressBar from '../utils/ProgressBar';

const progressBar = (percentage: number) => (
  <ProgressBar
    percentage={percentage}
    startColor="#FF0A0A"
    endColor="#FFBE0D"
    gradientId="progress"
  >
    <p
      style={{
        fontFamily: 'Apercu',
        color: '#33176E',
        fontSize: '20px',
        letterSpacing: '0',
        fontWeight: '600',
        textAlign: 'center',
      }}
    >
      {' '}
      {percentage}{' '}
    </p>
  </ProgressBar>
);

export default progressBar;
