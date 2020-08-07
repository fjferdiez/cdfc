const menuData = {
    items: [
        {
            id: 1,
            name: "welcome", 
            path: "/",
            isHeader: true,
            position: "left",
            component: "MainPage"
        },
        {
            id: 2,
            name: "aboutUs", 
            path: "/about",
            isHeader: false,
            position: "left",
            component: "About"
        },
        {
            id: 3,
            name: "media", 
            path: "/media",
            isHeader: false,
            position: "left",
            component: "Media"
        },
        {
            id: 4,
            name: "concerts", 
            path: "/concerts",
            isHeader: false,
            position: "left",
            component: "Concerts"
        },
        {
            id: 5,
            name: "contactUs", 
            path: "/contact",
            isHeader: false,
            position: "right",
            component: "Contact"
        },

    ]
}

export default menuData;