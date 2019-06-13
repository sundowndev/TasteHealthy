/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// opacité sidebar
// max value 50% progress bar + couleurs
// origine des produits camembert => pull modifs raphael
// grossir dataviz
// meals page
// Pas de redirection "valider"

// this is the inner circle with whatever you want inside
const CustomProgressBar = props => {
  const {
    children,
    percentage,
    percentage2,
    unit,
    calories,
    gradientId,
    ...propsProgress
  } = props;
  const max = unit === 'g' ? 60 : calories * 2;
  const color = percentageValue =>
    (percentageValue * 100) / max > 75
      ? 'red'
      : (percentageValue * 100) / max > 50
        ? 'orange'
        : (percentageValue * 100) / max > 25
          ? '#6edd61'
          : 'green';

  const newValuePV = percentageValue => {
    if ((percentageValue * 100) / max > 50) {
      const maxValue = unit === 'g' ? 8000 : 60000;
      const newPercentage = Math.round(maxValue / 2 + percentageValue);
      return { maxValue, newPercentage };
    }
    return { maxValue: max, newPercentage: percentageValue };
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <CircularProgressbar
          maxValue={newValuePV(percentage).maxValue}
          value={newValuePV(percentage).newPercentage}
          styles={{
            path: {
              stroke: color(percentage),
              strokeLinecap: 'butt',
              height: '100%',
            },
          }}
          {...propsProgress}
        />
      </div>
      {percentage2 === null ? null : (
        <div style={{ position: 'absolute', width: '80%%', height: '80%%' }}>
          <CircularProgressbar
            maxValue={newValuePV(percentage2).maxValue}
            value={newValuePV(percentage2).newPercentage}
            styles={{
              path: {
                stroke: color(percentage2),
                height: '100%',
                strokeLinecap: 'butt',
                opacity: 0.4,
              },
            }}
            strokeWidth={percentage2 > 0 ? '8' : '5'}
          />
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

// this is the component imported to the view
class ProgressBar extends PureComponent {
  render() {
    const {
      percentage,
      percentage2,
      endColor,
      startColor,
      gradientId,
      children,
      width,
      height,
      unit,
      calories,
    } = this.props;
    const gradientTransform = `rotate(20)`;
    return (
      <div
        className="progress-bar"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <CustomProgressBar
          percentage={percentage}
          percentage2={percentage2}
          strokeWidth={percentage2 > 0 ? '14' : '8'}
          unit={unit}
          gradientId={gradientId}
          calories={calories}
        >
          {children}
        </CustomProgressBar>
      </div>
    );
  }
}

export default ProgressBar;
