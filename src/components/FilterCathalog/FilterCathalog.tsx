import { FilterParameter } from "../../elements/FilterParameter/FilterParameter"

const FilterCathalog = () => {
  const authorParameters=[
    {
     value: "Autor 1",
     name: "Autor"
    },
    {
     value: "Autor 2",
     name: "Autor"
    },
    {
     value: "Autor 3",
     name: "Autor"
    }
  ]
  
  const yearParameters =[
    {
     value: "0001",
     name: "Año"
    },
    {
     value: "0002",
     name: "Año"
    },
    {
     value: "0003",
     name: "Año"
    }
  ]

  const availabiityParameters = [
    {
     value: "Disponible",
     name: "Disponibilidad"
    },
    {
     value: "No Disponible",
     name: "Disponibilidad"
    }
  ]
  return (
    <form className="flex flex-col border-2 border-black border-radius rounded-xl p-4 h-auto overflow-y-hidden transition-all duration-1000 ease-in-out">
      <FilterParameter label="Autor" children={authorParameters}/>
      <FilterParameter label="Año" children={yearParameters}/>
      <FilterParameter label="Disponibilidad" children={availabiityParameters}/>
      <button className="w-36 h-6 rounded-md border-2 border-black block mt-4 mx-auto font-semibold hover:bg-main-black hover:text-white-font hover:duration-400">Limpiar Filtro</button>
    </form>
  )
}

export default FilterCathalog
