import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutComponent = ({ elements }) => {
  const dataProps = {
    labels: ['Boîte', 'Carton', 'Sachet', 'Plastique'],
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
        data: elements,
        backgroundColor: ['#414A5A', '#C1D0D9', '#F1F4F7', '#A8C7D8'],
        hoverBackgroundColor: ['#C1D0D9', '#414A5A', '#A8C7D8', '#F1F4F7'],
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
