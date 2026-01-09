const CathalogSerachBar = () => {
  return (
     <form className="flex border-2 w-150 border-black items-center min-w-72 h-9 mt-6 rounded-full relative px-1 ml-4 max-tablet:m-0
     max-cellphone-hor:w-full justify-between">
       <input type="text" className="appearance-none w-90 h-full outline-none focus:outline-none max-tablet-hor:w-80 px-2
       max-cellphone-hor:w-2/3" placeholder="Resultado libro"/>
       <section className="flex w-56 items-center justify-left border-2 border-gray-500 h-7 rounded-full px-2 relative
       max-tablet-hor:w-35">
        <img src="/assets/ep_arrow-black.svg" className="w-3.5 h-3.5 absolute left-[90%] max-tablet-hor:left-10/12"/>
         <h4 className="text-font-p bold text-tittle-blue font-bold pr-1 h-9/12 flex item-center max-cellphone-hor:hidden" >Buscar por: </h4>
         <select name="find-book" className="appearance-none w-2/4 focus:outline-none min-h-7/12 mt-1 ml-1">    
         <option value="author">Autor</option> 
         <option value="year">Año</option>
         <option value="availability">Disponibilidad</option> 
        </select>  
       </section>
       <button className="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center border-2
         border-gray-500 bg-light-gray ml-0.5">
          <img className="w-4 h-4" src="/assets/navbar-dark-loop.svg" />
        </button>
     </form> 
  )
}

export default CathalogSerachBar
