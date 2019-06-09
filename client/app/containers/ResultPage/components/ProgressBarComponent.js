import React from 'react';
// CircularProgressBar
import ProgressBar from '../utils/ProgressBar';

const progressBar = (
  percentage: number,
  width: number,
  height: number,
  fontSize: number = 16,
) => (
  <ProgressBar
    percentage={percentage}
    startColor="#FF0A0A"
    endColor="#FFBE0D"
    gradientId="progress"
    width={width}
    height={height}
    fontSize={fontSize}
  >
    <p
      style={{
        fontFamily: 'Apercu',
        color: '#33176E',
        fontSize: `${fontSize}px`,
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
