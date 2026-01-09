import { useState, useEffect } from "react";

type ButtonCathalogProps ={
  onClickEvent:(e:React.MouseEvent)=>void;
}

const ButtonCathalogSearch:React.FC<ButtonCathalogProps> = ({onClickEvent}) =>{
  const bodyWith:number = document.body.clientWidth;
  const [mainWidth, setMainWidth] =  useState(0);

  useEffect(() => {
    setMainWidth(bodyWith);
  }, [bodyWith]);

  if(mainWidth >426){
      return(
    <section className="flex w-56 items-center justify-left border-2 border-gray-500 h-7 rounded-full px-2 relative
       max-tablet-hor:w-35">
        <img src="/assets/ep_arrow-black.svg" className="w-3.5 h-3.5 absolute left-[90%] max-tablet-hor:left-10/12"/>
         <h4 className="text-font-p bold text-tittle-blue font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden" >Buscar por: </h4>
         <select name="find-book" className="appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1">    
         <option value="author">Autor</option> 
         <option value="year">Año</option>
         <option value="availability">Disponibilidad</option> 
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