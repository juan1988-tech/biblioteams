import { useEffect, useState } from "react";
import type { CathalogBook } from "../../types/cathalog-env";
import CathalogCard from "../../elements/CathalogCard/CathalogCard";
import { onLoadingCathalog } from "../../utils/onLoadingCathalog";
import { useSearchParams } from "react-router-dom";

type PaginationNumberPage = {
  numberPageIndex:number;
  paginationClassName:"w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer" | 
  "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer";
  handlePagination:(pageNumber:number)=> void;
}
 
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

const RenderCathalog:React.FC = () =>{
  let [searchParams, setSearchParams] = useSearchParams();

  const [cathalog,setCathalog]  = useState<CathalogBook[]>([]);
  const [page,setPage] = useState<number>(1);
  
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

  useEffect(()=>{
    getInformationCathalog()
    setSearchParams(`?page=${page}`)
  },[searchParams])

  const indexedCathalog = cathalog.map((book,index)=>({...book, index: index + 1}));

  let booksPerPages = indexedCathalog.slice((page - 1) * 9, page * 9);

  useEffect(()=>{
    setCathalog(booksPerPages)
  },[page])     

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
       <article className="inline-flex mx-auto gap-4 mt-6">
        <PaginationButton 
            numberPageIndex={1} 
            paginationClassName="w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer"
            handlePagination={page=>onChangePage(page)}
        />
        <PaginationButton 
            numberPageIndex={2} 
            paginationClassName="w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer"
            handlePagination={page=>onChangePage(page)}/> 
        <PaginationButton 
            numberPageIndex={3} 
            paginationClassName="w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer"
            handlePagination={page=>onChangePage(page)}/> 
        <PaginationButton 
            numberPageIndex={4} 
            paginationClassName="w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer"
            handlePagination={page=>onChangePage(page)}
            />
       </article> 
      </section>
    )
}

//componente del catálogo con la estructura de carga
const RenderCathalogLoading = onLoadingCathalog(RenderCathalog);

export default RenderCathalogLoading;