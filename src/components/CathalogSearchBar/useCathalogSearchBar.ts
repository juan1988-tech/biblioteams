import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { controlSelectorValuesProps } from "./types";


export const useCathalogSearchBar = () =>{
    /*funcionalidades relacionadas con el botón del selector*/
    const [indicatorValue,setIndicatorValue] = useState<string>('Título');
    const { pathname }  = useLocation();
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
      
     switch (controlSelectorValues.searcherValueSelector) {
      case "title":
       setControlSelectorValues({
            ...controlSelectorValues,
            indicatorValue:"Título" 
        })
        break;
      case "author":
       setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Autor"   
        })
       console.log("Autor")
        break;
      case "topics":
        setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Tema(s)"   
        })
        break;
      case "availability":
         setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Disponibilidad"   
        })
        break;
    }
   }

   //console.log(controlSelectorValues)
 /*   switch (controlSelectorValues.searcherValueSelector) {
      case "title":
       setControlSelectorValues({
            ...controlSelectorValues,
            indicatorValue:"Título" 
        })
        break;
      case "author":
       setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Autor"   
        })
       console.log("Autor")
        break;
      case "topics":
        setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Tema(s)"   
        })
        break;
      case "availability":
         setControlSelectorValues({
          ...controlSelectorValues,
          indicatorValue:"Disponibilidad"   
        })
        break;
    }
    */

   //console.log(controlSelectorValues)


    return { controlSelectorValues,setControlSelectorValues,handleChangeSelector,onCloseSearcher,handleSearchValue }
}