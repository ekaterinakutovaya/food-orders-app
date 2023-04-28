import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './CartItem.scss';
import { SvgSelector } from '../../assets/icons/SvgSelector';
import { addToCart, addNote, incrementQuantity, decrementQuantity, removeItem } from "../../store/CartSlice";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, quantity } = item;
  const [noteValue, setNoteValue] = useState('');

  const noteInputHandler = (e) => {
    setNoteValue(e.target.value);
    dispatch(addNote({id, note: e.target.value}));
  }


  return (
    <div className='cart-item'>

      <div className='cart-item__data'>
        <div className="cart-item__main">
          <div className='cart-item__image'>
            <img src={image} alt="dish" />
          </div>

          <div className='cart-item__desc'>
            <div className='cart-item__title'>{title}</div>
            <span className='cart-item__price'>$ {price}</span>
          </div>
        </div>

        {/* <input
          type='number'
          className="cart-item__qty"
          value={qtyValue}
          onChange={qtyInputHandler}
        /> */}
        <div className="cart-item__qty">
          <button className="btn-decr" onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <span>{quantity}</span>
          <button className="btn-incr" onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <span className="cart-item__price">$ {Number(price) * Number(quantity)}</span>
      </div>

      <div className="cart-item__note">
        <input
          className="cart-item__note-input input"
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