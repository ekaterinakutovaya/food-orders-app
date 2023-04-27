import React from 'react';

import "./Filter.scss";
import { SvgSelector } from '@/assets/icons/SvgSelector';


export const Filter = () => {


    return (
        <div className='filter'>
            <div className="filter__head">
                <SvgSelector id='filter' />
                Filter Order
            </div>

            <ul className="filter__list">
                <li className="filter__item">
                    <ul className="filter__sublist">
                        <li className="filter__subitem">
                            <input type="checkbox" id="status" className="filter__checkbox" />
                            <label htmlFor="status" className="filter__checkbox-label">Status</label>
                        </li>
                    </ul>
                </li>

                <li className="filter__item">
                    <ul className="filter__sublist">
                        <li></li>
                    </ul>
                </li>
            </ul>


            {statuses.map((stasus) => (
                <li className="filter__subitem" key={stasus.index}>
                    <label htmlFor="status">
                        {/* <input type="checkbox" id="status" /> Preparing */}
                        <CustomCheckbox stasus={stasus} changeChecked={statusChangeChecked} />
                    </label>
                </li>
            ))}
        </div>
    );
};