import type { HeaderProps,HeaderImageProps } from "./types";
import facebookIcon from '/public/instagram.svg'



export const HeaderLinks:HeaderProps[] =[
    {
        link:"/",
        name:"Inicio"
    },
    {
        link:"/cathalog",
        name:"Catálogo"
    },
    {
        link:"/log-in",
        name:"Ingresa"
    },
    {
        link:"/register",
        name:"Regístrate"
    }
]

export const HeaderImageLinks:HeaderImageProps[] = [
    {
        link:"https://www.facebook.com/jdfranco1988?locale=es_LA",
        src:"/public/logos_facebook.svg",
        alt:"Facebook-link"
    },
    {
        link:"https://www.instagram.com/jfrancoh1988/",
        src:"/public/instagram.svg",
        alt:"Instagram-link"
    }
]