import { useToggleBurguer } from "./useToggleBurguer";

const BurguerButton = () => {   
  //trae las lineas del botón de hamburguesa del hook personalizado
  const { burguerLines,onChangeBurguerToggle } = useToggleBurguer();
  
  return (
    <section className="flex relative flex-coljustify-evenly z-40 w-12 h-12 tablet-hor:hidden left-8 top-3 cursor-pointer max-cellphone-hor:left-4"
     onClick={onChangeBurguerToggle}>
       {
        burguerLines.map((line)=>(
            <div className={line.classElement} key={line.classElement}></div>
        ))
       }
    </section>
  )
}

export default BurguerButton
