//type availableState = "Disponible para préstamo" | "No Disponible"

export interface CathalogBook {
    title:string,
    author: string | string[],
    editorial: string,
    year:string | number,
    topics: string | string[],
    availability: string,
    description?: string,
    image?:string,
    index:string|number,
    favoriteMark?: () => void,
    shareBook?: () => void,
    reserve?: () => void
}

type classNameCardOptions = "col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5 mt-4" | "col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5"

export interface CathalogBookCard extends CathalogBook {
    classNameCard: classNameCardOptions
}