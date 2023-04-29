import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './DishCard.scss'
import { Button } from "@/components";
import { addToCart } from '../../store/CartSlice';

export const DishCard = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, available } = item;

  const addtoCartHandler = () => {
    dispatch(addToCart({ id, title, image, price }))
    
      // console.log('success');
      
      // toast.success("Added to cart!", {
      //   position: toast.POSITION.TOP_CENTER,
      //   theme: "dark"
      // });

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
        onClick={addtoCartHandler}
      >
        Add
      </Button>

      {/* <ToastContainer
        autoClose={1500}
        hideProgressBar={true}
      transition="flip"
      /> */}
    </div>
  )
}