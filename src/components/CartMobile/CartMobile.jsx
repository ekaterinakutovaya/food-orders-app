import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './CartMobile.scss';
import { CartItem, Options, Button, Modal, Payment } from '@/components';
import { setModal } from "@/store/ModalSlice";
import { setTotal } from "@/store/CartSlice";
import { CartItemMobile } from '../CartItemMobile/CartItemMobile';


export const CartMobile = () => {
  
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
    <div className='cart-mobile'>
      <div className="cart-mobile__head">
        <div className='space-y-12'><Options /></div>
      </div>

      <div className="cart-mobile__content">
        {cart && cart.map(item => (
          <CartItemMobile key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-mobile__footer">
        {/* <div className="cart__total space-y-24"> */}
        <div className="cart__total">
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