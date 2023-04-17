import React, { useState, useEffect } from 'react';

import './Options.scss';

export const Options = () => {


    return (
        <div className='options'>
             <div className="option__btn active">
                <input className='option__input' type="radio" id="radio-1"/>
                <label className='option__label' htmlFor="radio-1">Dine In</label>
             </div>

             <div className="option__btn">
                <input className='option__input' type="radio" id="radio-1"/>
                <label className='option__label' htmlFor="radio-1">To Go</label>
             </div>

             <div className="option__btn">
                <input className='option__input' type="radio" id="radio-1"/>
                <label className='option__label' htmlFor="radio-1">Delivery</label>
             </div>
        </div>
    )
}