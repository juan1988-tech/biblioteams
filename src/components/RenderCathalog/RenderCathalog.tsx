import CathalogCard from "../../elements/CathalogCard/CathalogCard";
import { onLoadingCathalog } from "../../utils/onLoadingCathalog";
import PaginationButton from "../../elements/PaginationButton/PaginationButton";  
import { useChargeCathalog } from "./useChargeCathalog";

const RenderCathalog:React.FC = () =>{
  const { booksPerPages, paginationButtons } = useChargeCathalog();

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