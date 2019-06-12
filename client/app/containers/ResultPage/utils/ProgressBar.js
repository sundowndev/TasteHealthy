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
          maxValue={unit === 'g' ? 100 : calories / 1000}
          value={percentage}
          {...propsProgress}
        />
      </div>
      {percentage2 === null ? null : (
        <div style={{ position: 'absolute', width: '80%%', height: '80%%' }}>
          <CircularProgressbar
            maxValue={unit === 'g' ? 100 : calories / 1000}
            value={percentage2}
            styles={{
              path: {
                // stroke: `url(#${gradientId})`,
                height: '100%',
                opacity: 0.5,
              },
            }}
            strokeWidth={5}
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
        <svg style={{ height: 0, width: 0 }}>
          <defs>
            <linearGradient
              id={gradientId}
              gradientTransform={gradientTransform}
            >
              <stop offset="0%" stopColor={endColor} />
              <stop offset="100%" stopColor={startColor} />
            </linearGradient>
          </defs>
        </svg>
        <CustomProgressBar
          percentage={percentage}
          percentage2={percentage2}
          strokeWidth="10"
          unit={unit}
          gradientId={gradientId}
          calories={calories}
          styles={{ path: { stroke: `url(#${gradientId})`, height: '100%' } }}
        >
          {children}
        </CustomProgressBar>
      </div>
    );
  }
}

export default ProgressBar;
