import React from 'react';
import { SvgSelector } from '../../assets/icons/SvgSelector';

import "./ProductCard.scss";

export const ProductCard = ({item}) => {
  const {title, image, price, available} = item;

  return (
    <div className="product-card">
    <div className="product-card__content">
      <div className="product-card__image">
        <img src={image} alt="dish"/>
      </div>

      <div className="product-card__title">{title}</div>
      <div className="product-card__info">
        <span>$ {price}</span>
        &#8226;
        <span>{available} Bowls</span>
      </div>

</div>
      <button className="edit-dish-btn">
      <SvgSelector id="edit"/>
      Edit dish
      </button>
    </div>
  );
};
