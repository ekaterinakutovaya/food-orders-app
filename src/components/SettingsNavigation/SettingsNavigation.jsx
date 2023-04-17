import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import "./SettingsNavigation.scss";
import { SvgSelector } from "../../assets/icons/SvgSelector";
import { settingsNavigation } from "@/utils/constants";

export const SettingsNavigation = () => {

  useEffect(() => {
    settingsNavigation.map(item => {
      console.log(item.isActive);
      
    })
  }, [])

  const idleLink = 'settings-nav__link';
  const activeLink = 'settings-nav__link active';

  return (
    <nav className="settings-nav">
      <ul className="settings-nav__list">

        {settingsNavigation && settingsNavigation.map(item => (
          <li className="settings-nav__item" key={item.title}>
            <NavLink to={item.to}
              className={item.isActive ? 'settings-nav__link active' : 'settings-nav__link'}
            >

              <SvgSelector id={item.iconId} />
              <div className="settings-nav__desc">
                <h5 className="settings-nav__title">{item.title}</h5>
                <p className="settings-nav__subtitle">{item.subtitle}</p>
              </div>

            </NavLink>
          </li>
        ))}

        {/* <li className="settings-nav__item">
          <NavLink to="#" className="settings-nav__link active">

            <SvgSelector id="heart" />
            <div className="settings-nav__desc">
              <h5 className="settings-nav__title">Appearance</h5>
              <p className="settings-nav__subtitle">Dark and Light mode, Font size</p>
            </div>

          </NavLink>
        </li> */}

      </ul>
    </nav>
  );
};
