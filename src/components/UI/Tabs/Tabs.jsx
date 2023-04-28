import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTab } from "@/store/FilterSlice";

import './Tabs.scss';

export const Tabs = ({tabs}) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const { category } = useSelector(state => state.filter);

    const activeClassName = 'tabs__link active';
    const idleClassName = 'tabs__link';

    useEffect(() => {
        setActiveTab(category);
    }, [])

    const onSelectTab = (index) => {
        setActiveTab(index);
        dispatch(setSelectedTab(index));
    };
    


    return (
            <div className="tabs-wrapper">
                <ul className='tabs'>
                    {tabs &&
                        tabs.map((tab, index) =>
                            <li
                                key={tab.index}
                                className={activeTab === index ? activeClassName : idleClassName}
                                onClick={() => onSelectTab(index)}
                            >
                                {tab.label}
                            </li>
                        )
                    }
                </ul>
            </div>
    )
}