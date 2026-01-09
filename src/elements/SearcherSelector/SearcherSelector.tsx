import type { searcherSelectorProps } from "./types"

const SearcherSelector:React.FC<searcherSelectorProps> = ({onClickEvent,handleSearchValue}) => {
  return (
    <section className="absolute top-9 right-0 w-46 h-55 border-2 border-black bg-white-font z-20 rounded-xl p-1">
        <header className="w-6 h-6">
          <button className="w-full h-full" onClick={onClickEvent}>
            <img src="/assets/icon-park-outline_close-small.svg"/>
          </button>
        </header> 
        <h4 className="text-center text-tittle-blue font-bold w-full text-font-p-18">Buscar por</h4>
        <label className="flex w-5/6 mx-auto justify-between">
            <span className="block font-bold text-tittle-blue">Título</span>
            <input type="radio" value="title" name="searcher-selector" onChange={handleSearchValue}/>
        </label>
        <label className="flex w-5/6 mx-auto justify-between mt-4">
            <span className="block font-bold text-tittle-blue">Autor</span>
            <input type="radio" value="author" name="searcher-selector" onChange={handleSearchValue}/>
        </label>
        <label className="flex w-5/6 mx-auto justify-between mt-4">
            <span className="block font-bold text-tittle-blue">Tema(s)</span>
            <input type="radio" value="topics" name="searcher-selector" onChange={handleSearchValue}/>
        </label>
        <label className="flex w-5/6 mx-auto justify-between mt-4">
            <span className="block font-bold text-tittle-blue">Disponibilidad</span>
            <input type="radio" value="availability" name="searcher-selector" onChange={handleSearchValue}/>
        </label>
      </section>
  )
}

export default SearcherSelector
