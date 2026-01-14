import { useState } from "react"
import { Link } from "react-router-dom"

export default function LogIn() {
  const [showPassword,setShowPassword] = useState<boolean>(false)  

  return (
    <main className="flex flex-col  mx-auto mt-16 w-93 max-cellphone:w-11/12">
      <h1 className="text-tittle-blue text-font-h2-28 font-bold text-center">Ingresa</h1>
      <p className="text-center">Inicia seción con tu usuario y contraseña, para poder acceder al catálogo de Biblioteams</p>
      <form className="w-full flex flex-col rounded-md border-2 border-black p-3 mt-4">
        <label className="flex flex-col w-full">
            <span className="text-tittle-blue font-bold">Correo</span>
            <input type="email" name="email" className="appearance-none mt-2 w-full h-9 border-2 border-black rounded-md" autoComplete="email"/>
        </label>
        <label className="flex flex-col w-full mt-4 relative">
            <span className="text-tittle-blue font-bold">Contraseña</span>
            <input type={showPassword?"text":"password"} name="password" className="appearance-none mt-2 w-full h-9 border-2 border-black rounded-md" autoComplete="password"/>
            <button className="w-6 h-6 absolute right-2 top-9"
                type="button"
                onMouseDown={()=>setShowPassword(true)}
                onMouseUp={()=>setShowPassword(true)}
                onClick={()=>setShowPassword(true)}
                onMouseLeave={()=>setShowPassword(false)}
                >
                <img src={showPassword?"/assets/show-password.svg":"/assets/hide-password.svg"}/>
            </button>
        </label>  
        <button type="submit" className="h-9 block text-center w-54 bg-green-light-button rounded-full border-black border-2 mt-4 mx-auto
        hover:bg-main-black hover:text-white-font hover:duration-400">Iniciar seción</button>
      </form>
      <p className="mt-4 text-center">¿Eres un usuario nuevo?</p>
      <section className="grid grid-cols-[1fr_70px_1fr] items-center mt-3 gap-x-2">
        <hr className="align-middle border border-black"/>
        <Link to="/registrate" className="text-tittle-blue font-bold ">Regístrate</Link>
        <hr className="align-middle border border-black"/>
      </section>
    </main>
  )
}
