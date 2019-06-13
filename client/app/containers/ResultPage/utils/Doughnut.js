/* eslint-disable */
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
          '#U4U7U5',
          '#000000',
          '#111111',
          '#b79c9c',
          '#acabcc',
          '#8583ad',
        ],
        hoverBackgroundColor: [
          '#111111',
          '#111111',
          '#111111',
          '#111111',
          '#111111',
          '#111111',
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
