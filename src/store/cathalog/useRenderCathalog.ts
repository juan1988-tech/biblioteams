import { create } from "zustand";
import type { CathalogBook } from "../../types/cathalog-env";

interface PaginationNumberPage{
   numberPageIndex:number;
   paginationClassName:"w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer" | 
   "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer";
   handlePagination:(pageNumber:number)=> void;
}

type RenderCathalogStore = {
    cathalog:CathalogBook[];
    page:number;
    paginationButtons:PaginationNumberPage[];
}

type RenderCathalogActions ={
    setCathalog:(cathalog: CathalogBook[])=>void;
    setPage:(page:number)=>void;
    setPaginationButtons:(paginationButtons:PaginationNumberPage[])=>void;
}

export const useRenderCathalog = create<RenderCathalogStore & RenderCathalogActions>((set)=>({
    cathalog: [],
    page:1,
    paginationButtons:[],
    setCathalog: (cathalog: CathalogBook[]) => set({ cathalog }),
    setPage: (page:number) => set({ page }),
    setPaginationButtons: (paginationButtons:PaginationNumberPage[]) => set({ paginationButtons }),
}))

