import React from 'react'
// el tipo CathalogBook corresponde a un tipo global, ya que controla la presentación del libro en el catálogo
import type { CathalogBook } from '../../types/cathalog-env'

const CathalogCard:React.FC<CathalogBook> = ({title,author,editorial,year,topics,index}) => {
  if(index===1){
   return (
    <article className='col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5'>
      <header className='flex w-full h-6'>
        <h4 className='w-8 h-full bg-main-black text-white-font rounded-md text-center font-normal'>{index}</h4>
        <h4 className='text-tittle-blue text-font-h4-20 font-bold ml-2'>{title}</h4>    
      </header>
      <div className='grid grid-cols-[1fr_148px] gap-x-1.5'>
        <section className='flex flex-col'>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Autor:</h4>
              <p className='text-font-p text-main-black'>{author}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Editorial:</h4>
              <p className='text-font-p text-main-black'>{editorial}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Año</h4>
              <p className='text-font-p text-main-black'>{year}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Tema(s)</h4>
              <div className='flex flex-col'>
                   {
                    topics && topics.map((topic)=>(<p>{topic}</p>))
                   } 
              </div>
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-1.5 gap-y-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Disponibilidad</h4>
              <div className='flex'>
                <p className='text-font-p text-green-available font-bold'>Disponible</p>
                <p className='text-font-p text-red-unavailable ml-4'>No Disponible</p>
              </div>
            </article>
        </section>
        <section className='flex justify-center items-center'>
           <article className='flex flex-col w-full'>
            <button className='flex items-center justify-between px-2 w-full border-2 border-black rounded-md
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Favorito</p>
                <img  src="/assets/favourite-black-book.svg"/>
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Compartir</p>
                <img  src="/assets/share-black-whatsapp.svg"/>
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Reservar</p>
                <img  src="/assets/reserve-black-book.svg"/>
            </button>
           </article>        
        </section>  
      </div>
    </article>
  )}  
    
  return (
    <article className='col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5 mt-4'>
      <header className='flex w-full h-6'>
        <h4 className='w-8 h-full bg-main-black text-white-font rounded-md text-center font-normal'>{index}</h4>
        <h4 className='text-tittle-blue text-font-h4-20 font-bold ml-2'>{title}</h4>    
      </header>
      <div className='grid grid-cols-[1fr_148px] gap-x-1.5'>
        <section className='flex flex-col'>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Autor:</h4>
              <p className='text-font-p text-main-black'>{author}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Editorial:</h4>
              <p className='text-font-p text-main-black'>{editorial}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Año</h4>
              <p className='text-font-p text-main-black'>{year}</p>  
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Tema(s)</h4>
              <div className='flex flex-col'>
                   {
                    topics && topics.map((topic)=>(<p>{topic}</p>))
                   } 
              </div>
            </article>
            <article className='grid grid-cols-[104px_1fr] gap-x-4 gap-y-4 mt-2'>
              <h4 className='text-font-p font-bold text-tittle-blue text-left'>Disponibilidad</h4>
              <div className='flex'>
                <p className='text-font-p text-green-available font-bold'>Disponible</p>
                <p className='text-font-p text-red-unavailable ml-4'>No Disponible</p>
              </div>
            </article>
        </section>
        <section className='flex justify-center items-center'>
           <article className='flex flex-col w-full'>
            <button className='flex items-center justify-between px-2 w-full border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Favorito</p>
                <img  src="/assets/favourite-black-book.svg"/>
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Compartir</p>
                <img  src="/assets/share-black-whatsapp.svg"/>
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400'>
                <p>Reservar</p>
                <img  src="/assets/reserve-black-book.svg"/>
            </button>
           </article>        
        </section>  
      </div>
    </article>
  )
}

export default CathalogCard
