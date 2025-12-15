import ToggleBackground from "../../elements/ToggleBackground/ToggleBackground";
import { HeaderLinks,HeaderImageLinks } from "./data";
import { Link } from "react-router-dom";

const Header:React.FC = () => {
  return (
    <header className="max-tablet-hor:hidden  max-w-265.5 h-16 rounded-full border-black border-2 flex bg-linear-to-r from-light-gray via-medium-gray to-light-gray px-14 shadow-2xl sticky top-4 mx-auto">
      <ul className="w-10/12 h-full inline-flex items-center justify-between">
        {
          HeaderLinks.map((link)=>(
           <li key={link.name}>
            <Link to={link.link} className="text-tittle-blue font-bold">{link.name}</Link>
           </li>
         ))
        }
      </ul>
      <ul className="flex items-center justify-between w-28 ml-10">
            <ToggleBackground/>
            {
              HeaderImageLinks.map((link)=>(
                  <li key={link.src} className="w-6 h-6 rounded-full">
                      <a className="block w-full h-full cursor-pointer" href={link.link} >
                          <img alt={link.alt} src={link.src}/>
                      </a>
                  </li>
                ))
            }
      </ul>  
    </header>
  )
}

export default Header
