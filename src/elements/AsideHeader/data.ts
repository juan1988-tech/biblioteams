import type { LinksAsideHeader,LinksAsideImageHeader } from "./types";

export const LinksHeaderSet:LinksAsideHeader[] = [ 
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

export const LinksImageHeader:LinksAsideImageHeader[] = [
     {
        link:"https://www.facebook.com/jdfranco1988?locale=es_LA",
        src:"/assets/logos_facebook.svg",
        alt:"Facebook-link"
    },
    {
        link:"https://www.instagram.com/jfrancoh1988/",
        src:"/assets/instagram.svg",
        alt:"Instagram-link"
    }
]