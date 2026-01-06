import type { PaginationNumberPage } from "./types";
import { useEffect,useState } from "react";

const PaginationButton:React.FC<PaginationNumberPage> = ({numberPageIndex, paginationClassName,handlePagination})=>{
 const [numberPage,setNumberPage] = useState<number>(numberPageIndex);
 //const [paginationClassNameState,setPaginationClassNameState] = useState<string>(paginationClassName);

const handlePaginationButton = () =>{
    handlePagination(numberPageIndex);
} 

 useEffect(()=>{
    setNumberPage(numberPageIndex);
   // setPaginationClassNameState("w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer")
 },[]);   
    
  return(
   <button className={paginationClassName} onClick={handlePaginationButton}>
    {numberPage}
   </button>
     )
}

export default PaginationButton