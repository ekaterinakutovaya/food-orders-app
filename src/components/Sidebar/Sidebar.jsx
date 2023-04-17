import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Sidebar.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const Sidebar = ({items}) => {
  // console.log(items);
  return (
    <aside className="sidebar">

      <div className="sidebar__inner">
        <div className="logo">
          <SvgSelector id="logo" />
        </div>

        <nav className="nav">
          <ul className="nav__list">
            {/* {navigation.map((item, index) => (
              <li className="nav__item active" key={index}>
                <NavLink to={item.to} className="nav__link">
                  <SvgSelector id={item.iconId} />
                </NavLink>
              </li>
            ))} */}

            <li className='nav__item active'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="home" />
              </NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="discount" />
              </NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="graph" />
              </NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="message" />
              </NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="notification" />
              </NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/" className="nav__link">
              <SvgSelector id="settings" />
              </NavLink>
            </li>

          </ul>
        </nav>

        <button className='logout'>
          <SvgSelector id="logout" />
        </button>
      </div>

    </aside>
  );
};