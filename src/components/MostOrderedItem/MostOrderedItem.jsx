import React from 'react';

import "./MostOrderedItem.scss";

export const MostOrderedItem = ({item}) => {
  const {title, image, orderedQty} = item;


  return (
    <div className='most-ordered-item'>

      <div className='most-ordered-item__data'>
        <div className='most-ordered-item__image'>
          <img src={image} alt="dish" />
        </div>

        <div className='most-ordered-item__desc'>
          <div className='most-ordered-item__title'>{title}</div>
          <span className='most-ordered-item__qty'>{orderedQty} dishes ordered</span>
        </div>
      </div>

    </div>
  );
};
