import { useEffect, useReducer, useState } from "react"
import type { SelectCathalogProps } from "./types"
import { useRenderCathalog } from "../../store/cathalog/useRenderCathalog"
import { SelectionReducer } from "./useSelectCathalog"

const SelectCathalog:React.FC<SelectCathalogProps> = ({label,selectName,selectClassName}) => {
  const [state,dispatch] = useReducer(SelectionReducer,{ selection: "Autor (A-Z)",arrowOrder:"rotate-0" });
  const [orderCathalog,setOrderCathalog] = useState<string>("Autor (A-Z)");
  const { cathalog,orderCathalogBooks,orderCathalogBooksDesc } = useRenderCathalog(); 
  
  const handleOrderBooks = () =>{
      if(state.selection==="Autor (A-Z)"){
        dispatch({type: "Autor (Z-A)"})
        orderCathalogBooks({ cathalog, key: "author" });  
      } 
      else if(state.selection==="Autor (Z-A)"){
        dispatch({type: "Autor (A-Z)"})
        orderCathalogBooksDesc({ cathalog, key:"author" });
      }
      else if(state.selection==="Año (mayor a menor)"){
        dispatch({type: "Año (menor a mayor)"});
        orderCathalogBooks({ cathalog, key: "year" });
      }
      else if(state.selection==="Año (menor a mayor)"){
        dispatch({type:"Año (mayor a menor)"});
        orderCathalogBooksDesc({ cathalog, key: "year"});
      }
      else if(state.selection==="Disponible"){
        dispatch({type:"No Disponible"})
        orderCathalogBooks({ cathalog, key: "availability"});
      }
      else if(state.selection==="No Disponible"){
        dispatch({type:"Disponible"});
        orderCathalogBooksDesc({ cathalog, key: "availability"}); 
      }
  }

 useEffect(()=>{
    switch (orderCathalog) {
      case "Autor (A-Z)":
        dispatch({type: "Autor (A-Z)"});
        orderCathalogBooks({ cathalog, key: "author" });
        break;
      case "Autor (Z-A)":
        dispatch({type: "Autor (Z-A)"});
        orderCathalogBooksDesc({cathalog,key: "author"});
        break;
      case "Año (mayor a menor)":
        dispatch({type: "Año (mayor a menor)"});
        orderCathalogBooks({ cathalog, key: "year"});
        break;
      case "Año (menor a mayor)":
        dispatch({type: "Año (menor a mayor)"});
        orderCathalogBooksDesc({cathalog, key: "year"});
        break;  
      case "Disponible":
        dispatch({type: "Disponible"});
        orderCathalogBooks({ cathalog, key: "availability"});
        break; 
      case "No Disponible":
        dispatch({type: "No Disponible"});
        orderCathalogBooksDesc({ cathalog, key: "availability"});
        break;
    }
  },[orderCathalog]) 

  return (
    <div className={selectClassName}>
     <h4 className="text-font-p bold text-tittle-blue font-bold" >{label}</h4>
        <section className="flex justify-between max-tablet:grid grid-cols-[1fr_32px] gap-1">  
        <img src="/assets/ep_arrow-black.svg" className="w-4 h-4 absolute top-8 left-[75%] max-tablet:left-[75%] max-cellphone:left-[80%]"/>
        <select name={selectName} className="appearance-none h-9 p-1 border-2 border-main-black rounded-md w-full max-tablet:w-full"
        onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
          setOrderCathalog(e.target.value)
        }}
        value={state.selection}
        >    
          <option value="Autor (A-Z)">Autor (A-Z)</option> 
          <option value="Autor (Z-A)">Autor (Z-A)</option>
          <option value="Año (mayor a menor)">Año (mayor a menor)</option>
          <option value="Año (menor a mayor)">Año (menor a mayor)</option>
          <option value="Disponible">Disponible para préstamo</option>
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

