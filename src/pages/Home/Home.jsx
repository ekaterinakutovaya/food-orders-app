import React from 'react';

import "./Home.scss";
import { Dishes, Cart, SearchInput, Tabs} from '@/components';
import { categories } from '@/utils/constants';

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