import type { State,Action } from "./types";
import { useReducer } from "react";

 const IconsState:State ={
    favourite:false,
    share:false,
    reserve:false
}

export const useCathalogCard = () =>{
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

    return { state,dispatch }  
}