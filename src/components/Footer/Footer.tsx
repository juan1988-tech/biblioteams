import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white-font mt-4">
      <div className="w-[95%] mx-auto max-w-344">
        <h1 className="text-tittle-blue text-center text-font-h1-32 font-bold">Biblioteams</h1>
        <section className="flex w-18.5 h-7.5 mx-auto">
        <li className="w-7.5 h-7.5 rounded-full list-none">
            <Link className="w-full h-full" to="https://www.facebook.com/jdfranco1988?locale=es_LA" target="_blank">
                <img src="/src/assets/logos_facebook.svg"/>
            </Link>
        </li>
        <li className="w-7.5 h-7.5 rounded-full list-none">
            <Link className="w-full h-full" to="https://www.instagram.com/jfrancoh1988/" target="_blank">
                <img src="/src/assets/instagram.svg"/>
            </Link>
        </li>
        </section>
        <section className="w-4/5 max-w-286 flex justify-between mt-4">
        <ul className="w-82 flex flex-col">
           <h3 className="text-tittle-blue text-font-h4-20 font-semibold">Dirección</h3>
           <li className="text-font-p mt-5">Calle 130c #93-17</li>
           <h3 className="text-tittle-blue text-font-h4-20 font-semibold mt-5">Horario de atención</h3>
           <li className="text-font-p mt-5">Lunes a viernes 06:00 p.m. - 09:00 p.m.</li>
           <li className="text-font-p mt-5">Sábado 09:00 a.m. - 12:00 a.m.</li>
        </ul>
        <ul className="w-82 flex flex-col">
            <h3 className="text-tittle-blue text-font-h4-20 font-bold">Contáctanos</h3>
            <li className="text-font-p mt-5">jfrancoh5@gmail.com</li>
            <h3 className="text-tittle-blue text-font-h4-20 font-bold mt-5">WhatsApp</h3>
            <li className="text-font-p mt-5">3142366069</li>
        </ul>
        </section>
      </div> 
      <section className="bg-light-gray h-16">
        <div className="w-[95%] h-full mx-auto max-w-344 flex justify-between items-center">
            <article className="inline-flex w-70">
                <p className="text-tittle-blue font-bold">Diseño y desarrollo</p>
                <Link to="https://www.linkedin.com/in/jfranco-webdev/" className="ml-3 decoration-0" about="_blank">Juan David Franco</Link>
            </article>
            <article className="text-black">
                Bogotá, 2024
            </article>
        </div>
        </section>   
    </footer>
  )
}

export default Footer
