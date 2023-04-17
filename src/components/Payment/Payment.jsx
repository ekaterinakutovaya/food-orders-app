import React, { useState, useEffect } from 'react';

import './Payment.scss';
import { PaymentMethodOptions } from '../PaymentMethodOptions/PaymentMethodOptions';
import { CreditCardForm } from '../CreditCardForm/CreditCardForm';
import { Button } from '../UI/Button/Button';

export const Payment = () => {


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
                <Button type='secondary'>Cancel</Button>
                <Button type='primary'>Confirm payment</Button>
            </div>
        </div>
    )
}