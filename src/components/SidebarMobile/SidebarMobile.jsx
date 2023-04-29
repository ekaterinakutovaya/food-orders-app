import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import "./SidebarMobile.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const SidebarMobile = ({ items }) => {
  const { cart } = useSelector(state => state.cart);
  console.log(cart.length);


  return (
    <aside className="sidebar-mobile">

      <div className="sidebar-mobile__inner">

        <div className="sidebar-mobile-nav-wrapper">
          <nav className="sidebar-mobile-nav">
            {items.map((item, index) => (
              <NavLink
                to={item.to}
                key={index}
                className={({ isActive }) => `${isActive ? 'sidebar-mobile-nav__item active' : 'sidebar-mobile-nav__item'}`}
              >
                <div className="sidebar-mobile-nav__link">
                  <div className="sidebar-mobile-nav__icon">
                    <SvgSelector id={item.iconId} />
                  </div>
                  <span
                    className={item.iconId == 'shopping-cart' && cart.length > 0 ? "quantity-badge" : "quantity-badge hidden"}
                  >
                    {cart.length}
                  </span>
                </div>

              </NavLink>
            ))}
          </nav>
        </div>

        {/* <button className='logout'>
          <SvgSelector id="logout" />
        </button> */}
      </div>

    </aside>
  );
};