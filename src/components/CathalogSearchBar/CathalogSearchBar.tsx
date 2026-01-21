import { useState, useEffect } from "react";
import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";
import { useLocation } from "react-router-dom";
import { classNamesChatalog,classNameHome } from "./data";
import type { classNameCathalogSearch } from "./types"
import { useCathalogSearchBar } from "./useCathalogSearchBar";

const CathalogSerachBar:React.FC<FormCathalogProps> = ({placeholder}) => {
  const { controlSelectorValues,handleChangeSelector,onCloseSearcher,handleSearchValue
   } = useCathalogSearchBar();
  
  const [indicatorValue,setIndicatorValue] = useState<string>('Título');
  const { pathname }  = useLocation();
  const [classNameSearchBar,setClassNameSearchBar] = useState<classNameCathalogSearch>(classNameHome);
  const [classNameSelector,setClassNameSelector] = useState<boolean>(false);

  useEffect(()=>{
    //declaración switch para modificar el indicador de parámetro de búsqueda
    switch (controlSelectorValues.searcherValueSelector) {
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
  },[controlSelectorValues.searcherValueSelector])

  useEffect(()=>{
     //declaración de clases para el evento hover del botón
    if(classNameSelector===true && pathname==="/catalogo"){
      setClassNameSearchBar({...classNamesChatalog,
        imageSrc: classNameHome.imageSrc
      });
    }else{
      setClassNameSearchBar({...classNamesChatalog,
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
          <img className="w-4 h-4" src={classNameSearchBar.imageSrc} alt="Buscar libro"/>
        </button>
        </section>
      {
        controlSelectorValues.searcherSelectorRender?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className={classNameSearchBar.classNameOutput}>
       <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
       <p className="ml-1">{controlSelectorValues.indicatorValue}</p>
     </article>
     </section>
  )
}

export default CathalogSerachBar
