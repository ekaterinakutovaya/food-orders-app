import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './CartItemMobile.scss';
import { SvgSelector } from '../../assets/icons/SvgSelector';
import { addToCart, addNote, incrementQuantity, decrementQuantity, removeItem } from "../../store/CartSlice";

export const CartItemMobile = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, quantity } = item;
  const [noteValue, setNoteValue] = useState('');

  const noteInputHandler = (e) => {
    setNoteValue(e.target.value);
    dispatch(addNote({id, note: e.target.value}));
  }


  return (
    <div className='cart-item-mobile'>

      <div className='cart-item-mobile__data'>
        <div className="cart-item-mobile__main">
          <div className='cart-item-mobile__image'>
            <img src={image} alt="dish" />
          </div>

          <div className='cart-item-mobile__desc'>
            <div className='cart-item-mobile__title'>{title}</div>
            <span className='cart-item-mobile__price'>$ {price}</span>
          </div>
        </div>

        <div classname="cart-item-mobile__qty-wrapper">
          <div className="cart-item-mobile__qty">
            <button className="btn-decr" onClick={() => dispatch(decrementQuantity(id))}>-</button>
              <span>{quantity}</span>
            <button className="btn-incr" onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
          <span className="cart-item-mobile__cost">$ {Number(price) * Number(quantity)}</span>
        </div>
      </div>

      <div className="cart-item-mobile__note">
        <input
          className="cart-item-mobile__note-input input"
          placeholder='Order Note...'
          defaultValue={noteValue}
          onChange={noteInputHandler}
        />
        <button className='delete-btn' onClick={() => dispatch(removeItem(id))}>
          <SvgSelector id="trash" />
        </button>
      </div>

    </div>
  )
}