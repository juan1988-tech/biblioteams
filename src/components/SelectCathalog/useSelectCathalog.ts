import type { SelectionState,SelectionAction } from "./types"

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