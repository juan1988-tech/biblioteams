import React from 'react'
import { imageHeroList } from "../../elements/ImageHero/data"
import ImageHero from "../../elements/ImageHero/ImageHero"

export default function Hero():React.ReactNode {
  return (
    <section className="h-full w-full bg-white-font">
      <div className="w-[95%] mx-auto flex max-tablet:w-full">
        <article className="flex w-11/12 mx-auto max-w-286 max-tablet-hor:w-full max-tablet-hor:mx-0">
          <div className="w-183 h-156 grid grid-cols-[90px_127px_96px_76px_146px_1fr] grid-rows-[169px_89px_149px_1fr] 
          max-tablet-hor:grid-cols-[68px_195px_118px_1fr] max-tablet-hor:w-130 max-tablet:w-2/4 max-tablet:grid-cols-[96px_87px_1fr]
          ">
            {imageHeroList.map((book)=>(
              <ImageHero src={book.src} className={book.className} alt={book.alt}/>
            ))}
            <h1 className="text-font-big-64 text-tittle-blue font-semibold col-start-2 col-end-5 row-start-2 row-end-3 justify-self-end max-tablet-hor:col-start-1 max-tablet-hor:col-end-3 max-tablet-hor:justify-self-start 
            max-tablet-hor:text-font-big-40 max-tablet-hor:self-end">Biblioteams</h1>
            <p className="text-font-big-52 font-medium col-start-2 col-end-7 row-start-3 row-end-4 max-tablet-hor:col-start-1 max-tablet-hor:col-end-4 max-tablet-hor:text-font-h1-32">Un espacio de formación para niños y jóvenes</p>
          </div>
          <figure className="w-125 h-125 max-tablet-hor:w-102.5 max-tablet-hor:h-102.5 max-tablet:self-center max-tablet:w-82.5 max-tablet:h-82.5">
            <img src="/src/assets/images/hero/libro-hero.png" alt="Libro Hero" className="w-full h-full max-tablet-hor:" />
          </figure>
        </article>
      </div>
    </section>
  )
}
