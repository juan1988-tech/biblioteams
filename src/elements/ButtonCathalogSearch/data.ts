import type { classNamesButton } from "./types"

const classNameCathalog:classNamesButton ={
    classNameSection:`flex w-56 items-center justify-left border-2 border-gray-500 h-7 rounded-full px-2 relative`,
    classNameTittle:`text-font-p bold text-tittle-blue -button font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden`,
    classNameIconImage:`/assets/ep_arrow-black.svg`,
    classNameSelect:"appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1"
  }

  const classNameHome:classNamesButton = {
    classNameSection:`flex w-56 items-center justify-left border-2 border-[rgba(256,256,256,.7)] h-7 rounded-full px-2 relative`,
    classNameTittle:`text-font-p bold text-light-blue-button font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden`,
    classNameIconImage:`/assets/ep_arrow-white.svg`,
    classNameSelect:"appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1 text-white-font"
  }

export {classNameCathalog,classNameHome}