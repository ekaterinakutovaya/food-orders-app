import React from 'react';
import { MostOrderedItem, Button } from '@/components';

import "./MostOrdered.scss";

export const MostOrdered = () => {
    return (
        <div className="most-ordered">
            <div className="head">
                <h3 className="head__title">Most Ordered</h3>

                Dropdown

            </div>

            <div className="line"></div>

            <MostOrderedItem />
            <MostOrderedItem />
            <MostOrderedItem />

            <Button type="secondary">View All</Button>

        </div>
    );
};
