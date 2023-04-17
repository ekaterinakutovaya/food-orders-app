import React from 'react';

import "./AddNewDish.scss";
import { SvgSelector } from "../../assets/icons/SvgSelector";

export const AddNewDish = () => {

    return (
        <div className="add-new-dish">
        
            <SvgSelector id="plus"/>
            <div className="add-new-dish__title">Add New Dish</div>
        </div>
    );
};
