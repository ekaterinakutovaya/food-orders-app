import React from 'react';

import './SearchInput.scss';
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const SearchInput = () => {
    return (
        <div className='search'>
            <input type="text" 
                className='search__input input'
                placeholder='Search for food, coffee, etc..'
            />
            <div className='search__icon'><SvgSelector id="search"/></div>
        </div>
    );
};