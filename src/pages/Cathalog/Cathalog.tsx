import React, { useEffect, useState } from "react"
import FilterCathalog from "../../components/FilterCathalog/FilterCathalog"
import type { CathalogBook } from "../../types/cathalog-env";
import CathalogCard from "../../elements/CathalogCard/CathalogCard";
import SelectCathalog from "../../components/SelectCathalog/SelectCathalog";
import { Link, Links } from "react-router-dom";

function onLoadingCathalog<T extends object>(Component: React.ComponentType<T>){
  return(props:T & {loading:boolean})=>{
    const {loading,...rest} = props
    return loading?<p>Cargando Catálogo....</p>:<Component {...rest as T}/>
  }
}
const RenderCathalog:React.FC = () =>{
  const [cathalog,setCathalog]  = useState<CathalogBook[]>([]);
  
  const getInformationCathalog = async () =>{
    const request = await fetch('/dummy/cathalogBook.json');
    const data = await request.json();

    try {
      if(data){
        setCathalog(data);
      }  
    } catch (error) {
      console.error(`Error al cargar los datos: ${error}`)
    }
  }

  useEffect(()=>{
    getInformationCathalog()
  },[])
  
    return(
      <section className="mt-4 flex flex-col">
        {cathalog && cathalog.map((book,index)=>(
          <CathalogCard 
            title={book.title}
            author={book.author}
            editorial={book.editorial}
            year={book.year}
            topics={book.topics}
            availability={book.availability}
            index={index + 1}
          />
        ))}
      </section>
    )
}

const RenderCathalogLoading = onLoadingCathalog(RenderCathalog);

const Cathalog = () => {
  const [loadingCathalog,setLoadingCathalog] = useState(false);
 
  useEffect(()=>{
      if(!RenderCathalogLoading){
    setLoadingCathalog(true);
  }else{
    setLoadingCathalog(false);
    }
  },[])
    
    return (
    <main className="mt-8">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-full">
            <FilterCathalog/>
        </aside>
        <section className="col-span-9">
            <article className="flex">
             <div className="col-span-6 max-w-169.5 grid grid-cols-[148px_1fr]"> 
              <SelectCathalog label="Buscar por" selectName="find-book" selectClassName="flex flex-col w-37 relative" />
              <div className="flex border-2 border-black w-md h-9 mt-6 rounded-full relative px-4 ml-4">
                <input type="text" className="appearance-none w-full h-full outline-none focus:outline-none" placeholder="Resultado libro"/>
                <img src="/public/assets/navbar-dark-loop.svg" className="h-5 w-5 absolute left-[93%] top-1.75"/>
              </div> 
             </div>
             <SelectCathalog label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-37 relative ml-18"/>
            </article>
            <article className="mt-4">
              <div className="flex flex-col">
                <section className="flex">
                  <div className="inline-flex">
                    <p className="text-font-p text-tittle-blue font-bold">Resultado para:</p><p className="text-font-p ml-4">Resultado de libro</p>
                  </div>
                  <div className="inline-flex ml-8">
                    <p className="text-font-p">Total resultado:</p><p className="ml-4 text-font-p text-tittle-blue font-bold">9 de 12 libros</p>
                  </div>
                </section>
                <section className="flex">
                  <p className="text-font-p"><Link className="text-tittle-blue font-bold" to={"/ingresa"}>Ingresa</Link> o <Link to={"/registrate"} className="text-tittle-blue font-bold">Regístrate</Link>, recuerda que para reservar libros debes ser un usuario registrado</p>
                </section>
              </div>
              
            </article>
            <RenderCathalogLoading loading={loadingCathalog}/>
        </section>
      </div>
    </main>
  )
}

export default Cathalog
