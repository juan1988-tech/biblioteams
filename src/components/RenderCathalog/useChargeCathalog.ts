import type { PaginationNumberPage } from "./types";
import { useEffect, useMemo } from "react";
import { useRenderCathalog } from "../../store/cathalog/useRenderCathalog";
import { useSearchParams } from "react-router-dom";

export const useChargeCathalog = () =>{
    let [searchParams, setSearchParams] = useSearchParams();
    const { cathalog, setCathalog, page, setPage,
    paginationButtons, setPaginationButtons
   } = useRenderCathalog();

   const getInformationCathalog = async () => {
    try {
        //llamado para los datos dummy: const request = await fetch('/dummy/cathalogBook.json');
        const request = await fetch("http://localhost:3000/api/cathalog");
        
        if (!request.ok) {
            throw new Error(`HTTP error! status: ${request.status}`);
        }
        
        const data = await request.json();
        if (data.status === "success" && data.cathalogBooks) {

            setCathalog(data.cathalogBooks);
        } else if (data.status === "error") {
            console.error(`Error del servidor: ${data.message}`);
        }
        
    } catch (error) {
        console.error(`Error al cargar los datos: ${error}`);
    }
}
  const onChangePage = (pageNumber:number) =>{
    setPage(pageNumber);
    setSearchParams(`?page=${pageNumber}`);
    window.scrollTo(0,0);
  }

  const indexedCathalog = cathalog.map((book,index)=>({...book, index: index + 1}));

  let booksPerPages = useMemo(() => indexedCathalog.slice((page - 1) * 9, page * 9), [indexedCathalog, page]);
  
  const totalIndexPagination = useMemo(() => Math.ceil(cathalog.length / 9), [cathalog.length]);

  const createPaginationButtons = () =>{
    if(totalIndexPagination>0){
        let buttonsArray:PaginationNumberPage[] = [];

        for(let i=1;i<=totalIndexPagination;i++){
            buttonsArray.push({
                numberPageIndex:i,
                paginationClassName: i===page ? "w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer"
                : "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer",
                handlePagination: (pageNumber:number) => onChangePage(pageNumber)
            });
        }
        setPaginationButtons(buttonsArray);
    }
 }

  useEffect(()=>{
    setCathalog(booksPerPages)
    getInformationCathalog()
    setSearchParams(`?page=${page}`);
  },[searchParams,page])
 
  useEffect(()=>{
    createPaginationButtons();
  },[cathalog,page])   

    return { booksPerPages, paginationButtons };
}
