import ToggleBackground from "../../elements/ToggleBackground/ToggleBackground"
import { HeaderLinks,HeaderImageLinks } from "./data"

const Header:React.FC = () => {
  return (
    <header className="hidden max-w-265.5 h-16 rounded-full border-black mx-auto border-2 mt-8 md:flex bg-linear-to-r from-light-gray via-medium-gray to-light-gray px-16 shadow-2xl">
      <ul className="w-10/12 h-full inline-flex items-center justify-between">
        {
          HeaderLinks.map((link)=>(
           <li key={link.name}>
            <a className="text-tittle-blue font-bold">{link.name}</a>
           </li>
         ))
        }
      </ul>
      <ul className="flex-1 flex items-center justify-between ml-10">
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
