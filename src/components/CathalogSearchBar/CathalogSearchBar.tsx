import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";
import { useCathalogSearchBar } from "./useCathalogSearchBar";

const CathalogSerachBar:React.FC<FormCathalogProps> = ({placeholder}) => {
  const { controlSelectorValues,handleChangeSelector,onCloseSearcher,handleSearchValue,classNameSearchBar,setClassNameSelector
  } = useCathalogSearchBar();
  return (
     <section className="flex flex-col w-full"> 
     <form className={classNameSearchBar.clasNameForm}>
       <input type="text" className={classNameSearchBar.classNameInput} placeholder={placeholder}/>
       <section className="flex"> 
        <ButtonCathalogSearch onClickEvent={handleChangeSelector}/>
        <button className={classNameSearchBar.classNameButton} 
          onClick={onCloseSearcher}
          onMouseOver={()=>setClassNameSelector(true)}
          onMouseLeave={()=>setClassNameSelector(false)}>
          <img className="w-4 h-4" src={classNameSearchBar.imageSrc} alt="Buscar libro"/>
        </button>
        </section>
      {
        controlSelectorValues.searcherSelectorRender?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className={classNameSearchBar.classNameOutput}>
       <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
       <p className="ml-1">{controlSelectorValues.indicatorValue}</p>
     </article>
     </section>
  )
}

export default CathalogSerachBar
