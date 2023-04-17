import React, { useState, useEffect } from 'react';

import './CreditCardForm.scss';
import { FormInput } from '../UI/FormInput/FormInput';

export const CreditCardForm = () => {


    return (
        <form className="credit-card-form">
           <FormInput label={'Cardholder Name'} value={'Levi Ackerman'} type="text"/>
           <FormInput label={'Card Number'} value={'2564 1421 0897 1244'} type="text"/>

           <div className='flex-space-between column-gap-12'>
           <FormInput label={'Expiration Date'} value={'02/2022'} type="date"/>
           <FormInput label={'CVV'} value={'***'} type="password"/>
           </div>

           <div className='line'></div>

           <div className='flex-space-between column-gap-12'>
           <FormInput label={'Order Type'} value={''} type="text"/>
           <FormInput label={'Table no'} value={''} type="text"/>
           </div>
        </form>
    )
}