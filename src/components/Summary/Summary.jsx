import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from "@/utils/constants";

import "./Summary.scss";
import { SummaryBadge } from '@/components';


export const Summary = () => {

    const revenue = {
        headIcon: 'coin',
        statusFigure: '32.40',
        statusIcon: '',
        total: '$10,243.00',
        name: 'Total Revenue',
        direct: 'up'
    }

    const dishesOrdered = {
        headIcon: 'bookmark',
        statusFigure: '12.40',
        statusIcon: '',
        total: '23,456',
        name: 'Total Dish Ordered',
        direct: 'down'
    }

    const totalCustomers = {
        headIcon: 'customers',
        statusFigure: '2.40',
        statusIcon: '',
        total: '1,234',
        name: 'Total Cusomers',
        direct: 'up'
    }

    return (
        <div className='summary'>
            <SummaryBadge data={revenue}/>
            <SummaryBadge data={dishesOrdered}/>
            <SummaryBadge data={totalCustomers}/>

        
        </div>
    );
};