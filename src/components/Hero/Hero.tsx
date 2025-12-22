import React from 'react'
import { imageHeroList } from "../../elements/ImageHero/data"
import ImageHero from "../../elements/ImageHero/ImageHero"

export default function Hero():React.ReactNode {
  return (
    <section className="h-full w-full bg-white-font max-tablet-hor:h-157.5 max-cellphone-hor:h-80 max-cellphone:h-auto">
      <div className="w-[95%] mx-auto flex h-full max-cellphone:w-full max-cellphone:mx-0">
        <article className="flex w-11/12 mx-auto max-w-286 max-tablet-hor:w-214 max-tablet-hor:mx-auto max-cellphone:flex-col">
          <div className="w-183 h-156 grid grid-cols-[90px_127px_96px_76px_1fr] grid-rows-[169px_89px_149px_1fr] 
          max-tablet-hor:grid-cols-[159px_102px_1fr] max-tablet-hor:w-2/4 max-tablet:w-2/4 max-tablet:grid-cols-[96px_87px_1fr]
          max-cellphone-hor:grid-rows-[86px_35px_52px_1fr] max-cellphone-hor:h-full max-cellphone:w-full max-cellphone:grid-rows-[99px_28px_69px_1fr]
          max-cellphone:grid-cols-3">
            {imageHeroList.map((book)=>(
              <ImageHero src={book.src} className={book.className} alt={book.alt}/>
            ))}
            <h1 className="text-font-big-64 text-tittle-blue font-semibold col-start-2 col-end-5 row-start-2 row-end-3 justify-self-end max-tablet-hor:col-start-1 max-tablet-hor:col-end-3 max-tablet-hor:justify-self-start 
            max-tablet-hor:text-font-big-40 max-tablet-hor:self-end max-tablet:text-font-big-tittle max-cellphone-hor:text-font-h3-24 max-cellphone:text-center justify-center max-cellphone:col-start-1 max-cellphone:col-end-4
            max-cellphone:w-62.5 max-cellphone:mx-auto">Biblioteams</h1>
            <p className="text-font-big-52 font-medium col-start-2 col-end-7 row-start-3 row-end-4 max-tablet-hor:col-start-1 max-tablet-hor:col-end-4 max-tablet-hor:text-font-h1-32
            max-tablet:text-font-h2-28 max-cellphone-hor:text-font-h4-20 max-cellphone:text-center max-cellphone:justify-center max-cellphone:w-62.5 max-cellphone:justify-self-center">Un espacio de formación para niños y jóvenes</p>
          </div>
          <figure className="w-125 h-125 max-tablet-hor:w-102.5 max-tablet-hor:h-102.5 max-tablet:self-center max-tablet:w-1/2 max-tablet:h-1/2 max-cellphone-hor:w-58.25 max-cellphone-hor:h-58.25 max-cellphone-hor:mx-auto max-cellphone:w-58 max-cellphone:h-58">
            <img src="/assets/images/hero/libro-hero.png" alt="Libro Hero" className="w-full h-full " />
          </figure>
        </article>
      </div>
    </section>
  )
}
