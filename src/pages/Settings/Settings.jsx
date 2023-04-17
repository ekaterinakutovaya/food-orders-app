import React from 'react';
import { SettingsNavigation } from '@/components';

import "./Settings.scss";
import { ProductsManagement } from '@/components';


export const Settings = () => {
    return (
        <section className="settings">
            <SettingsNavigation/>
            
            <div className="settings__content">
                <ProductsManagement/>
            </div>
           
        </section>
    );
};
