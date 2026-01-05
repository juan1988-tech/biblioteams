import { useEffect, useState } from "react";
import { useToggleContextUX } from "../../store/ux/useToggleContextUX";
import FilterCathalog from "../../components/FilterCathalog/FilterCathalog";

const AsideHeaderFilter = () =>{
    //importar la variable de estado de Zustand
    const toggleAsideFilter = useToggleContextUX((state)=>state.toggleAsideFilter);
    const handleToggleBackground = useToggleContextUX((state)=>state.onChangeBackground);
    const handleToggleAsideFilter = useToggleContextUX((state)=>state.onChangeAsideFilter);
    
    const [asideClassName,setAsideClassName] = useState<string>("w-2/4 h-full bg-white-font tablet-hor:hidden flex flex-col items-center justify-center z-20 fixed top-0 left-[100%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3"); 

    useEffect(()=>{
    ((toggleAsideFilter===true)
    ?setAsideClassName("w-2/4 h-full bg-white-font tablet-hor:hidden flex flex-col items-center p-4 z-20 fixed top-0 left-[50%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3 max-cellphone-hor:left-[40%] max-cellphone:left-[34%] max-cellphone:w-2/3")
    :setAsideClassName("w-2/4 h-full bg-white-font tablet-hor:hidden flex flex-col items-center p-4 z-20 fixed top-0 left-[100%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3"))
  },[toggleAsideFilter])
    
    const onCloseAsideFilter = (e:React.MouseEvent) =>{
        e.preventDefault();
        handleToggleAsideFilter();
        handleToggleBackground();
    }

    return(
        <section className={asideClassName}>
         <button className="flex w-12 h-12 justify-start self-start" onClick={onCloseAsideFilter}>
            <img className="w-full h-full" src="/assets/icon-park-outline_close-small.svg"
            alt="close-icon-event"/>
         </button>
         <article className="mt-4 w-full">
          <FilterCathalog/>
         </article>
        </section>
    )
}

export default AsideHeaderFilter;
