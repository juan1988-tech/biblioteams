import { FilterParameter } from "../../elements/FilterParameter/FilterParameter"
import { authorParameters,yearParameters,availabiityParameters } from "./data"

const FilterCathalog = () => {
  return (
    <form className="flex flex-col border-2 border-black border-radius rounded-xl p-4 h-auto overflow-y-hidden max-w-83">
      <h1 className="text-center text-tittle-blue text-font-h4-20 font-bold">Filtrar</h1>
      <FilterParameter label="Autor" children={authorParameters}/>
      <FilterParameter label="Año" children={yearParameters}/>
      <FilterParameter label="Disponibilidad" children={availabiityParameters}/>
      <button className="w-36 h-6 rounded-md border-2 border-black block mt-4 mx-auto hover:bg-main-black hover:text-white-font hover:duration-400">Limpiar Filtro</button>
    </form>
  )
}

export default FilterCathalog
