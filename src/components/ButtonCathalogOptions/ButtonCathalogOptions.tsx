import { useToggleContextUX } from "../../store/ux/useToggleContextUX"

export const ButtonCathalogOptions = () =>{
  //importar la constante toggleHeader del store
  //importar la variable de estado de Zustand
  const handleToggleBackground = useToggleContextUX((state)=>state.onChangeBackground);
  const handleToggleAsideFilter = useToggleContextUX((state)=>state.onChangeAsideFilter);

  const onChangeAsideFilter = (e:React.MouseEvent) =>{
        e.preventDefault();
        handleToggleAsideFilter();
        handleToggleBackground();
    }

  return(
  <div className="flex flex-col w-1/3 ml-1 max-cellphone-hor:w-full min-w-72 max-cellphone:ml-0">
    <h4 className="text-font-p bold text-tittle-blue font-bold" >Filtrar</h4>  
    <button className="flex appearance-none h-9 p-1 border-2 border-main-black rounded-md justify-between cursor-pointer"
    onClick={onChangeAsideFilter}>
      <p>Opciones de filtro</p>
      <img src="/assets/filter-black-icon.svg"/>
    </button>
  </div>
  )
}