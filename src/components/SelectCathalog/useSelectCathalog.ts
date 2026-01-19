import { useEffect, useReducer, useState,useMemo } from "react"
import type { SelectionState,SelectionAction } from "./types"
import { useRenderCathalog } from "../../store/cathalog/useRenderCathalog"
import type { CathalogBook } from "../../types/cathalog-env"

//reductor para modificar el renderizado de los valores relacionados al botón select
export const SelectionReducer = (state:SelectionState,action:SelectionAction):SelectionState=>{
  switch(action.type){
    case "Autor (A-Z)":
      return { selection:"Autor (A-Z)",
              arrowOrder: "rotate-0"
          }
    case "Autor (Z-A)":
      return { selection:"Autor (Z-A)",
              arrowOrder:"rotate-180" 
          }  
    case "Año (mayor a menor)":
      return { selection:"Año (mayor a menor)", 
              arrowOrder:"rotate-0"
          }
    case "Año (menor a mayor)":
      return { selection: "Año (menor a mayor)",
               arrowOrder:"rotate-180"
          }
    case "Disponible":
      return { selection: "Disponible",
               arrowOrder:"rotate-0" 
          }
    case "No Disponible":
      return { selection: "No Disponible",
               arrowOrder:"rotate-180"
          }
   default:
        return{
          ...state
        } 
  } 
}

//hook personalizado para renderizar los libros del catálogo ordenados
export const useSelectCathalog = () =>{
  const [state,dispatch] = useReducer(SelectionReducer,{ selection: "Autor (A-Z)",arrowOrder:"rotate-0" }); 
  const [orderCathalog,setOrderCathalog] = useState<string>("Autor (A-Z)");
  const { cathalog,setCathalog } = useRenderCathalog();

  /*constantes para las variaciones del orden de los libros en el catálogo*/
  const orderedAuthorCathalogAZ = useMemo<CathalogBook[]>(() => {
      return [...cathalog].sort(
      (a: CathalogBook, b: CathalogBook) =>{
         const authorA = a.author as string;
         const authorB = b.author as string;
  
        return authorA.localeCompare(authorB)
      });
    }, [cathalog]);
   
  const orderedAuthorCathalogZA = useMemo<CathalogBook[]>(() => {
      return [...cathalog].sort(
      (a: CathalogBook, b: CathalogBook) =>{
          const authorA = a.author as string;
          const authorB = b.author as string;
  
        return authorB.localeCompare(authorA)
      });
    }, [cathalog]);
  
  const orderedYearCathalogZA = useMemo<CathalogBook[]>(()=>{
    return [...cathalog].sort((a:CathalogBook,b:CathalogBook)=>{
      const yearA = Number(a.year);
      const yearB = Number(b.year);
      return yearB - yearA
    })
  },[cathalog])  

  const orderedYearCathalogAZ = useMemo<CathalogBook[]>(()=>{
    return [...cathalog].sort((a:CathalogBook,b:CathalogBook)=>{
      const yearA = Number(a.year);
      const yearB = Number(b.year);
      return yearA - yearB
    })
  },[cathalog])

  const orderedBooksAvailable = useMemo<CathalogBook[]>(()=>{
    return [...cathalog].sort((a:CathalogBook,b:CathalogBook)=>{
      const availableA = a.availability;
      const availableB = b.availability;
      return availableA.localeCompare(availableB)
    })
  },[cathalog]);

  const orderedBooksNonAvailable = useMemo<CathalogBook[]>(()=>{
    return [...cathalog].sort((a:CathalogBook,b:CathalogBook)=>{
      const availableA = a.availability;
      const availableB = b.availability;
      return availableB.localeCompare(availableA)
    })
  },[cathalog]);
  
    const handleOrderBooks = () =>{
        if(state.selection==="Autor (A-Z)"){ 
          dispatch({type: "Autor (Z-A)"})
          setCathalog(orderedAuthorCathalogAZ)
        } 
        else if(state.selection==="Autor (Z-A)"){
          dispatch({type: "Autor (A-Z)"})
          setCathalog(orderedAuthorCathalogZA)
        }
        else if(state.selection==="Año (mayor a menor)"){
        dispatch({type: "Año (menor a mayor)"});  
          setCathalog(orderedYearCathalogZA);
        }
        else if(state.selection==="Año (menor a mayor)"){
          dispatch({type:"Año (mayor a menor)"});
          setCathalog(orderedYearCathalogAZ);      
        }
        else if(state.selection==="Disponible"){
          dispatch({type:"No Disponible"})
          setCathalog(orderedBooksNonAvailable);
        }
        else if(state.selection==="No Disponible"){
          dispatch({type:"Disponible"});
          setCathalog(orderedBooksAvailable);
        }
    }
  
   useEffect(()=>{
    //orderCathalogAuthorZA;
      switch (orderCathalog) {
        case "Autor (A-Z)":
          dispatch({type: "Autor (A-Z)"});
          setCathalog(orderedAuthorCathalogAZ)
          break;
        case "Autor (Z-A)":
          dispatch({type: "Autor (Z-A)"});
          setCathalog(orderedAuthorCathalogZA)
          break;
        case "Año (mayor a menor)":
          dispatch({type: "Año (mayor a menor)"});  
          setCathalog(orderedYearCathalogZA)
          break;
        case "Año (menor a mayor)":
          dispatch({type: "Año (menor a mayor)"});
          setCathalog(orderedYearCathalogAZ);
          break;  
        case "Disponible":
          dispatch({type: "Disponible"});
          setCathalog(orderedBooksAvailable);
          break; 
        case "No Disponible":
          dispatch({type: "No Disponible"});
          setCathalog(orderedBooksNonAvailable);
          break;
      }
    },[orderCathalog])

    return {state,handleOrderBooks,setOrderCathalog}
}