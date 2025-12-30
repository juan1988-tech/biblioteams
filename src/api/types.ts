type availableState = "Disponible" | "No Disponible"   

//hacer el tipo de los datos del catálogo de libros
export interface cathalogBook {
    title:string,
    author: string | string[],
    editorial: string,
    year:string,
    topics:string[],
    availability: availableState,
    description?: string,
    image?:string,
    favoriteMark?: () => void,
    shareBook?: () => void,
    reserve?: () => void
}