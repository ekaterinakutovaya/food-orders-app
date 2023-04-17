export const adminNavigation = [
    { name: "Home", to: '/', iconId: 'home', isActive: true },
    { name: "Discount", to: '/discount', iconId: 'discount', isActive: false },
    { name: "Dashboard", to: '/dashboard', iconId: 'home', isActive: false },
    { name: "Email", to: '/email', iconId: 'home', isActive: false },
    { name: "Notifications", to: '/notifications', iconId: 'home', isActive: false },
    { name: "Settings", to: '/settings', iconId: 'home', isActive: false }
]

export const userNavigation = [
    { name: "Home", to: '/', iconId: 'home', isActive: true },
    { name: "Discount", to: '/discount', iconId: 'discount', isActive: false },
    { name: "Notifications", to: '/notifications', iconId: 'home', isActive: false }
]

export const settingsNavigation = [
    { title: "Appearance", subtitle: "Dark and Light mode, Font size", to: "#", iconId: 'heart', isActive: true},
    { title: "Your Restaurant", subtitle: "Dark and Light mode, Font size", to: "#", iconId: 'store', isActive: false},
    { title: "Product Management", subtitle: "Manage your product, pricing, etc", to: "#", iconId: 'discount', isActive: false},
    { title: "Notifications", subtitle: "Customize your notifications", to: "#", iconId: 'notification', isActive: false},
    { title: "Security", subtitle: "Configure Password, PIN, etc", to: "#", iconId: 'lock', isActive: false},
    { title: "About Us", subtitle: "Find out more about Posly", to: "#", iconId: 'exclamation', isActive: false},
]

export const categories = [
    {index: 0, label: "Hot dishes", isActive: true},
    {index: 1, label: "Cold dishes", isActive: false},
    {index: 2, label: "Soup", isActive: false},
    {index: 3, label: "Grill", isActive: false},
    {index: 4, label: "Appetizer", isActive: false},
    {index: 5, label: "Dessert", isActive: false}
]