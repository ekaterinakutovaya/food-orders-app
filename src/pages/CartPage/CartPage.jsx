import React, { useEffect, useState } from 'react';

import "./CartPage.scss";
import { Cart, CartMobile } from '../../components';

export const CartPage = () => {
    const [vh, setVh] = useState(window.innerHeight);

    useEffect(() => {
        const hadnleResize = (e) => {
            setVh(e.target.innerHeight);
        }

        window.addEventListener('resize', hadnleResize);

        return () => {
            window.removeEventListener('resize', hadnleResize)
        }
    }, [])

    


    return (
        <div className="cart-page" style={{height: `${vh - 83 - 89}px`}}>
            {/* <Cart/> */}
            <CartMobile/>
        </div>
    );
};
