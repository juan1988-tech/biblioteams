//import { useToggleHeader } from "../../store/useToggleHeader";

export const ButtonCathalogOptions = () =>{
  //importar la constante toggleHeader del store
  //const toggleHeader = useToggleHeader((state)=>state.toggleHeader);
//const onChangeToggle = useToggleHeader((state)=>state.onChangeToggle);
  
  return(
  <div className="flex flex-col w-1/3 max-w-50 ml-1">
    <h4 className="text-font-p bold text-tittle-blue font-bold" >Filtrar</h4>  
    <button className="flex appearance-none h-9 p-1 border-2 border-main-black rounded-md justify-between cursor-pointer">
      <p>Opciones de filtro</p>
      <img src="/assets/filter-black-icon.svg"/>
    </button>
  </div>
  )
}