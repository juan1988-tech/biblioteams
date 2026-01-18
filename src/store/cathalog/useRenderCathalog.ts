import { create } from "zustand";
import type { CathalogBook } from "../../types/cathalog-env";
import type { PaginationNumberPage,RenderCathalogStore,RenderCathalogActions } from "./types";

export const useRenderCathalog = create<RenderCathalogStore & RenderCathalogActions>((set)=>({
    cathalog: [],
    page:1,
    paginationButtons:[],
    setCathalog: (cathalog: CathalogBook[]) => set({ cathalog }),
    setPage: (page:number) => set({ page }),
    setPaginationButtons: (paginationButtons:PaginationNumberPage[]) => set({ paginationButtons }),
    //funciones de estado relacionadas con el orden de los libros en el catálogo
    //A-Z: de menor a mayor
    orderCathalogBooks: ({
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
  //Z-A: de mayor a menors
  orderCathalogBooksDesc: ({
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