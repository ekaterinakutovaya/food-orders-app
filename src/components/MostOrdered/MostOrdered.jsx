import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";

import "./MostOrdered.scss";
import { MostOrderedItem, Button, Dropdown } from '@/components';
import { timeRange } from "@/utils/constants";

export const MostOrdered = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState('');
    const [selectedTimeRange, setSelectedTimeRange] = useState(0);

    const [mostOrdered, setMostOrdered] = useState({});

    const { isLoading, error, data } = useQuery(
        ['mostOrdered'],
        () =>
            fetch(`http://localhost:3000/mostOrdered`)
                .then((response) => response.json())
    );


    useEffect(() => {
        setDropdownLabel(prevState => timeRange.filter(t => t.index === selectedTimeRange)[0].label)        
        data && setMostOrdered(Object.values(data[0])[0]);

    }, [data])

    

    const selectTimeRange = (e) => {
        let idx = Number(e.currentTarget.dataset.index);
        setDropdownLabel(prevState => timeRange.filter(t => t.index === idx)[0].label);
        setMostOrdered(Object.values(data[0])[idx])
        setDropdownOpen(false);
    }

    return (
        <div className="most-ordered">
            <div className="head">
                <h3 className="head__title">Most Ordered</h3>

                <div className="most-ordered__dropdown">
                    <Dropdown
                        items={timeRange}
                        onClick={selectTimeRange}
                        visible={dropdownOpen}
                        setVisible={setDropdownOpen}
                        label={dropdownLabel}
                    />
                </div>

            </div>

            <div className="line"></div>

            <div className="most-ordered__content">
                {mostOrdered.length && mostOrdered.map(item => (
                    <MostOrderedItem key={item.id} item={item}/>
                ))}

                
            </div>

            <Button type="secondary">View All</Button>

        </div>
    );
};
