import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";

import "./MostTypeofOrder.scss";
import { Dropdown, RadialChart } from '@/components';
import { timeRange } from "@/utils/constants";
import { data } from "@/data/db";

export const MostTypeofOrder = () => {
    const { mostTypeOfOrdered} = data;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState('');
    const [selectedTimeRange, setSelectedTimeRange] = useState(0);
    const [filteredData, setFilteredData] = useState({});

    /* ***Dev with json-server*** */
    // const { isLoading, error, data } = useQuery(
    //     ['mostTypeOfOrdered'],
    //     () =>
    //         fetch(`http://localhost:3000/mostTypeOfOrdered`)
    //             .then((response) => response.json())
    // );
    
    // useEffect(() => {
    //     setDropdownLabel(prevState => timeRange.filter(t => t.index === selectedTimeRange)[0].label)
    //     data && setFilteredData(Object.values(data[0])[0]);

    // }, [data])

    // const selectTimeRange = (e) => {
    //     let idx = Number(e.currentTarget.dataset.index);
    //     setDropdownLabel(prevState => timeRange.filter(t => t.index === idx)[0].label);
    //     setFilteredData(Object.values(data[0])[idx])
    //     setDropdownOpen(false);
    // }

    useEffect(() => {
        setDropdownLabel(prevState => timeRange.filter(t => t.index === selectedTimeRange)[0].label)
        mostTypeOfOrdered && setFilteredData(Object.values(mostTypeOfOrdered[0])[0]);

    }, [mostTypeOfOrdered])

    const selectTimeRange = (e) => {
        let idx = Number(e.currentTarget.dataset.index);
        setDropdownLabel(prevState => timeRange.filter(t => t.index === idx)[0].label);
        setFilteredData(Object.values(mostTypeOfOrdered[0])[idx])
        setDropdownOpen(false);
    }


    return (
        <div className="most-type-of-order">
            <div className="head">
                <h3 className="head__title">Most Type of Order</h3>

                <div className="most-type-of-order__dropdown">
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

            <div className="most-type-of-order__chart">
                {filteredData && <RadialChart data={filteredData} />}
                
            </div>
        </div>
    );
};
