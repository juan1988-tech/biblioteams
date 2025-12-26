//tipo para cada elemento label del sisitema de filtros
export interface FilterElementProps {
    value: string,
    name: string
}

type labelParameter = "Autor" | "Año" | "Disponibilidad"; 

//tipo para el componente de cada parametro en el componente de filtro de libros
export interface FilterParameterProps {
    label: labelParameter,
    children: FilterElementProps[],
}
