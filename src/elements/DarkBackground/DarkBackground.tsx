import { useEffect, useState } from "react";
import { useToggleContext } from "../../store/useToggleContext";
import type { DarkBgClassName } from "./types";

const DarkBackground = () => {
    //importar la constante toggleHeader del store
    const toggleBackground = useToggleContext((state)=>state.toggleBackground);
    const handleToggleBackground = useToggleContext((state)=>state.onChangeBackground);
    const toggleAside = useToggleContext((state)=>state.onChangeAside);

    //utiliza una variable de clase para cambiar la clase del componente
    let [BgClassName,setBgClassName] = useState<DarkBgClassName>("hidden"); 

    const handleChangeEvents = () =>{
        handleToggleBackground();
        toggleAside();
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
