import React, { useState } from 'react';

import "./Settings.scss";
import { ProductsManagement, SettingsNavigation, Appearance, YourRestaurant, NotificationsSettings, Security, AboutUs } from '@/components';

export const Settings = () => {
    const [activeLink, setActiveLink] = useState(2);
    const [navigation, setNavigation] = useState([
        { index: 0, title: "Appearance", subtitle: "Dark and Light mode, Font size", to: "/settings/appearance", iconId: 'heart', isActive: false, element: <Appearance /> },
        { index: 1, title: "Your Restaurant", subtitle: "Dark and Light mode, Font size", to: "/settings/your-restaurant", iconId: 'store', isActive: false, element: <YourRestaurant /> },
        { index: 2, title: "Product Management", subtitle: "Manage your product, pricing, etc", to: "/settings/products-management", iconId: 'discount', isActive: true, element: <ProductsManagement /> },
        { index: 3, title: "Notifications", subtitle: "Customize your notifications", to: "/settings/notifications", iconId: 'notification', isActive: false, element: <NotificationsSettings /> },
        { index: 4, title: "Security", subtitle: "Configure Password, PIN, etc", to: "/settings/security", iconId: 'lock', isActive: false, element: <Security /> },
        { index: 5, title: "About Us", subtitle: "Find out more about Posly", to: "/settings/about-us", iconId: 'exclamation', isActive: false, element: <AboutUs /> }
    ])

    const changeActiveLinkHandler = (index) => {
        setActiveLink(index);
        const navList = navigation;
        const removeActive = navList.map((item) => ({ ...item, isActive: false }))
        setNavigation(removeActive);

        const changeActiveLink = removeActive.map((item) => (
            item.index === activeLink ? { ...item, isActive: !item.isActive } : item
        ))
        setNavigation(changeActiveLink);
    }


    return (
        <section className="settings">
            <SettingsNavigation
                items={navigation}
                activeLink={activeLink}
                setActiveLink={changeActiveLinkHandler} />

            <div className="settings__content">
                {navigation[activeLink].element}
            </div>

        </section>
    );
};
