import React from 'react';
import { SvgSelector } from '../../assets/icons/SvgSelector';

import "./ProductCard.scss";

export const ProductCard = () => {


  return (
    <div className="product-card">
    <div className="product-card__content">
      <div className="product-card__image">
        <img src="images/dish001.png" alt="dish"/>
      </div>

      <div className="product-card__title">Spicy seasoned seafood noodles</div>
      <div className="product-card__info">
        <span>$ 2.29</span>
        &#8226;
        <span>20 Bowls</span>
      </div>

</div>
      <button className="edit-dish-btn">
      <SvgSelector id="edit"/>
      Edit dish
      </button>
    </div>
  );
};
