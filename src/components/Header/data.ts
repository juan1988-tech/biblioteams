import type { HeaderProps,HeaderImageProps } from "./types";

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
        src:"Facebook",
        alt:"Facebook-link"
    },
    {
        link:"https://www.instagram.com/jfrancoh1988/",
        src:"Instagram",
        alt:"Instagram-link"
    }
]