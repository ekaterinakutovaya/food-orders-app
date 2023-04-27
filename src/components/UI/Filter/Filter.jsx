import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { GrAscend, GrDescend } from "react-icons/gr";

import "./Filter.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';
import { CustomCheckbox } from '@/components';


export const Filter = ({ statuses, statusChangeChecked}) => {
    const [visible, setVisible] = useState(false)
    const filterRef = useRef(null);

    const toggleVisible = (e) => {
        e.stopPropagation();
        setVisible(prevVisible => !prevVisible);
    }

    useEffect(() => {
        document.addEventListener('click', globalClickListener)

        return () => {
            document.removeEventListener('click', globalClickListener);
        }
    }, [])

    const globalClickListener = (e) => {
        // console.log(e.target);
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            // console.log("global click");
            setVisible(false);
        }
    }

    return (
        <div className='filter' ref={filterRef} >
            <div className="filter__head" onClick={toggleVisible}>
                <SvgSelector id='filter' />
                Filter Order
            </div>

            <ul 
            className={visible ? `filter__list` : `filter__list hidden`}
            >
                <li className="filter__item">
                    <label htmlFor="btn-status" className="filter__item-label">Status
                        {/* <span><FiChevronDown /></span> */}
                        <FiChevronDown />
                    </label>
                    <input type="checkbox" id="btn-status" className="filter__list-btn" />
                    <ul className="filter__sublist">

                        {statuses.map((status) => (
                            <li className="filter__subitem" key={status.index}>
                                <label htmlFor="status">
                                    <CustomCheckbox status={status} changeChecked={statusChangeChecked} />
                                </label>
                            </li>
                        ))}
                        
                    </ul>
                </li>


            </ul>
        </div>
    );
};