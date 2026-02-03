import { ReactNode } from "react";


interface menu_links_type {
    title : string,
    link : string,
    icon? : string | ReactNode
}



export const  Menu_Bar :menu_links_type[] = [
    {
        title : "Home",
        link : "/"
    },
     {
        title : "Services",
        link : "/services"
    },
     {
        title : "About Us",
        link : "/about"
    },
     {
        title : "Contact Us",
        link : "/contact"
    },
]