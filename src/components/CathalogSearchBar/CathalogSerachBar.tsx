const CathalogSerachBar = () => {
  return (
     <form className="flex border-2 border-black w-full min-w-72 h-9 mt-6 rounded-full relative px-4 ml-4 max-tablet:m-0
     max-cellphone-hor:w-full">
       <input type="text" className="appearance-none w-full h-full outline-none focus:outline-none" placeholder="Resultado libro"/>
       <button className="h-5 w-5 absolute left-[90%] top-1.75 max-cellphone:left-11/12 cursor-pointer">
        <img src="/assets/navbar-dark-loop.svg" />
       </button>
     </form> 
  )
}

export default CathalogSerachBar
