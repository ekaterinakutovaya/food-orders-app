import React from 'react';

import "./CartPage.scss";
import { Cart, CartMobile } from '../../components';

export const CartPage = () => {
    return (
        <div className="cart-page">
            {/* <Cart/> */}
            <CartMobile/>
        </div>
    );
};
