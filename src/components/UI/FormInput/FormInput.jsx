import React, { useState, useEffect } from 'react';

import './FormInput.scss';

export const FormInput = ({label, value, type}) => {

    return (
        <div className='form-input'>
            <label htmlFor="">{label}</label>
            <input className='input' type={type} />
        </div>
    )
}