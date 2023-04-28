import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './Cart.scss';
import { CartItem, Options, Button, Modal, Payment } from '@/components';
import { setModal } from "@/store/ModalSlice";
import { setTotal } from "@/store/CartSlice";
import { CartItemMobile } from '../CartItemMobile/CartItemMobile';


export const Cart = () => {
  const dispatch = useDispatch();
  const { cart, discount } = useSelector(state => state.cart);
  const { modalOpen } = useSelector(state => state.modal);
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = cart && cart.reduce((acc, cur) => {
      return acc + (Number(cur.price) * Number(cur.quantity))
    }, 0)

    setSubtotal(prevState => total - Number(discount));
    dispatch(setTotal(total - Number(discount)));
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart__head">
        <h2 className="cart__title">Order&nbsp;<span>#34562</span></h2>
        <div className='space-y-24'><Options /></div>
      </div>

      <div className="cart__table">
        <div className="cart__table-header">
          <div>Item</div>
          <div>Qty</div>
          <div>Price</div>
        </div>

        <div className='cart__content'>
          {/* {cart && cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))} */}
          {cart && cart.map(item => (
            <CartItemMobile key= { item.id } item = { item } />
          ))}

        </div>
      </div>

      <div className="cart__footer">
        <div className="cart__total space-y-24">
          <div className="cart__discount">
            <p>Discount</p>
            <span>$ {discount}</span>
          </div>

          <div className="cart__subtotal">
            <p>Sub total</p>
            <span>$ {Math.round(subTotal * 100) / 100}</span>
          </div>
        </div>

        <Button type="primary"
          onClick={() => dispatch(setModal(true))}
        >
          Continue to Payment
        </Button>

        {modalOpen ? (
          <Modal>
            <Payment />
          </Modal>
        ) : ''}
        
      </div>
    </div>
  )
}