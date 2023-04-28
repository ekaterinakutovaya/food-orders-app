import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import "./RadialChart.scss";

export const RadialChart = ({ data }) => {
  console.log(data);

  const data1 = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8"
    },
    {
      name: "25-29",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed"
    },
    {
      name: "30-34",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1"
    },
    {
      name: "35-39",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d"
    },
    {
      name: "40-49",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c"
    },
    {
      name: "50+",
      uv: 2.63,
      pv: 4800,
      fill: "#d0ed57"
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "#ffc658"
    }
  ];

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };


  return (
    <div className="radial-chart">

      {/* <div className="radial-chart__circle"> */}
        {/* <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="90" cy="90" r="80" fill="none" stroke="#000000" strokeWidth="10" />
                </svg> */}

        <ResponsiveContainer width="250px" height="250px">
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data1}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
      {/* </div> */}

      {/* <div className="radial-chart__description">

        <div className="radial-chart__item">
          <div className="radial-chart__bullet red"></div>
          <div className="radial-chart__data">
            <div className="radial-chart__title">Dine In</div>
            <div className="radial-chart__customers">200 customers</div>
          </div>
        </div>
        <div className="radial-chart__item">
          <div className="radial-chart__bullet orange"></div>
          <div className="radial-chart__data">
            <div className="radial-chart__title">To Go</div>
            <div className="radial-chart__customers">200 customers</div>
          </div>
        </div>
        <div className="radial-chart__item">
          <div className="radial-chart__bullet blue"></div>
          <div className="radial-chart__data">
            <div className="radial-chart__title">Delivery</div>
            <div className="radial-chart__customers">200 customers</div>
          </div>
        </div>

      </div> */}

    </div>
  );
};
