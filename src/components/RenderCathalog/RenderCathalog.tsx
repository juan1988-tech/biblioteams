import { useEffect, useMemo, useState } from "react";
import type { CathalogBook } from "../../types/cathalog-env";
import CathalogCard from "../../elements/CathalogCard/CathalogCard";
import { onLoadingCathalog } from "../../utils/onLoadingCathalog";
import { useSearchParams } from "react-router-dom";
import PaginationButton from "../../elements/PaginationButton/PaginationButton";  

type PaginationNumberPage = {
  numberPageIndex:number;
  paginationClassName:"w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer" | 
  "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer";
  handlePagination?:(pageNumber:number)=> void;
}

const RenderCathalog:React.FC = () =>{
  let [searchParams, setSearchParams] = useSearchParams();

  const [cathalog,setCathalog]  = useState<CathalogBook[]>([]);
  const [page,setPage] = useState<number>(1);
  const [paginationButtons,setPaginationButtons] = useState<PaginationNumberPage[]>([]);

  const getInformationCathalog = async () =>{
    const request = await fetch('/dummy/cathalogBook.json');
    const data = await request.json();
    
    try {
      if(data){
        setCathalog(data);
      }  
    } catch (error) {
      console.error(`Error al cargar los datos: ${error}`)
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

    return(
      <section className="flex flex-col col-span-9 row-start-3 row-end-4 max-tablet-hor:col-span-3 max-tablet:col-span-4 
      max-tablet:row-start-4 max-tablet:row-end-5 max-w-169.5">
        {booksPerPages && booksPerPages.map((book)=>(
          <CathalogCard 
            title={book.title}
            author={book.author}
            editorial={book.editorial}
            year={book.year}
            topics={book.topics}
            availability={book.availability}
            index={book.index}
          />
        ))}

      {/* botones de paginación */}  
      <article className="inline-flex mx-auto gap-4 mt-6">
      {(paginationButtons.length>0) && paginationButtons.map((page)=>(
        <PaginationButton 
            numberPageIndex={page.numberPageIndex} 
            paginationClassName={page.paginationClassName}
            handlePagination={page.handlePagination!}
        />
      ))}      
       </article> 
      </section>
    )
}

//componente del catálogo con la estructura de carga
const RenderCathalogLoading = onLoadingCathalog(RenderCathalog);

export default RenderCathalogLoading;