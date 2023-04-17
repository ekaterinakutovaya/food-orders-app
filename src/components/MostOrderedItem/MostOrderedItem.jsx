import React from 'react';

import "./MostOrderedItem.scss";

export const MostOrderedItem = () => {
  return (
    <div className='most-ordered-item'>

      <div className='most-ordered-item__data'>
        <div className='most-ordered-item__image'>
          <img src="images/dish001.png" alt="dish" />
        </div>

        <div className='most-ordered-item__desc'>
          <div className='most-ordered-item__title'>Spicy seasoned seafood noodles</div>
          <span className='most-ordered-item__qty'>200 dishes ordered</span>
        </div>
      </div>

    </div>
  );
};
