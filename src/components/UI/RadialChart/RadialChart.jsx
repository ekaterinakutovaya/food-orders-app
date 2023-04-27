import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend } from "recharts";

import "./RadialChart.scss";


export const RadialChart = ({ data }) => {
  const data1 = [
    { name: 'A', x: 1, fill: "green" },
    { name: 'B', x: 2, fill: "yellow" },
    { name: 'C', x: 3, fill: "aqua" },
    { name: 'D', x: 4, fill: "blue" },
    { name: 'E', x: 5, fill: "orange" },
    { name: 'F', x: 6, fill: "red" },
    { name: 'G', x: 7, fill: "black" },
    { name: 'H', x: 8, fill: "purple" },
    { name: 'I', x: 9, fill: "gray" },
  ];

  const temp = [
    { name: "Dine In", x: 200, fill: "#FF7CA3" },
    { name: "To Go", x: 122, fill: "#FFB572" },
    { name: "Delivery", x: 264, fill: "#65B0F6" },
  ]

  const chartStyle = {

  }

  const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
  }


  useEffect(() => {


  }, [])


  return (
    <RadialBarChart
      width={350}
      height={250}
      data={temp}
      barSize={10}
      innerRadius="50%"
      outerRadius="100%"
      margin={{ top: 0, right: 0, bottom: 0, left: 5 }}
      // barCategoryGap="20%"
      barGap={4}
    >
      <RadialBar
        minAngle={15}
        dataKey="x"
        // label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
      />

      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
};
