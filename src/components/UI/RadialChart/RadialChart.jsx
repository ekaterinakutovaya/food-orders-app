import React, { useEffect, useState } from 'react';

import "./RadialChart.scss";


export const RadialChart = ({ data }) => {
  const [total, setTotal] = useState(0);
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    if (data.length) {
      setTotal(data.reduce((acc, cur) => acc + cur.value, 0))
    }
    setAnimation(1);
  }, [data])


  return (
    <div className="radial-chart">
      <div className="radial-chart__wrapper">
        
      
        <svg viewBox="0 0 36 36" className="radial-chart__circle">
            <path 
            className="radial-chart__circle-path"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#65B0F6"
              strokeWidth="2.3"
              strokeDasharray={`${(data.length && data[2].value / total) * 100}, 100`}
              animation={animation}
              onAnimationEnd={() => setAnimation(0)}
            />
        </svg>
        <svg viewBox="0 0 36 36" className="radial-chart__circle-bg1">
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeDasharray="100, 100"
              
            />
        </svg>

        <svg viewBox="0 0 36 36" className="radial-chart__circle">
            <path
            className="radial-chart__circle-path"
              d="M18 4.3845
            a 13.6155 13.6155 0 0 1 0 27.231
            a 13.6155 13.6155 0 0 1 0 -27.231"
              fill="none"
            
            stroke="#FFB572"
            strokeWidth="2.3"
            strokeDasharray={`${(data.length && data[1].value / total) * 100}, 100`}
            animation={animation}
            onAnimationEnd={() => setAnimation(0)}
            />
        </svg>

        <svg viewBox="0 0 36 36" className="radial-chart__circle-bg2">
            <path
              d="M18 4.3845
            a 13.6155 13.6155 0 0 1 0 27.231
            a 13.6155 13.6155 0 0 1 0 -27.231"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeDasharray="100, 100"
            />
        </svg>


        <svg viewBox="0 0 36 36" className="radial-chart__circle">
            <path
            className="radial-chart__circle-path"
              d="M18 6.6845
            a 11.3155 11.3155 0 0 1 0 22.631
            a 11.3155 11.3155 0 0 1 0 -22.631"
            fill="none"
            stroke="#FF7CA3"
            strokeWidth="2.3"
            strokeDasharray={`${(data.length && data[0].value / total) * 100}, 100`}
            animation={animation}
            onAnimationEnd={() => setAnimation(0)}
            />
        </svg>

        <svg viewBox="0 0 36 36" className="radial-chart__circle-bg1">
            <path
              d="M18 6.6845
            a 11.3155 11.3155 0 0 1 0 22.631
            a 11.3155 11.3155 0 0 1 0 -22.631"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeDasharray="100, 100"
            />
        </svg>

      </div>

      <div className="radial-chart__description">

      {data.length && data.map(item => (
          <div className="radial-chart__item">
            <div className="radial-chart__bullet" style={{backgroundColor: `${item.fill}`}}></div>
            <div className="radial-chart__data">
              <div className="radial-chart__title">{item.name}</div>
              <div className="radial-chart__customers">{item.value} customers</div>
            </div>
          </div>
      ))}

      </div>
    </div>
  );
};
