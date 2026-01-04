import SelectCathalog from "../SelectCathalog/SelectCathalog"

const ButtonCathalogOptions = () =>{
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

const SelectButtonsCathalog = () => {
  return (
    <section className="flex justify-between col-span-4 tablet-hor:hidden">
      <SelectCathalog  label="Buscar por" selectName="find-book" selectClassName="flex flex-col w-1/3 relative max-w-50"/>
      <SelectCathalog  label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-1/3 relative max-w-50 ml-1"/>
      <ButtonCathalogOptions />
    </section>
  )
}

export default SelectButtonsCathalog
