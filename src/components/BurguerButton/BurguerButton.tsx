import { useToggleBurguer } from "./useToggleBurguer";
import { useToggleHeader } from '../../store/useToggleHeader';

const BurguerButton = () => {
  //importa la funcion de cambio del toggle header
  const onChangeToggle = useToggleHeader((state)=>state.onChangeToggle);

  //trae las lineas del botón de hamburguesa del hook personalizado
  const { burguerLines } = useToggleBurguer();
  

  return (
    <section className="flex relative flex-coljustify-evenly z-30 w-12 h-12 tablet-hor:hidden left-8 top-3 cursor-pointer max-cellphone-hor:left-4"
     onClick={onChangeToggle}>
       {
        burguerLines.map((line)=>(
            <div className={line.classElement}></div>
        ))
       }
    </section>
  )
}

export default BurguerButton
