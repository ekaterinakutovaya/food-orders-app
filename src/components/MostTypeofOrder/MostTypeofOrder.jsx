import React from 'react';

import "./MostTypeofOrder.scss";
import { Dropdown, RadialChart } from '@/components';
import { timeRange } from "@/utils/constants";

export const MostTypeofOrder = () => {

    // const data = [
    //     { name: 'Dine In', pv: 200, uv: 200, fill: '#FF7CA3' },
    //     { name: 'To Go', pv: 122, uv: 122, fill: '#FFB572' },
    //     { name: 'Delivery', pv: 264, uv: 264, fill: '#65B0F6' }
    // ]
    const data = [
        { name: 'Dine In', value: 200, fill: '#FF7CA3' },
        { name: 'To Go', value: 122, fill: '#FFB572' },
        { name: 'Delivery', value: 264, fill: '#65B0F6' }
    ]

    return (
        <div className="most-type-of-order">
            <div className="head">
                <h3 className="head__title">Most Type of Order</h3>

                {/* <Dropdown items={timeRange} /> */}
            </div>

            <div className="line"></div>

            <div className="most-type-of-order__chart">
                <RadialChart data={data}/>
            </div>
        </div>
    );
};
