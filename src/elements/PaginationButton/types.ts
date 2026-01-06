export type PaginationNumberPage = {
  numberPageIndex:number;
  paginationClassName:"w-8 h-8 rounded-md border-2 border-black text-white-font bg-main-black text-font-h4-20 text-center cursor-pointer" | 
  "w-8 h-8 rounded-md border-2 border-black text-main-black text-font-h4-20 text-center cursor-pointer";
  handlePagination:(pageNumber:number)=> void;
}