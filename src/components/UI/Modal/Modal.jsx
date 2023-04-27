import React, { useState, useEffect } from 'react';

import './Modal.scss';

export const Modal = ({children}) => {

    return (
        <div className="modal">
            {children}
        </div>
    )
}