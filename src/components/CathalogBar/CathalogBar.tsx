export default function CathalogBar() {
  return (
    <section className="h-76.5 flex flex-col bg-[url(/src/assets/images/searchbar/background-search-bar.jpg)] bg-no-repeat bg-cover justify-center max-tablet-hor:w-full max-tablet-hor:h-76.25 max-tablet-hor:bg-[url(/src/assets/images/searchbar/background-search-bar-tablet.jpg)]">
        <article className="flex flex-col h-auto w-111.5 max-w-111.5 mx-auto  max-cellphone:w-11/12">
        <h1 className="text-font-h1-32 text-center font-semibold text-light-blue-button max-tablet-hor:text-font-h2-28 max-cellphone-hor:text-font-h3-24">Encuentra tu libro aquí</h1>
        <input className="w-full h-8 rounded-full bg-[rgba(0,0,0,.4)] border-2 border-white-font px-10 placeholder-white-font text-font-p mx-auto text-white-font" 
            type="text"
            placeholder="Busca tu libro por autor, género o tema"
        />
        </article>
    </section>
  )
}
