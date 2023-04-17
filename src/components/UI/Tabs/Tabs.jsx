import React, { useState, useEffect } from 'react';

import './Tabs.scss';

export const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);


    return (
            <ul className='tabs'>
                {tabs &&
                    tabs.map((tab, index) =>
                        <li
                            key={tab.index}
                            className={tab.isActive === true ? 'tabs__link active' : 'tabs__link'}
                            // onClick={() => onSelectTab(index)}
                        >
                            {tab.label}
                        </li>
                    )
                }
            </ul>
    )
}