//tipado para la gestión del estado del hover de los botones de la card
export type State ={
  favourite:boolean,
  share:boolean,
  reserve:boolean
}

export type Action = { type: "FAVOURITE" } |{ type: "NON-FAVOURITE" } | { type: "SHARE"} | { type: "NON-SHARE"} | { type: "RESERVE"}
| { type: "NON-RESERVE"}

//tipado para para los colores según las disponibilidad del libro
export type SelectColorProps= {
    firstColor:string,
    secondColor:string
}