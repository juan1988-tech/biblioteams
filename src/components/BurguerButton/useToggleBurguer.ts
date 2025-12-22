import { useState,useEffect } from "react";
type ToggleClassNameProps = {
    classElement:string,
}

export const useToggleBurguer = () =>{
    const [toggleBurguer,setToggleBurguer] = useState<boolean>(false);  
      const [burguerLines,setBurguerLine] = useState<ToggleClassNameProps[]>([
        {
         classElement:"w-7.5 h-1 rounded-full bg-black absolute left-2.5 top-3",
        },
        {
         classElement:"w-5 h-1 rounded-full bg-black transition-all left-2.5 duration-700 absolute top-5",
        },
        {
         classElement:"w-2.5 h-1 rounded-full bg-black absolute left-2.5 duration-700 top-7"   
        }
      ])  
    
      useEffect(()=>{
        if(toggleBurguer===true){
            setBurguerLine([
                {
                classElement:"w-7.5 h-1 rounded-full bg-black absolute left-2.5 top-3",
                },
                {
                classElement:"w-5 h-1 rounded-full bg-black transition-all left-5 duration-600 absolute top-5",
                },
                {
                classElement:"w-2.5 h-1 rounded-full bg-black absolute left-7.5 duration-600 top-7"   
                }])
        }
        else{
             setBurguerLine([
                {
                classElement:"w-7.5 h-1 rounded-full bg-black absolute left-2.5 top-3",
                },
                {
                classElement:"w-5 h-1 rounded-full bg-black transition-all left-2.5 duration-600 absolute top-5",
                },
                {
                classElement:"w-2.5 h-1 rounded-full bg-black absolute left-2.5 duration-600 top-7"   
                }])
        }
      },[toggleBurguer])
    
      //hacer la función para cambiar el boton de hamburguesa 
      const handleButtonBurguer = () =>{
        setToggleBurguer(!toggleBurguer)
      }

    return {burguerLines,handleButtonBurguer}  
}