import React, { useState, useEffect } from 'react';

import './Dishes.scss';
import { DishCard } from '../DishCard/DishCard';

export const Dishes = () => {


    return (
        <div className='dishes'>
           <div className="dishes__head">
                <h2 className='dishes__title'>Choose Dishes</h2>
                <div>Dropdown</div>
           </div>

           <div className="dishes__content">
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
           </div>
        </div>
    )
}