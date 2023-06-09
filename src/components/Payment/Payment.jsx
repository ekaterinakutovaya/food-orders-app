import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './Payment.scss';
import { PaymentMethodOptions, Button, CreditCardForm } from '@/components';
import { setModal } from "@/store/ModalSlice";

export const Payment = () => {
    const dispatch = useDispatch();
    const [vh, setVh] = useState(window.innerHeight);

    useEffect(() => {
        const hadnleResize = (e) => {
            setVh(e.target.innerHeight);
        }

        window.addEventListener('resize', hadnleResize);

        return () => {
            window.removeEventListener('resize', hadnleResize)
        }
    }, [])

    return (
        <div className="payment">
            <div className="payment__head">
                <h2 className='payment__title'>Payment</h2>
                <p className='payment__text'>3 payment method available</p>
            </div>

            <div className="payment-method">
                <h2 className="payment-method__title">Payment Method</h2>
                <PaymentMethodOptions/>
            </div>

            <CreditCardForm/>

            <div className='payment__submit flex-space-between column-gap-12'>
                <Button type='secondary' onClick={() => dispatch(setModal(false))}>Cancel</Button>
                <Button type='primary'>Confirm payment</Button>
            </div>
        </div>
    )
}