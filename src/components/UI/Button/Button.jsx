import React, { useState, useEffect } from 'react';

import './Button.scss';

export const Button = ({ children, type, onClick }) => {


    return (
        <button className={`btn btn__${type}`} onClick={onClick}>
            {children}
        </button>
    )
}