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
    //funciones de estado relacionadas con el orden de los libros en el catálogo
    orderCathalog:({cathalog, key}: {cathalog: CathalogBook[]; key: keyof CathalogBook})=>void;
}

export const useRenderCathalog = create<RenderCathalogStore & RenderCathalogActions>((set)=>({
    cathalog: [],
    page:1,
    paginationButtons:[],
    setCathalog: (cathalog: CathalogBook[]) => set({ cathalog }),
    setPage: (page:number) => set({ page }),
    setPaginationButtons: (paginationButtons:PaginationNumberPage[]) => set({ paginationButtons }),
    //funciones de estado relacionadas con el orden de los libros en el catálogo
    //A-Z
    orderCathalog: ({
    cathalog,
    key,
    }: {
        cathalog: CathalogBook[];
        key: keyof CathalogBook;
    }) =>
    set(() => ({
    cathalog: [...cathalog].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA === undefined || valueB === undefined) return 0;
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    }),
  })),
  orderCathalogDesc: ({
  cathalog,
  key,
}: {
  cathalog: CathalogBook[];
  key: keyof CathalogBook;
}) =>
  set(() => ({
    cathalog: [...cathalog].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA === undefined || valueB === undefined) return 0;
      if (valueA < valueB) return 1;
      if (valueA > valueB) return -1;
      return 0;
    }),
  })),
}))

/*
//para descendente (A-z)
orderCathalog({ cathalog, key: "title" });
orderCathalog({ cathalog, key: "author" });
orderCathalog({ cathalog, key: "year" });

//para ascendente (Z-A)
orderCathalogDesc({ cathalog, key: "title" });
orderCathalogDesc({ cathalog, key: "year" });
orderCathalogDesc({ cathalog, key: "author" });

*/