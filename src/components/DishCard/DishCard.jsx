import React, { useState, useEffect } from 'react';

import './DishCard.scss'

export const DishCard = () => {

    return (
        <div className='dish-card'>
           <div className="dish-card__image">
                <img src="images/dish001.png" alt="dish image" />
           </div>

        <div className='dish-card__content'>
           <h3 className="dish-card__title">Spicy seasoned seafood noodles</h3>

           <span className='dish-card__price'>$ 2.29</span>
           <span className='dish-card__available'>20 Bowls available</span>
        </div>
        </div>
    )
}