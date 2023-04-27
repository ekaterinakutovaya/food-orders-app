import React, { useState, useEffect, useRef, useCallback } from 'react';
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

import './SearchInput.scss';
import { SvgSelector } from '@/assets/icons/SvgSelector';
import { setSearchValue } from "../../../store/FilterSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const searchRef = useRef();

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 300),
        [],
    );
    
    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value.toLowerCase());
    }

    const clearInput = () => {
        dispatch(setSearchValue(""));
        setValue("");
        searchRef.current.focus();
    }

    return (
        <div className='search'>
            <input type="search"
                className='search__input input'
                placeholder='Search for food, coffee, etc..'
                ref={searchRef}
                value={value}
                onChange={onChangeInput}
            />
            {/* <div className='search__placeholder'>
                <SvgSelector id="search" />
                <span>Search for food, coffee, etc..</span>
            </div> */}

            {value && (
                <button type="button" onClick={clearInput} className="times-btn">
                    <IoClose/>
                </button>
            )}
        </div>
    );
};