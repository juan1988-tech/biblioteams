import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { controlSelectorValuesProps,classNameCathalogSearch } from "./types";
import { classNamesChatalog,classNameHome } from "./data";

/*hook personalizado para controlar las clases CSS de la barra de búsqueda según la página en la que aparece*/
export const useClassNamesSearchbar = () =>{
  const [classNameSearchBar,setClassNameSearchBar] = useState<classNameCathalogSearch>(classNameHome);
  const [classNameSelector,setClassNameSelector] = useState<boolean>(false);
  const { pathname }  = useLocation();

  useEffect(()=>{
    //declaración switch para modificar el indicador de parámetro de búsqueda
    //declaración de clases de acuerdo a la url
    if(pathname==="/catalogo"){
        setClassNameSearchBar(classNamesChatalog);
    }else{
      setClassNameSearchBar(classNameHome);
    }
  },[pathname])

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
  return { classNameSearchBar,setClassNameSelector }
}

/*Hook personalizado para modificar el selector de la barra de busqueda*/
export const useCathalogSearchBarSelector = () =>{
    const [controlSelectorValues,setControlSelectorValues] = useState<controlSelectorValuesProps>({
        searcherSelectorRender: false,
        searcherValueSelector: "title",
        indicatorValue: 'Título'
    })
    
    const handleChangeSelector = (e:React.MouseEvent) =>{
      e.preventDefault();
      setControlSelectorValues({
        ...controlSelectorValues,
        searcherSelectorRender: !controlSelectorValues.searcherSelectorRender
      })
    }
    
    const onCloseSearcher = () =>{
    if(controlSelectorValues.searcherSelectorRender===true){
      setControlSelectorValues({
        ...controlSelectorValues,
        searcherSelectorRender: false
      })
    }}

    const handleSearchValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setControlSelectorValues({
        ...controlSelectorValues,
        searcherValueSelector: e.target.value,
      })
   }

  //useEffect para controlar el nombre del Buscar por:  
  useEffect(() => {
    const indicatorMap: Record<string, string> = {
    title: "Título",
    author: "Autor",
    topics: "Tema(s)",
    availability: "Disponibilidad",
    };

  setControlSelectorValues(prev => ({
    ...prev,
    indicatorValue: indicatorMap[prev.searcherValueSelector] ?? "",
  }));
  }, [controlSelectorValues.searcherValueSelector]);  
//const [searchBook, setSearchBook] = useState<string>('');

  return { controlSelectorValues,setControlSelectorValues,handleChangeSelector,onCloseSearcher
    ,handleSearchValue }
}

