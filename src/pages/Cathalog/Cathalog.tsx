import React, { useEffect, useState } from "react"
import FilterCathalog from "../../components/FilterCathalog/FilterCathalog"
import type { CathalogBook } from "../../types/cathalog-env";
import CathalogCard from "../../elements/CathalogCard/CathalogCard";

function onLoadingCathalog<T extends object>(Component: React.ComponentType<T>){
  return(props:T & {loading:boolean})=>{
    const {loading,...rest} = props
    return loading?<p>Cargando Catálogo....</p>:<Component {...rest as T}/>
  }
}
const RenderCathalog:React.FC = () =>{
  const [cathalog,setCathalog]  = useState<CathalogBook[]>([]);
  
  const getInformationCathalog = async () =>{
    const request = await fetch('/api/cathalogBook.json');
    const data = await request.json();
    try {
      if(data){
        setCathalog(data);
      }  
    } catch (error) {
      console.error(`Error al cargar los dato: ${error}`)
    }
  }

  useEffect(()=>{
    getInformationCathalog()
  },[])

    return(
      <>
        {cathalog && cathalog.map((book,index)=>(
          <CathalogCard 
            title={book.title}
            author={book.title}
            editorial={book.editorial}
            year={book.year}
            topics={book.topics}
            availability={book.availability}
            index={index + 1}
          />
        ))}
      </>
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
             <RenderCathalogLoading loading={loadingCathalog}/>
        </section>
      </div>
    </main>
  )
}

export default Cathalog
