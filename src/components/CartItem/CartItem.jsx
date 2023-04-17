import React, { useState, useEffect } from 'react';

import './CartItem.scss';
import { SvgSelector } from '../../assets/icons/SvgSelector';

export const CartItem = () => {
    const [noteValue, setNoteValue] = useState('');

    const inputHandler = () => {

    }


    return (
        <div className='cart-item'>
 
            <div className='cart-item__data'>
                <div className="cart-item__main">
                    <div className='cart-item__image'>
                        <img src="images/dish001.png" alt="dish" />
                    </div>

                    <div className='cart-item__desc'>
                        <div className='cart-item__name'>Spicy seasoned seafood noodles</div>
                        <span className='cart-item__price'>$ 2.29</span>
                    </div>
                </div>

                <input type='number' className="cart-item__qty"/>
                <span className="cart-item__price">$ 4,58</span>
            </div>

            <div className="cart-item__note">
                <input 
                    className="cart-item__note-input input"
                    placeholder='Order Note...'
                    defaultValue={noteValue}
                    // onClick={inputHandler}
                />
                <button className='delete-btn'>
                    <SvgSelector id="trash"/>
                </button>
            </div>

        </div>
    )
}