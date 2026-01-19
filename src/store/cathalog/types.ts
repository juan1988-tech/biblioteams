import type { CathalogBook } from "../../types/cathalog-env";

export interface PaginationNumberPage{
   numberPageIndex:number;
   paginationClassName:"w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer" | 
   "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer";
   handlePagination:(pageNumber:number)=> void;
}

export type RenderCathalogStore = {
    cathalog:CathalogBook[];
    page:number;
    paginationButtons:PaginationNumberPage[];
}

export type RenderCathalogActions ={
    setCathalog:(cathalog: CathalogBook[])=>void;
    setPage:(page:number)=>void;
    setPaginationButtons:(paginationButtons:PaginationNumberPage[])=>void;
}