import React, { useEffect } from 'react';

import "./SettingsNavigation.scss";
import { SvgSelector } from "../../assets/icons/SvgSelector";

export const SettingsNavigation = ({ activeLink, setActiveLink, items }) => {
  
  return (
    <div className="settings-nav__wrapper">
      <ul className="settings-nav">

        {items.map(item => (
          <li 
          className={`${item.index == activeLink ? "settings-nav__item active" : "settings-nav__item"}`}
          key={item.index}
            index={item.index}
            onClick={() => setActiveLink(item.index)}
          >
            
            <div className="settings-nav__link">
              <SvgSelector id={item.iconId} />
              <div className="settings-nav__desc">
                <h5 className="settings-nav__title">{item.title}</h5>
                <p className="settings-nav__subtitle">{item.subtitle}</p>
              </div>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};
