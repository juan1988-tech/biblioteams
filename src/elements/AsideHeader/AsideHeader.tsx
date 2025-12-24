import { Link } from "react-router-dom";
import ToggleBackground from "../ToggleBackground/ToggleBackground";
import { useEffect, useState } from "react";
import { useToggleHeader } from "../../store/useToggleHeader";

type LinksAsideHeader = {
    link:string,
    name:string
}

const LinksHeaderSet:LinksAsideHeader[] = [ 
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

type LinksAsideImageHeader = {
    link:string,
    src:string,
    alt:string,
}

const LinksImageHeader:LinksAsideImageHeader[] = [
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

type AsideHeaderProps = "w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-20 fixed top-0 left-0 transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3"
| "w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-20 fixed top-0 left-[-50%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3 max-cellphone-hor:left-[-70%]"

const AsideHeader:React.FC= () => {  
  //importar la variable de estado de Zustand
  const toggleHeader = useToggleHeader((state)=>state.toggleHeader);  
  const [asideClassName,setAsideClassName] = useState<AsideHeaderProps>("w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-20 fixed top-0 left-[-50%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3 max-cellphone-hor:left-[-70%]")  

  useEffect(()=>{
    ((toggleHeader===true)
    ?setAsideClassName("w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-20 fixed top-0 left-0 transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3")
    :setAsideClassName("w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-20 fixed top-0 left-[-50%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3 max-cellphone-hor:left-[-70%]"))
  },[toggleHeader])

  return (
    <section className={asideClassName}>
        <header className="flex flex-col w-40 h-auto mt-16 max-cellphone-hor:mt-12">
        <h1 className="text-font-h1-32 text-tittle-blue font-bold text-center max-cellphone:text-font-h3-24">Biblioteams</h1>
        <ul className="flex flex-col">
         {
            LinksHeaderSet.map((link)=>(
                <li key={link.link} className="mt-8 text-center max-cellphone:mt-4 ">
                    <Link to={link.link} className="font-black text-font-p text-center">{link.name}</Link>
                </li>
            ))
         }
        </ul>
        <ToggleBackground classToggleName="relative w-11.5 h-6 rounded-full border-2 border-black mx-auto mt-8"/>
         <ul className="flex mt-8">
         {
            LinksImageHeader.map((link)=>(
                 <li key={link.src} className="w-6 h-6 rounded-full">
                      <a className="block w-full h-full cursor-pointer text-center" href={link.link} target="_blank">
                          <img alt={link.alt} src={link.src}/>
                      </a>
                </li>
            ))
         }
         </ul>
        </header>
    </section>
  )
}

export default AsideHeader
