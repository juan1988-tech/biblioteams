import { useState, useEffect } from "react";
import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";
import { useLocation } from "react-router-dom";
import { classNamesChatalog,classNameHome } from "./data";

const CathalogSerachBar:React.FC<FormCathalogProps> = () => {
  const [selector,setSelector] = useState<boolean>(false);
  const [searcherValue,setSearcherValue] = useState<string>('title');
  const [indicatorValue,setIndicatorValue] =useState<string>('Título');
  const { pathname }  = useLocation();
  
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
  },[searcherValue])

  return (
     <section className="flex flex-col w-full"> 
     <form className={(pathname==="/catalogo")?classNamesChatalog.clasNameForm:classNameHome.clasNameForm}>
       <input type="text" className={(pathname==="/catalogo")?classNamesChatalog.classNameInput:classNameHome.classNameInput} placeholder="Resultado libro"/>
       <section className="flex"> 
       <ButtonCathalogSearch onClickEvent={handleChangeSelector}/>
       <button className={(pathname==="/catalogo")?classNamesChatalog.classNameButton:classNameHome.classNameButton} onClick={onCloseSearcher}>
          <img className="w-4 h-4" src={(pathname==="/catalogo"?classNamesChatalog.imageSrc:classNameHome.imageSrc)} alt="Buscar libro"/>
        </button>
      </section>
      {
        selector?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className={(pathname==="/catalogo")?classNamesChatalog.classNameOutput:classNameHome.classNameOutput}>
       <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
       <p className="ml-1">{indicatorValue}</p>
     </article>
     </section>
  )
}

export default CathalogSerachBar
