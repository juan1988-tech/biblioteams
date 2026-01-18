//tipos para las propiedades del componente en general
export type SelectCathalogProps ={
  label:string,
  selectName:string,
  selectClassName:string
}

export type arrowRotation="rotate-0"|"rotate-180"

//tipos para controlar el orden de los libros en el catálogo
export type SelectionState ={
  selection: string,
  arrowOrder: arrowRotation
}

export type SelectionAction = {
  type:"Autor (A-Z)"|"Autor (Z-A)"|"Año (mayor a menor)"|"Año (menor a mayor)"|"Disponible" |"No Disponible"
}