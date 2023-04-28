import React from 'react';

import "./Dashboard.scss";
import { MostOrdered, MostTypeofOrder, OrderReport, Summary } from '../../components';


export const Dashboard = () => {


    return (
        <section className='dashboard'>
            <div className="dashboard__main">
                <Summary/>

                {/* <OrderReport/> */}
            </div>

            {/* <div className="dashboard__right-column">
                <MostOrdered/>

                <MostTypeofOrder/>
            </div> */}
        </section>
    );
};