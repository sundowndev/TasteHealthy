import React from 'react';
// CircularProgressBar
import ProgressBar from '../utils/ProgressBar';

const percentColors = [
  { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
  { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
  { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } },
];

const getColorForPercentage = pct => {
  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }
  const lower = percentColors[i - 1];
  const upper = percentColors[i];
  const range = upper.pct - lower.pct;
  const rangePct = (pct - lower.pct) / range;
  const pctLower = 1 - rangePct;
  const pctUpper = rangePct;
  const color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
  };
  return `rgba(${[color.r, color.g, color.b, 0.7].join(',')})`;
};

const progressBar = (
  percentage: number,
  width: number,
  height: number,
  fontSize: number = 16,
  unit: string = 'g',
) => (
  <ProgressBar
    percentage={percentage}
    startColor={
      percentage >= 100
        ? getColorForPercentage(100)
        : getColorForPercentage(percentage)
    }
    endColor={getColorForPercentage(0)}
    gradientId="progress"
    width={width}
    height={height}
    fontSize={fontSize}
    unit={unit}
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
      {percentage}
      {unit === 'g' || <br />}
      {unit}
    </p>
  </ProgressBar>
);

export default progressBar;
