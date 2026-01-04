export function onLoadingCathalog<T extends object>(Component: React.ComponentType<T>){
  return(props:T & {loading:boolean})=>{
    const {loading,...rest} = props
    return loading?<p>Cargando Catálogo....</p>:<Component {...rest as T}/>
  }
}