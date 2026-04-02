import type { FormCathalogProps } from "./types";
import { useCathalogSearchBarSelector, useClassNamesSearchbar } from "./useCathalogSearchBar";
import { useLocation } from "react-router-dom";
import SearchbarHome from "../../elements/SearchbarHome/SearchbarHome";
import SearchBarCathalog from "../../elements/SearchBarCathalog/SearchBarCathalog";

const CathalogSerachBar:React.FC<FormCathalogProps> = ({placeholder,questBook,inputHandler}) => {
  //variables relacionadas con el control del selector de la barra de busqueda  
  const { controlSelectorValues,handleChangeSelector,onCloseSearcher,handleSearchValue} = useCathalogSearchBarSelector();

  //variables relacionadas con la modificación de las clases de utilidad según la página que se está renderizando
  const { setClassNameSelector } = useClassNamesSearchbar();

  const { pathname }  = useLocation();
  
  if(pathname==="/catalogo"){
    return(
    <SearchBarCathalog 
      placeholder={placeholder}
      questBook={questBook}
      inputHandler={inputHandler}
      controlSelectorValues={controlSelectorValues}
      handleChangeSelector={handleChangeSelector}
      onCloseSearcher={onCloseSearcher}
      handleSearchValue={handleSearchValue}
      setClassNameSelector={setClassNameSelector}
    /> 
    )
  }else{
    return(
     <SearchbarHome
       placeholder={placeholder}
       controlSelectorValues={controlSelectorValues}
       handleChangeSelector={handleChangeSelector}
       onCloseSearcher={onCloseSearcher}
       handleSearchValue={handleSearchValue}
       setClassNameSelector={setClassNameSelector}
     />
     )
  }
}

export default CathalogSerachBar