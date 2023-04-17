import React, { useState, useEffect } from 'react';

import './Modal.scss';

export const Modal = ({children}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="modal">
            {children}
        </div>
    )
}