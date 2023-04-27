import React, { useState, useEffect, useRef } from 'react';

import './Dropdown.scss';
import { SvgSelector } from '../../../assets/icons/SvgSelector';

export const Dropdown = ({ items, onClick, visible, setVisible, label }) => {
  const ref = useRef(null);


  const toggleList = () => {
    setVisible(prevVisible => !prevVisible);
  }


  useEffect(() => {
    document.addEventListener('click', globalClickListener);

    return () => {
      document.removeEventListener('click', globalClickListener);
    }
  }, [visible])

  const globalClickListener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  }

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown__input" onClick={() => toggleList()}>
        {visible ? <SvgSelector id="chevron-up" /> : <SvgSelector id="chevron-down" />}

        {label}
      </div>

      {visible ? (
        <ul className="dropdown__list">
          {items && items.map((item, index) => (
            <li
              key={index}
              className="dropdown__item"
              data-index={index}
              onClick={onClick}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : ''}


    </div>
  )
}