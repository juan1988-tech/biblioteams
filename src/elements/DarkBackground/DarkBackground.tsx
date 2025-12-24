import { useEffect, useState } from "react";
import { useToggleHeader } from "../../store/useToggleHeader";

type DarkBgClassName = "hidden" | "w-screen h-screen bg-black/40 z-10 fixed top-0";

const DarkBackground = () => {
    //importar la constante toggleHeader del store
    const toggleHeader = useToggleHeader((state)=>state.toggleHeader);
    const onChangeToggle = useToggleHeader((state)=>state.onChangeToggle);

    //utiliza una variable de clase para cambiar la clase del componente
    let [BgClassName,setBgClassName] = useState<DarkBgClassName>("hidden"); 
    
    useEffect(()=>{
        if(toggleHeader===true){
            setBgClassName("w-screen h-screen bg-black/40 z-10 fixed top-0")
        }else{
            setBgClassName("hidden")
        }
    },[toggleHeader])

    return (
    <div className={BgClassName} onClick={onChangeToggle}>
    
    </div>
  )
}

export default DarkBackground
