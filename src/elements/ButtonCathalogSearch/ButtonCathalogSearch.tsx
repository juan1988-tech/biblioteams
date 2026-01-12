import { useState, useEffect } from "react";
import type { ButtonCathalogProps } from "./types";
import { useLocation } from "react-router-dom";

interface classNamesButton{
  classNameSection:string,
  classNameTittle:string,
  classNameIconImage:string,
  classNameSelect:string,
}

const ButtonCathalogSearch:React.FC<ButtonCathalogProps> = ({onClickEvent}) =>{
  const bodyWith:number = document.body.clientWidth;
  const { pathname }  = useLocation();
  const [mainWidth, setMainWidth] =  useState(0);

  const classNameCathalog:classNamesButton ={
    classNameSection:`flex w-56 items-center justify-left border-2 border-gray-500 h-7 rounded-full px-2 relative`,
    classNameTittle:`text-font-p bold text-tittle-blue -button font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden`,
    classNameIconImage:`/assets/ep_arrow-black.svg`,
    classNameSelect:"appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1"
  }

  const classNameHome:classNamesButton = {
    classNameSection:`flex w-56 items-center justify-left border-2 border-[rgba(256,256,256,.7)] h-7 rounded-full px-2 relative`,
    classNameTittle:`text-font-p bold text-light-blue-button font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden`,
    classNameIconImage:`/assets/ep_arrow-white.svg`,
    classNameSelect:"appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1 text-white-font"
  }

  useEffect(() => {
    setMainWidth(bodyWith);
  }, [bodyWith]);

  if(mainWidth >426){
      return(
    <section className={(pathname==="/catalogo"?classNameCathalog.classNameSection:classNameHome.classNameSection)}>
        <img src={(pathname==="/catalogo")?classNameCathalog.classNameIconImage:classNameHome.classNameIconImage} className="w-3.5 h-3.5 absolute left-[90%] max-tablet-hor:left-10/12"/>
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