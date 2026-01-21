import { useState, useEffect } from "react";
import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";
import { useLocation } from "react-router-dom";
import { classNamesChatalog,classNameHome } from "./data";
import type { classNameCathalogSearch } from "./types"


const CathalogSerachBar:React.FC<FormCathalogProps> = ({placeholder}) => {
  const [selector,setSelector] = useState<boolean>(false);
  const [searcherValue,setSearcherValue] = useState<string>('title');
  const [indicatorValue,setIndicatorValue] = useState<string>('Título');
  const { pathname }  = useLocation();
  const [classNameSearchBar,setClassNameSearchBar] = useState<classNameCathalogSearch>(classNameHome);
  const [classNameSelector,setClassNameSelector] = useState<boolean>(false);

  const handleChangeSelector = (e:React.MouseEvent) =>{
      e.preventDefault();
        setSelector(!selector);
  }

  const onCloseSearcher = () =>{
    if(selector===true){
      setSelector(false)
    }
  }

  const handleSearchValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setSearcherValue(e.target.value)
   }

  useEffect(()=>{
    //declaración switch para modificar el indicador de parámetro de búsqueda
    switch (searcherValue) {
      case "title":
        setIndicatorValue("Título")  
        break;
      case "author":
        setIndicatorValue("Autor")  
        break;
      case "topics":
        setIndicatorValue("Tema(s)")  
        break;
      case "availability":
        setIndicatorValue("Disponibilidad")  
        break;
    }

    //declaración de clases de acuerdo a la url
    if(pathname==="/catalogo"){
        setClassNameSearchBar(classNamesChatalog);
    }else{
      setClassNameSearchBar(classNameHome);
    }
  },[searcherValue])

  useEffect(()=>{
     //declaración de clases para el evento hover del botón
    if(classNameSelector===true && pathname==="/catalogo"){
      setClassNameSearchBar({...classNamesChatalog,
        classNameButton: classNameHome.classNameButton,
        imageSrc: classNameHome.imageSrc
      });
    }else{
      setClassNameSearchBar({...classNamesChatalog,
        classNameButton: classNamesChatalog.classNameButton,
        imageSrc: classNamesChatalog.imageSrc
      });
    }
  },[classNameSelector])

  return (
     <section className="flex flex-col w-full"> 
     <form className={classNameSearchBar.clasNameForm}>
       <input type="text" className={classNameSearchBar.classNameInput} placeholder={placeholder}/>
       <section className="flex"> 
        <ButtonCathalogSearch onClickEvent={handleChangeSelector}/>
        <button className={classNameSearchBar.classNameButton} 
          onClick={onCloseSearcher}
          onMouseOver={()=>setClassNameSelector(true)}
          onMouseLeave={()=>setClassNameSelector(false)}>
          <img className="w-4 h-4 transition-colors duration-400" src={classNameSearchBar.imageSrc} alt="Buscar libro"/>
        </button>
        </section>
      {
        selector?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className={classNameSearchBar.classNameOutput}>
       <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
       <p className="ml-1">{indicatorValue}</p>
     </article>
     </section>
  )
}

export default CathalogSerachBar
