import { useState, useEffect } from "react";
import type { FormCathalogProps } from "./types";
import ButtonCathalogSearch from "../../elements/ButtonCathalogSearch/ButtonCathalogSearch";
import SearcherSelector from "../../elements/SearcherSelector/SearcherSelector";

const CathalogSerachBar:React.FC<FormCathalogProps> = () => {
  const [selector,setSelector] = useState<boolean>(false);
  const [searcherValue,setSearcherValue] = useState<string>('title');
  const [indicatorValue,setIndicatorValue] =useState<string>('Título');

  const handleChangeSelector = (e:React.MouseEvent) =>{
      e.preventDefault();
        setSelector(!selector);
  }

  const onCloseSearcher = () =>{
    if(selector===true){
      setSelector(false)
    }
  }

  const handleSearchValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setSearcherValue(e.target.value)
   }

  useEffect(()=>{
    switch (searcherValue) {
      case "title":
        setIndicatorValue("Título")  
        break;
      case "author":
        setIndicatorValue("Autor")  
        break;
      case "topics":
        setIndicatorValue("Tema(s)")  
        break;
      case "availability":
        setIndicatorValue("Disponibilidad")  
        break;
    }
  },[searcherValue])

  return (
     <section className="flex flex-col w-full"> 
     <form className="flex border-2 w-150 border-black items-center min-w-72 h-9 mt-6 rounded-full relative px-1 ml-4 max-tablet:m-0
     max-cellphone-hor:w-full justify-between">
       <input type="text" className="appearance-none w-90 h-full outline-none focus:outline-none max-tablet-hor:w-80 px-2
       max-cellphone-hor:w-2/3" placeholder="Resultado libro"/>
       <section className="flex"> 
       <ButtonCathalogSearch onClickEvent={handleChangeSelector}/>
       <button className="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center border-2
         border-gray-500 bg-light-gray ml-2" onClick={onCloseSearcher}>
          <img className="w-4 h-4" src="/assets/navbar-dark-loop.svg" alt="Buscar libro"/>
        </button>
      </section>
      {
        selector?<SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue}/>:<></>
      }
     </form>
     <article className="flex mt-1 cellphone:hidden">
       <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
       <p className="ml-1">{indicatorValue}</p>
     </article>
     </section>
  )
}

export default CathalogSerachBar
