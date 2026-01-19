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
    orderCathalogAuthorZA: (cathalog: CathalogBook[]) =>
      set(() => {
      const orderedCathalogZA = cathalog.sort(
        (a, b) => {
          if (a.author < b.author) return 1;   // Z → A
          if (a.author > b.author) return -1;
          return 0;
        }
      );
      return { cathalog: orderedCathalogZA };
    })
}))
