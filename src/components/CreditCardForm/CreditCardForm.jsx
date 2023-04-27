import React, { useState, useEffect } from 'react';
import { PatternFormat, NumericFormat } from 'react-number-format';

import './CreditCardForm.scss';
import { FormInput, Dropdown } from '@/components';
import { types } from "@/utils/constants";

export const CreditCardForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState('Dine In');

    const selectType = (e) => {
        let idx = Number(e.currentTarget.dataset.index);
        setDropdownLabel(prevState => types.filter(type => type.index === idx)[0].label);
        setDropdownOpen(false);
    }

    return (
        <form className="credit-card-form">

            <div className='form-input'>
                <label htmlFor="">Cardholder Name</label>
                <input className='input' type="text" />
            </div>

            <div className='form-input'>
                <label htmlFor="">Card Number</label>
                <PatternFormat className="input" value="" valueIsNumericString format="#### #### #### ####" />
            </div>

           <div className='flex-space-between column-gap-12'>
                <div className='form-input'>
                    <label htmlFor="">Expiration Date</label>
                    <PatternFormat className="input" value="" valueIsNumericString format="## / ####" />
                </div>

                <div className='form-input'>
                    <label htmlFor="">CVV</label>
                    <input className="input" type="password" maxLength="3"/>
                </div>
           </div>

           <div className='line'></div>

            <div className='credit-card-form__order-info'>

                <div className="credit-card-form__order-type">
                    <label htmlFor="">Order Type</label>
                    <Dropdown
                        items={types}
                        onClick={selectType}
                        open={dropdownOpen}
                        setOpen={setDropdownOpen}
                        label={dropdownLabel}
                    />
                </div>

                <div className='credit-card-form__table-no form-input'>
                    <label htmlFor="">Table no.</label>
                    <input className="input" type="text" maxLength="3" />
                </div>
                
           </div>
        </form>
    )
}