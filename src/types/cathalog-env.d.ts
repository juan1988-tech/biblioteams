type availableState = "Disponible" | "No Disponible"

export interface CathalogBook {
    title:string,
    author: string | string[],
    editorial: string,
    year:string,
    topics:string[],
    availability: availableState,
    description?: string,
    image?:string,
    index?:string|number,
    favoriteMark?: () => void,
    shareBook?: () => void,
    reserve?: () => void
}