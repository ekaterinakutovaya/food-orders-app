import React, { useState, useEffect } from 'react';

import './PaymentMethodOptions.scss';
import { SvgSelector } from '../../assets/icons/SvgSelector';

export const PaymentMethodOptions = () => {


    return (
        <ul className="payment-method-options">
        
            <li className='payment-method__item active'>
                <input type="radio" id="creditCardRadio"/>
                <label htmlFor="creditCardRadio">
                    <SvgSelector id="credit-card"/>
                    <p>Credit Card</p>
                    <span className='checkmark'><SvgSelector id="checkmark"/></span>
                </label>
                
            </li>

            <li className='payment-method__item'>
            <input type="radio" id="paypalRadio"/>
                <label htmlFor="paypalRadio">
                    <SvgSelector id="paypal"/>
                    <p>Paypal</p>
                </label>
            </li>

            <li className='payment-method__item'>
            <input type="radio" id="cashRadio"/>
                <label htmlFor="cashRadio">
                    <SvgSelector id="cash"/>
                    <p>Cash</p>
                </label>
            </li>
        </ul>
    )
}