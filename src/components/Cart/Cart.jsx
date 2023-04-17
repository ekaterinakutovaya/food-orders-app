import React, { useState, useEffect } from 'react';

import './Cart.scss';
import { CartItem } from '../CartItem/CartItem';
import { Options } from '../UI/Options/Options';
import { Button } from '../UI/Button/Button';

export const Cart = () => {


    return (
        <div className='cart'>
            <div className="cart__head">
                <h2 className="cart__title">Order&nbsp;<span>#34562</span></h2>
                <div className='space-y-24'><Options/></div>
               

            </div>

            <div className="cart__table">
               <div className="cart__table-header">
                    <div>Item</div>
                    <div>Qty</div>
                    <div>Price</div>
               </div>

            <div className='cart__content'>
            <CartItem/>
               <CartItem/>
               <CartItem/>
               <CartItem/>
            </div>
               
            </div>

            <div className="cart__total space-y-24">
                <div className="cart__discount">
                    <p>Discount</p>
                    <span>$ 0</span>
                </div>

                <div className="cart__subtotal">
                    <p>Sub total</p>
                    <span>$ 21.03</span>
                </div>
            </div>

            <Button type="primary">Continue to Payment</Button>
        </div>
    )
}