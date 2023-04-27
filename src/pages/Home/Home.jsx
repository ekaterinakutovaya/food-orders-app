import React from 'react';

import "./Home.scss";
import { SvgSelector } from '../../assets/icons/SvgSelector';
import { Dishes, Cart, SearchInput, Tabs, Modal, Payment } from '@/components';
import { categories } from '../../utils/constants';

export const Home = () => {


    return (
        <section className='home'>
            <div className="home__main">
                <div className="home__main-search">
                    <SearchInput />
                </div>


                <div className="home__content">
                    <Tabs tabs={categories} />

                    <Dishes />
                </div>
            </div>

            <Cart />

        </section>
    );
};