import type { HeaderProps,HeaderImageProps } from "./types";

export const HeaderLinks:HeaderProps[] =[
    {
        link:"/",
        name:"Inicio"
    },
    {
        link:"/catalogo",
        name:"Catálogo"
    },
    {
        link:"/ingresa",
        name:"Ingresa"
    },
    {
        link:"/registrate",
        name:"Regístrate"
    }
]

export const HeaderImageLinks:HeaderImageProps[] = [
    {
        link:"https://www.facebook.com/jdfranco1988?locale=es_LA",
        src:"/src/assets/logos_facebook.svg",
        alt:"Facebook-link"
    },
    {
        link:"https://www.instagram.com/jfrancoh1988/",
        src:"/src/assets/instagram.svg",
        alt:"Instagram-link"
    }
]