import { useEffect, useReducer, useState } from "react"
import type { SelectCathalogProps,arrowRotation } from "./types"

type SelectionState ={
  selection: string,
  arrowOrder: arrowRotation
}

type SelectionAction = {
  type:"Autor (A-Z)"|"Autor (Z-A)"|"Año (mayor a menor)"|"Año (menor a mayor)"|"Disponible para préstamo" |"No Disponible"
}

const SelectionReducer = (state:SelectionState,action:SelectionAction):SelectionState=>{
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
    case "Disponible para préstamo":
      return { selection: "Disponible para préstamo",
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

const SelectCathalog:React.FC<SelectCathalogProps> = ({label,selectName,selectClassName}) => {
  const [state,dispatch] = useReducer(SelectionReducer,{ selection: "Autor (A-Z)",arrowOrder:"rotate-0" });
  const [orderCathalog,setOrderCathalog] = useState<string>("");

  const handleOrderBooks = () =>{
      console.log(state.selection)
      if(state.selection==="Autor (A-Z)"){
        dispatch({type: "Autor (Z-A)"})
      } 
      else if(state.selection==="Autor (Z-A)"){
        dispatch({type: "Autor (A-Z)"})
      }
      else if(state.selection==="Año (mayor a menor)"){
        dispatch({type: "Año (menor a mayor)"})
      }
      else if(state.selection==="Año (menor a mayor)"){
        dispatch({type:"Año (mayor a menor)"})
      }
      else if(state.selection==="Disponible para préstamo"){
        dispatch({type:"No Disponible"})
      }
      else if(state.selection==="No Disponible"){
        dispatch({type:"Disponible para préstamo"})
      }
  }

 useEffect(()=>{
    switch (orderCathalog) {
      case "Autor (A-Z)":
        dispatch({type: "Autor (A-Z)"})
        break;
      case "Autor (Z-A)":
        dispatch({type: "Autor (Z-A)"})
        break;
      case "Año (mayor a menor)":
        dispatch({type: "Año (mayor a menor)"})
        break;
      case "Año (menor a mayor)":
        dispatch({type: "Año (menor a mayor)"})
        break;  
      case "Disponible para préstamo":
        dispatch({type: "Disponible para préstamo"}) 
        break; 
      case "No Disponible":
        dispatch({type: "No Disponible"})
        break;
    }
  },[orderCathalog]) 

  console.log(orderCathalog)
  return (
    <div className={selectClassName}>
     <h4 className="text-font-p bold text-tittle-blue font-bold" >{label}</h4>
        <section className="flex justify-between max-tablet:grid grid-cols-[1fr_32px] gap-1">  
        <img src="/assets/ep_arrow-black.svg" className="w-4 h-4 absolute top-8 left-[60%] max-tablet:left-[75%] max-cellphone:left-[85%]"/>
        <select name={selectName} className="appearance-none h-9 p-1 border-2 border-main-black rounded-md w-32 max-tablet:w-full"
        onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
          setOrderCathalog(e.target.value)
        }}
        value={state.selection}
        >    
          <option value="Autor (A-Z)">Autor (A-Z)</option> 
          <option value="Autor (Z-A)">Autor (Z-A)</option>
          <option value="Año (mayor a menor)">Año (mayor a menor)</option>
          <option value="Año (menor a mayor)">Año (menor a mayor)</option>
          <option value="Disponible para préstamo">Disponible para préstamo</option>
          <option value="No Disponible">No Disponible</option> 
        </select>
        <button className="h-9 w-9 rounded-md border-2 border-black flex items-center justify-center cursor-pointer"
        onClick={handleOrderBooks}>
          <img src="/assets/little-arrow-order.svg" className={state.arrowOrder}/>  
        </button>
      </section>
    </div>
  )
}

export default SelectCathalog

