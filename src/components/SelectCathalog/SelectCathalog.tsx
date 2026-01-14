import { useEffect, useState } from "react"
import type { SelectCathalogProps,arrowRotation } from "./types"

interface orderBooksProps{
  author:string,
  year:string,
  availability:string,
}

const SelectCathalog:React.FC<SelectCathalogProps> = ({label,selectName,selectClassName}) => {
  const [arrowRotation,setArrowRotation] = useState<arrowRotation>("rotate-0");
  //const [selectBookOrder,setSelectBookOrder] = useState<string>("Autor (A-Z)");
  const [orderBooksOptions,setOrderBooksOptions] = useState<orderBooksProps>({
    author:"Autor (A-Z)",
    year:"Año (mayor a menor)",
    availability:"Disponible para préstamo"
  })

  const handleArrowRotation = (e:React.MouseEvent) =>{
    e.preventDefault();
    if(arrowRotation==="rotate-0"){
      setArrowRotation("rotate-180")
    }else{
      setArrowRotation("rotate-0")
    }
  }


 /*  if(arrowRotation==="rotate-180" && orderBooksOptions.author==="Autor (Z-A)"){
    setOrderBooksOptions({
      ...orderBooksOptions,
      author:"Autor (A-Z)"
      })
    }else{
    setOrderBooksOptions({
      ...orderBooksOptions,
      author:"Autor (Z-A)"
      })
    }
  console.log(orderBooksOptions); */

 /*  const handlerOrderBook = (value: string) => {
    setSelectBookOrder(value);
  } */
  

  return (
    <div className={selectClassName}>
     <h4 className="text-font-p bold text-tittle-blue font-bold" >{label}</h4>
        <section className="flex justify-between max-tablet:grid grid-cols-[1fr_32px] gap-1">  
        <img src="/assets/ep_arrow-black.svg" className="w-4 h-4 absolute top-8 left-[60%] max-tablet:left-[75%] max-cellphone:left-[85%]"/>
        <select name={selectName} className="appearance-none h-9 p-1 border-2 border-main-black rounded-md w-32 max-tablet:w-full"
        onChange={()=>(arrowRotation==="rotate-180") && setArrowRotation("rotate-0")}
        >    
          <option value={orderBooksOptions.author} >{orderBooksOptions.author}</option> 
          <option value="Año (mayor a menor)">Año (mayor a menor)</option>
          <option value="Disponible para préstamo">Disponible para préstamo</option> 
        </select>
        <button className="h-9 w-9 rounded-md border-2 border-black flex items-center justify-center cursor-pointer"
        onClick={handleArrowRotation}>
          <img src="/assets/little-arrow-order.svg" className={arrowRotation}/>  
        </button>
      </section>
    </div>
  )
}

export default SelectCathalog
