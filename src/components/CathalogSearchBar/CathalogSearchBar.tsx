import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";
import { useCathalogSearchBarSelector, useClassNamesSearchbar } from "./useCathalogSearchBar";
import { useLocation } from "react-router-dom";
import {classNamesChatalog,classNameHome} from './data';

const CathalogSerachBar:React.FC<FormCathalogProps> = ({placeholder,questBook,inputHandler}) => {
  //variables relacionadas con el control del selector de la barra de busqueda  
  const { controlSelectorValues,handleChangeSelector,onCloseSearcher,handleSearchValue} = useCathalogSearchBarSelector();

  //variables relacionadas con la modificación de las clases de utilidad según la página que se está renderizando
  const { classNameSearchBar,setClassNameSelector } = useClassNamesSearchbar();

  const { pathname }  = useLocation();
  
  if(pathname==="/catalogo"){
    return(
    <section className="flex flex-col w-full"> 
     <form className={classNamesChatalog.clasNameForm}>
       <input
        type="text"
        className={classNamesChatalog.classNameInput} 
        placeholder={placeholder}
        value={questBook}
        onChange={inputHandler}
        />
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
  }else{
    return(
    <section className="flex flex-col w-full"> 
     <form className={classNameHome.clasNameForm}>
       <input type="text"
          className={classNameHome.classNameInput} 
          placeholder={placeholder}
          
          />
       <section className="flex"> 
        <ButtonCathalogSearch onClickEvent={handleChangeSelector}/>
        <button className={classNameHome.classNameButton} 
          onClick={onCloseSearcher}
          onMouseOver={()=>setClassNameSelector(false)}
          onMouseLeave={()=>setClassNameSelector(true)}>
          <img className="w-4 h-4" src={classNameHome.imageSrc} alt="Buscar libro"/>
        </button>
        </section>
      {
        controlSelectorValues.searcherSelectorRender?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className={classNameSearchBar.classNameOutput}>
       <h4 className="text-light-blue-button font-bold">Buscar por:</h4>
       <p className="ml-1 text-white-font">{controlSelectorValues.indicatorValue}</p>
     </article>
     </section>
     )
  }
}

export default CathalogSerachBar
