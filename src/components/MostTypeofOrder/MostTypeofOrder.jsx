import React from 'react';
import ApexCharts from 'apexcharts';

import "./MostTypeofOrder.scss";

export const MostTypeofOrder = () => {

    const chartData = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        }
    }


    return (
        <div className="most-type-of-order">
            <div className="head">
                <h3 className="head__title">Most Type of Order</h3>

                Dropdown
            </div>

            <div className="line"></div>
            
            <div className="most-type-of-order__chart" id="chart">
                {/* <ApexCharts options={chartData.opstions} series={chartData.series} type="radialBar" height={350} /> */}
            </div>
        </div>
    );
};
