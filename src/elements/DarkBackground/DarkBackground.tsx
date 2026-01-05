import { useEffect, useState } from "react";
import { useToggleContextUX } from "../../store/ux/useToggleContextUX";
import type { DarkBgClassName } from "./types";

const DarkBackground = () => {
    //importar la constante toggleHeader del store
    const toggleBackground = useToggleContextUX((state)=>state.toggleBackground);
    const handleToggleBackground = useToggleContextUX((state)=>state.onChangeBackground);
    const toggleFalseAside = useToggleContextUX((state)=>state.onChangeFalseAside);
    const toggleFalseAsideFilter = useToggleContextUX((state)=>state.onChangeFalseAsideFilter);

    //utiliza una variable de clase para cambiar la clase del componente
    let [BgClassName,setBgClassName] = useState<DarkBgClassName>("hidden"); 

    const handleChangeEvents = () =>{
      handleToggleBackground();
     toggleFalseAside();
     toggleFalseAsideFilter();   
    }

    useEffect(()=>{
        if(toggleBackground===true){
            setBgClassName("w-screen h-screen bg-black/40 z-10 fixed top-0")
        }else{
            setBgClassName("hidden")
        }
    },[toggleBackground])

    return (
    <div className={BgClassName} onClick={handleChangeEvents}>
    
    </div>
  )
}

export default DarkBackground
