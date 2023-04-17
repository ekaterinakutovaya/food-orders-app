import React, { useState, useEffect } from 'react';

import './Button.scss';

export const Button = ({children, type}) => {


    return (
             <button className={`btn btn__${type}`}>
                {children}
             </button>
    )
}