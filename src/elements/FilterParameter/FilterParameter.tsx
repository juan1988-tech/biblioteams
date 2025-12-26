import { useEffect, useRef, useState } from "react";
import type { FilterElementProps,FilterParameterProps } from "./types";

const FilterElement:React.FC<FilterElementProps> = ({value,name}) =>{
    return (
        <label className="flex mt-4" htmlFor={name}>
            <input type="checkbox" value={value} name={name} className="w-4.5 h-4.5 border-2 border-black rounded-sm"/>
            <span className="ml-3.5">{value}</span>
        </label>
    )
}

export const FilterParameter:React.FC<FilterParameterProps>= ({children,label}) =>{
    //hago un valor booleano para cambiar entre dos estilos 
    const [toggleHeightFilter,setToggleHeightFilter]  = useState<boolean>(false);
    let [classHeightFilter,setclassHeightFilter] = useState<string>("");

    //sacar la referencia del elemento contenedor
    const filterRefererence = useRef<HTMLDivElement|null>(null)

    //sacar la referencia del tiulo
    const titleReferernce = useRef<HTMLDivElement|null>(null);
    
    useEffect(()=>{
        if(toggleHeightFilter===true){
            setclassHeightFilter("max-h-6 overflow-hidden transition-all duration-1000 ease-in-out")
        }else{
            setclassHeightFilter("max-h-full overflow-hidden transition-all duration-1000 ease-in-out")
        }        
    },[toggleHeightFilter])
    console.log(classHeightFilter)
    console.log(toggleHeightFilter)
    return (
        <section className={classHeightFilter} ref={filterRefererence} >
          <article className="flex justify-between cursor-pointer" ref={titleReferernce} onClick={()=>setToggleHeightFilter(!toggleHeightFilter)}>
            <h2 className="text-tittle-blue font-bold">{label}</h2>
            <img src="/assets/ep_arrow-blue-bold.svg"/>
          </article>
            {children.map((element)=><FilterElement 
                value={element.value}
                name={element.name}
            />)}    
        </section>
    )
}