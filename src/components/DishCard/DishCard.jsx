import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './DishCard.scss'
import { Button } from "@/components";
import { addToCart } from '../../store/CartSlice';

export const DishCard = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, available } = item;

  const handler = (e) => {
    console.log(e);

  }

  return (
    <div className='dish-card'>
      <div className="dish-card__image">
        <img src={image} alt="dish image" />
      </div>

      <div className='dish-card__content'>
        <h3 className="dish-card__title">{title}</h3>

        <span className='dish-card__price'>$ {price}</span>
        <span className='dish-card__available'>{available} Bowls available</span>
      </div>

      <Button type="primary"
        onClick={() => dispatch(addToCart({ id, title, image, price }))}
      >
        Add
      </Button>
    </div>
  )
}