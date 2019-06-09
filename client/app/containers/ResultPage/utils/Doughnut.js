import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutComponent = ({ elements }) => {
  const dataProps = {
    labels: Object.keys(elements),
    options: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    datasets: [
      {
        data: Object.values(elements),
        backgroundColor: [
          '#414A5A',
          '#C1D0D9',
          '#F1F4F7',
          '#F1F4G8',
          '#U4U7U5',
          '#000000',
          '#111111',
        ],
        hoverBackgroundColor: [
          '#C1D0D9',
          '#414A5A',
          '#A8C7D8',
          '#F1F4F7',
          '#F1F4G8',
          '#111111',
          '#000000',
        ],
      },
    ],
  };
  return (
    <div>
      <Doughnut data={dataProps} />
    </div>
  );
};

export default DoughnutComponent;
