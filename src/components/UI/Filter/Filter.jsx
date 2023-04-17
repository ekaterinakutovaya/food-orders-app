import React from 'react';

import "./Filter.scss";
import { SvgSelector } from '../../../assets/icons/SvgSelector';


export const Filter = () => {


    return (
        <div className='filter'>
            <SvgSelector id='filter'/>
            <p>Filter Order</p>
        </div>
    );
};