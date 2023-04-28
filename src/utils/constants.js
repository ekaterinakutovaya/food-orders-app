export const API_URL = "http://localhost:3000";

export const adminNavigation = [
    
    { title: "Discount", to: '/discount', iconId: 'discount', isActive: false },
    { title: "Dashboard", to: '/dashboard', iconId: 'graph', isActive: false },
    // { title: "Messages", to: '/messages', iconId: 'message', isActive: false },
    { title: "Home", to: '/home', iconId: 'home', isActive: true },
    { title: "Notifications", to: '/notifications', iconId: 'notification', isActive: false },
    { title: "Settings", to: '/settings', iconId: 'settings', isActive: false }
]

export const userNavigation = [
    { title: "Home", to: '/home', iconId: 'home', isActive: true },
    { title: "Discount", to: '/discount', iconId: 'discount', isActive: false },
    { title: "Messages", to: '/messages', iconId: 'message', isActive: false },
    { title: "Notifications", to: '/notifications', iconId: 'notification', isActive: false }
]

export const settingsNavigation = [
    { index: 0, title: "Appearance", subtitle: "Dark and Light mode, Font size", to: "/settings/appearance", iconId: 'heart', isActive: true, element: '<Appearance />'},
    { index: 1, title: "Your Restaurant", subtitle: "Dark and Light mode, Font size", to: "/settings/your-restaurant", iconId: 'store', isActive: false, element: '<YourRestaurant />'},
    { index: 3, title: "Product Management", subtitle: "Manage your product, pricing, etc", to: "/settings/products-management", iconId: 'discount', isActive: false, element: '<ProductsManagement />'},
    { index: 4, title: "Notifications", subtitle: "Customize your notifications", to: "/settings/notifications", iconId: 'notification', isActive: false, element: '<Notifications />'},
    { index: 5, title: "Security", subtitle: "Configure Password, PIN, etc", to: "/settings/security", iconId: 'lock', isActive: false, element: '<Security />'},
    { index: 6, title: "About Us", subtitle: "Find out more about Posly", to: "/settings/about-us", iconId: 'exclamation', isActive: false, element: '<AboutUs />'},
]

export const categories = [
    {index: 0, label: "Hot dishes", isActive: true},
    {index: 1, label: "Cold dishes", isActive: false},
    {index: 2, label: "Soup", isActive: false},
    {index: 3, label: "Grill", isActive: false},
    {index: 4, label: "Appetizer", isActive: false},
    {index: 5, label: "Dessert", isActive: false}
]

export const types = [
    {index: 0, label: 'Dine In', isActive: true},
    {index: 1, label: 'To Go', isActive: false},
    {index: 2, label: 'Delivery', isActive: false},
]

export const timeRange = [
    { index: 0, label: 'Today', isActive: true },
    { index: 1, label: 'Week', isActive: false },
    { index: 2, label: 'Month', isActive: false },
]

export const dishes = [
    { id: 1, title: 'Spicy seasoned seafood noodles', image: 'images/dish001.png', price: '2.29', available: 20, categoryIdx: 0, typeIdx: 0},
    { id: 2, title: 'Salted Pasta with mushroom sauce', image: 'images/dish002.png', price: '2.69', available: 11, categoryIdx: 0, typeIdx: 1},
    { id: 3, title: 'Beef dumpling in hot and sour soup', image: 'images/dish003.png', price: '2.99', available: 16, categoryIdx: 0, typeIdx: 2},
    { id: 4, title: 'Healthy noodle with spinach leaf', image: 'images/dish004.png', price: '3.29', available: 16, categoryIdx: 1, typeIdx: 0},
    { id: 5, title: 'Hot spicy fried rice with omelet', image: 'images/dish005.png', price: '3.49', available: 13, categoryIdx: 1, typeIdx: 2},
    { id: 6, title: 'Spicy instant noodle with special omelette', image: 'images/dish006.png', price: '3.59', available: 17, categoryIdx: 2, typeIdx: 1},
    { id: 7, title: 'Spicy seasoned seafood noodles', image: 'images/dish001.png', price: '2.29', available: 20, categoryIdx: 0, typeIdx: 0},
    { id: 8, title: 'Salted Pasta with mushroom sauce', image: 'images/dish002.png', price: '2.69', available: 11, categoryIdx: 0, typeIdx: 1},
    { id: 9, title: 'Beef dumpling in hot and sour soup', image: 'images/dish003.png', price: '2.99', available: 16, categoryIdx: 0, typeIdx: 2},
    { id: 10, title: 'Healthy noodle with spinach leaf', image: 'images/dish004.png', price: '3.29', available: 16, categoryIdx: 1, typeIdx: 0},
    { id: 11, title: 'Hot spicy fried rice with omelet', image: 'images/dish005.png', price: '3.49', available: 13, categoryIdx: 1, typeIdx: 2},
    { id: 12, title: 'Spicy instant noodle with special omelette', image: 'images/dish006.png', price: '3.59', available: 17, categoryIdx: 2, types: '0,1,2'},
]

export const summary = {
    revenue: [{
        headIcon: 'coin',
        statusFigure: '32.40',
        statusIcon: '',
        total: '$10,243.00',
        name: 'Total Revenue',
        direct: 'up'
    }],
    dishesOrdered: [{
        headIcon: 'bookmark',
        statusFigure: '12.40',
        statusIcon: '',
        total: '23,456',
        name: 'Total Dish Ordered',
        direct: 'down'
    }],
    totalCustomers: [{
        headIcon: 'customers',
        statusFigure: '2.40',
        statusIcon: '',
        total: '1,234',
        name: 'Total Cusomers',
        direct: 'up'
    }]

}

export const statuses = [
    { index: 0, label: 'Preparing', classname: 'blue' },
    { index: 1, label: 'Pending', classname: 'orange' },
    { index: 2, label: 'Completed', classname: 'green' },
]

