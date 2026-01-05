import React, { useEffect, useState } from "react"
import FilterCathalog from "../../components/FilterCathalog/FilterCathalog"
import type { CathalogBook } from "../../types/cathalog-env";
import CathalogCard from "../../elements/CathalogCard/CathalogCard";
import SelectCathalog from "../../components/SelectCathalog/SelectCathalog";
import { Link } from "react-router-dom";
import CathalogSerachBar from "../../components/CathalogSearchBar/CathalogSerachBar";
import SelectButtonsCathalog from "../../components/SelectButtonsCathalog/SelectButtonsCathalog";
import { onLoadingCathalog } from "../../utils/onLoadingCathalog";
import AsideHeaderFilter from "../../elements/AsideHeaderFilter/AsideHeaderFilter";

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
      <section className="flex flex-col col-span-9 row-start-3 row-end-4 max-tablet-hor:col-span-3 max-tablet:col-span-4 
      max-tablet:row-start-4 max-tablet:row-end-5">
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
    <main className="mt-8 max-tablet-hor:mt-0">
      <AsideHeaderFilter/>
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-3 grid-rows-[64px_48px_1fr]   
      max-tablet-hor:grid-cols-4 max-tablet-hor:h-auto max-tablet:justify-center max-tablet:grid-rows-[64px_72px_64px_1fr] max-tablet:auto-rows-auto
      max-tablet:w-11/12 max-cellphone:grid-rows-[40px_102px_188px_1fr] max-cellphone:">
        <aside className="col-span-3 h-full max-tablet-hor:col-span-1 row-start-3 row-end-4 max-tablet:hidden max-tablet:auto-rows-auto">
          <FilterCathalog/>
        </aside>
        <header className="flex col-span-9 col-start-4 col-end-13 max-tablet-hor:col-start-1 max-tablet-hor:col-end-5
        max-tablet:items-center max-tablet:col-span-4 max-tablet:justify-center max-cellphone:col-span-full">
          <div className="col-span-6 grid grid-cols-[148px_1fr] max-w-111 max-tablet:grid-cols-1 max-tablet:col-span-4 max-tablet:w-2/3
          max-cellphone-hor:w-11/12"> 
          <SelectCathalog label="Buscar por" selectName="find-book" selectClassName="flex flex-col w-37 relative max-tablet:hidden"/>
          <CathalogSerachBar /> 
          </div>
          <SelectCathalog label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-37 relative ml-18 max-tablet-hor:ml-4 max-tablet:hidden"/>
        </header>
        <article className="col-span-9 col-start-4 col-end-13 max-tablet-hor:col-start-1 max-tablet-hor:col-end-5">
            <div className="flex flex-col justify-items-center">
              <section className="flex max-cellphone-hor:flex-col">
                <div className="inline-flex max-cellphone-hor:justify-center">
                  <p className="text-font-p text-tittle-blue font-bold">Resultado para:</p><p className="text-font-p ml-4">Resultado de libro</p>
                </div>
                <div className="inline-flex ml-8 max-cellphone-hor:ml-0 max-cellphone-hor:justify-center">
                  <p className="text-font-p">Total resultado:</p><p className="ml-4 text-font-p text-tittle-blue font-bold">9 de 12 libros</p>
                </div>
              </section>
              <section className="flex text-center">
                <p className="text-font-p"><Link className="text-tittle-blue font-bold" to={"/ingresa"}>Ingresa</Link> o <Link to={"/registrate"} className="text-tittle-blue font-bold">Regístrate</Link>, recuerda que para reservar libros debes ser un usuario registrado</p>
              </section>
              </div>
            </article>
            <SelectButtonsCathalog />  
            <RenderCathalogLoading loading={loadingCathalog}/>
      </div>
    </main>
  )
}

export default Cathalog
