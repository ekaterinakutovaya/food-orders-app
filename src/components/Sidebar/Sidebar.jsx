import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Sidebar.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const Sidebar = ({ items }) => {

  return (
    <aside className="sidebar">

      <div className="sidebar__inner">
        <div className="logo">
          <SvgSelector id="logo" />
        </div>

        <div className="nav-wrapper">
          <nav className="nav">
            {items.map((item, index) => (
              <NavLink to={item.to} key={index}
                className={({ isActive }) => `${isActive ? 'nav__item active' : 'nav__item'}`}
              >
                <div className="nav__link">
                  <SvgSelector id={item.iconId} />
                </div>

              </NavLink>
            ))}
          </nav>
        </div>

        <button className='logout'>
          <SvgSelector id="logout" />
        </button>
      </div>

    </aside>
  );
};