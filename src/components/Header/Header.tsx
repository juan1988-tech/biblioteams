import ToggleBackground from "../../elements/ToggleBackground/ToggleBackground"
import { HeaderLinks,HeaderImageLinks } from "./data"

const Header:React.FC = () => {
  return (
    <header className="hidden max-w-265.5 h-16 rounded-full border-black mx-auto border-2 mt-8 md:flex">
      <ul className="w-auto h-full inline-flex items-center px-8">
        {
          HeaderLinks.map((link)=>(
           <li key={link.name}>
            <a>{link.name}</a>
           </li>
         ))
        }
      </ul>
      <ul className="w-auto flex items-center">
            <ToggleBackground/>
            {
                HeaderImageLinks.map((link)=>(
                    <li key={link.src}>
                        <a>
                            <img alt={link.alt}/>
                        </a>
                    </li>
                ))
            }
      </ul>  
    </header>
  )
}

export default Header
