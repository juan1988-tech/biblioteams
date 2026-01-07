import React, { useReducer } from 'react'
// el tipo CathalogBook corresponde a un tipo global, ya que controla la presentación del libro en el catálogo
import type { CathalogBookCard } from '../../types/cathalog-env'

type State ={
  favourite:boolean,
  share:boolean,
  reserve:boolean
} 

const IconsState:State ={
  favourite:false,
  share:false,
  reserve:false
}

type Action = { type: "FAVOURITE" } |{ type: "NON-FAVOURITE" } | { type: "SHARE"} | { type: "NON-SHARE"} | { type: "RESERVE"}
| { type: "NON-RESERVE"} 

const reducer = (state:State,action:Action) =>{
  const resetState = Object.fromEntries(
      Object.keys(state).map(key => [key, false])
    ) as State;

  switch (action.type) {
    case "FAVOURITE":
      return{
        ...resetState,
        favourite: true,
      }
    case "NON-FAVOURITE":
      return{
        ...resetState,
        favourite: false,
      }    
    case "SHARE":
      return{
        ...resetState,
          share: true,
      }
    case "NON-SHARE":
      return{
        ...resetState,
          share: false,
      }    
    case "RESERVE":
      return{
        ...resetState,
          reserve: true,
      }
    case "NON-RESERVE":
      return{
        ...resetState,
          reserve: false,
      }    
    default:
      return {
        ...IconsState,
      }
  }
}

/* const experimentalClassCard:CathalogBookCard = {
  title: "El Principito",
  author: "Antoine de Saint-Exupéry",
  editorial: "Gallimard",
  year: "1943",
  topics: ["Fábula", "Aventura"],
  availability: "Disponible",
  classNameCard: "col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5"
} */

//col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5 mt-4 | col-span-6 border-2 border-b-main-black rounded-xl p-3 max-w-169.5
const CathalogCard:React.FC<CathalogBookCard> = ({title,author,editorial,year,topics,index,classNameCard}) => {
  const [state,dispatch] = useReducer(reducer,IconsState)

   return (
    <article className={classNameCard}>
      <header className='flex w-full h-6'>
        <h4 className='w-8 h-full bg-main-black text-white-font rounded-md text-center font-normal'>{index}</h4>
        <h4 className='text-tittle-blue text-font-h4-20 font-bold ml-2'>{title}</h4>    
      </header>
      <div className='grid grid-cols-[1fr_148px] gap-x-1.5 max-cellphone:grid-cols-1'>
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
                <p className='text-[18px] text-green-available font-bold'>Disponible</p>
                <p className='text-font-p text-red-unavailable ml-4'>No Disponible</p>
              </div>
            </article>
        </section>
        <section className='flex justify-center items-center'>
           <article className='flex flex-col w-full max-cellphone:w-44'>
            <button className='flex items-center justify-between px-2 w-full border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400'
            onMouseOver={()=>{dispatch({ type:"FAVOURITE"})}}
            onMouseLeave={()=>{dispatch({ type:"NON-FAVOURITE"})}}
            >
                <p>Favorito </p>
                <img src={state.favourite?"/assets/favourite-white-book.svg":"/assets/favourite-black-book.svg"} />
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400' 
            onMouseOver={()=>{dispatch({ type:"SHARE"})}}
            onMouseLeave={()=>{dispatch({ type:"NON-SHARE"})}}       
            >
                <p>Compartir</p>
                <img src={state.share?"/assets/share-white-whatsapp.svg":"/assets/share-black-whatsapp.svg"} />
            </button>
            <button className='flex items-center justify-between px-2 mt-3.5 border-2 border-black rounded-md cursor-pointer
            hover:bg-main-black hover:text-white-font hover:duration-400'
            onMouseOver={()=>{dispatch({type:"RESERVE"})}}
            onMouseLeave={()=>{dispatch({type:"NON-RESERVE"})}}
            >
                <p>Reservar</p>
                <img  src={state.reserve?"/assets/reserve-white-book.svg":"/assets/reserve-black-book.svg"}/>
            </button>
           </article>        
        </section>  
      </div>
    </article>
  )}  
    
export default CathalogCard
