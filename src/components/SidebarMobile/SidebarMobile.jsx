import React from 'react';
import { NavLink } from 'react-router-dom';

import "./SidebarMobile.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const SidebarMobile = ({ items }) => {

  console.log(items);
  

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
                  <SvgSelector id={item.iconId} />
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