import { useRef, useState } from "react";
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

    //sacar la referencia del elemento contenedor
    const filterRefererence = useRef<HTMLDivElement|null>(null)

    return (
        <section
        style={{
            maxHeight: toggleHeightFilter?"24px":`${filterRefererence?.current?.scrollHeight}px` 
        }}
        className="max-h-full overflow-hidden transition-[max-height] duration-700 ease-in-out" 
        ref={filterRefererence} >
          <article className="flex justify-between cursor-pointer" onClick={()=>setToggleHeightFilter(!toggleHeightFilter)}>
            <h2 className="text-tittle-blue font-bold">{label}</h2>
            <img src="/assets/ep_arrow-blue-bold.svg" 
                className="duration-700 ease-in-out"
            style={{
                transform: toggleHeightFilter?"rotate(0deg)":"rotate(180deg)"
            }}/>
          </article>
            {children.map((element)=><FilterElement 
                value={element.value}
                name={element.name}
            />)}    
        </section>
    )
}