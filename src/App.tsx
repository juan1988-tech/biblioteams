import Header from "./components/Header/Header"
import { imageHeroList } from "./elements/ImageHero/data"
import ImageHero from "./elements/ImageHero/ImageHero"

function App() { 
  return (
    <>
    <section className="h-full w-full bg-white-font">
      <div className="w-[95%] mx-auto">
        <Header />
        <article className="flex w-11/12 mx-auto">
          <div className="w-183 h-156 grid grid-cols-[139px_137px_96px_76px_166px_1fr] grid-rows-[169px_89px_149px_1fr]">
            {imageHeroList.map((book)=>(
              <ImageHero src={book.src} className={book.className} alt={book.alt}/>
            ))}
            <h1 className="text-h1-64 text-tittle-blue font-semibold col-start-2 col-end-5 row-start-2 row-end-3 justify-self-end">Biblioteams</h1>
            <p className="text-h2-52 font-medium col-start-2 col-end-7 row-start-3 row-end-4">Un espacio de formación para niños y jóvenes</p>
          </div>
          <figure className="w-125 h-125">
            <img src="/images/hero/libro-hero.png" alt="Libro Hero" className="w-full h-full" />
          </figure>
        </article>
      </div>
    </section>
    </>
  )
}

export default App
