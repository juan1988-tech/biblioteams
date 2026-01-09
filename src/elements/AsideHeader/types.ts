export type LinksAsideHeader = {
    link:string,
    name:string
}

export type LinksAsideImageHeader = {
    link:string,
    src:string,
    alt:string,
}

export type AsideHeaderProps = "w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-30 fixed top-0 left-0 transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3"
| "w-2/4 h-full bg-white-font tablet-hor:hidden flex items-center justify-center z-30 fixed top-0 left-[-50%] transition-all duration-1000 max-cellphone:items-start max-cellphone-hor:w-2/3 max-cellphone-hor:left-[-70%]"
