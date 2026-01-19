import type { State,Action,SelectColorProps } from "./types";
import { useReducer,useEffect,useState } from "react";
import type { CathalogBookCard } from "../../types/cathalog-env";

 const IconsState:State ={
    favourite:false,
    share:false,
    reserve:false
}

export const useCathalogCard = ({availability}:CathalogBookCard) =>{
  //reductor para controlar el hover de los botones
  const reducer = (state:State,action:Action) =>{
  const resetState = Object.fromEntries(
      Object.keys(state).map(key => [key, false])
    ) as State;

  switch (action.type) {
    case "FAVOURITE":
      return{
        ...resetState,
        favourite: true,
      }
    case "NON-FAVOURITE":
      return{
        ...resetState,
        favourite: false,
      }    
    case "SHARE":
      return{
        ...resetState,
          share: true,
      }
    case "NON-SHARE":
      return{
        ...resetState,
          share: false,
      }    
    case "RESERVE":
      return{
        ...resetState,
          reserve: true,
      }
    case "NON-RESERVE":
      return{
        ...resetState,
          reserve: false,
      }    
    default:
      return {
        ...IconsState,
      }}}

    const [state,dispatch] = useReducer(reducer,IconsState);
    
    //implementacion para los colores segun la disponibilidad del libro
    const [availableColors,setAvailableColors] = useState<SelectColorProps>({
    firstColor:"text-green-available",
    secondColor:"text-red-non-unavailable",
  })

  useEffect(()=>{
    if(availability==="Disponible"){
      setAvailableColors({
        firstColor:"text-green-available",
        secondColor:"text-red-non-unavailable"
      })
    }
    else{
      setAvailableColors({
        firstColor:"text-green-non-available",
        secondColor:"text-red-unavailable"
      })
    }
  },[availability])  

    return { state,dispatch,availableColors }  
}