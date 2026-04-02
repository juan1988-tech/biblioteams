import type { classNameCathalogSearch } from "../../components/CathalogSearchBar/types";

export const classNameHome:classNameCathalogSearch = {
    clasNameForm:`flex border-2 w-150 border-white-font items-center min-w-72 h-10 rounded-full mt-2 relative px-1 max-tablet:m-0
            max-cellphone-hor:w-full justify-between bg-[rgba(0,0,0,.6)] `,
    classNameInput:`appearance-none w-90 h-full outline-none focus:outline-none max-tablet-hor:w-80 px-2
       max-cellphone-hor:w-2/3 placeholder-white-font text-white-font`,
    classNameButton:`cursor-pointer w-7 h-7 rounded-full flex justify-center items-center border-2
         border-[rgba(256,256,256,.7)] bg-black ml-2 transition-colors hover:duration-400`,
     imageSrc:`/assets/Search_alt-white.svg`,
     classNameOutput:`hidden`             
  }
