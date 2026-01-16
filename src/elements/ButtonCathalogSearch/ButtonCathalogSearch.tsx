import { useState, useEffect } from "react";
import type { ButtonCathalogProps } from "./types";
import { useLocation } from "react-router-dom";
import { classNameCathalog, classNameHome } from "./data";


const ButtonCathalogSearch:React.FC<ButtonCathalogProps> = ({onClickEvent}) =>{
  const bodyWith:number = document.body.clientWidth;
  const { pathname }  = useLocation();
  const [mainWidth, setMainWidth] =  useState(0);
 
  useEffect(() => {
    setMainWidth(bodyWith);
  }, [bodyWith]);

  if(mainWidth >426){
      return(
    <section className={(pathname==="/catalogo"?classNameCathalog.classNameSection:classNameHome.classNameSection)}>
        <img src={(pathname==="/catalogo")?classNameCathalog.classNameIconImage:classNameHome.classNameIconImage} className="w-3.5 h-3.5 absolute left-[90%] max-tablet-hor:left-11/12"/>
         <h4 className={(pathname==="/catalogo")?classNameCathalog.classNameTittle:classNameHome.classNameTittle}>Buscar por: </h4>
         <select name="find-book" className={(pathname==="/catalogo")?classNameCathalog.classNameSelect:classNameHome.classNameSelect}>    
         <option className="text-black" value="author">Autor</option> 
         <option className="text-black" value="year">Año</option>
         <option className="text-black" value="year">Tema(s)</option>
         <option className="text-black" value="availability">Disponibilidad</option> 
        </select>  
    </section>
  )}
  else{
    return(    
    <button className="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center border-2
         border-gray-500 bg-light-gray ml-0.5" onClick={onClickEvent}>
        <img className="w-4 h-4" src="/assets/mingcute_filter-line.svg"/>  
    </button>
  )}
}

export default ButtonCathalogSearch;