export default function CathalogBar() {
  return (
    <section className="h-76.5 flex flex-col bg-[url(/src/assets/images/searchbar/background-search-bar.jpg)] justify-center">
        <article className="flex flex-col h-auto">
        <h1 className="text-font-h1-32 text-center font-semibold text-light-blue-button">Encuentra tu libro aquí</h1>
        <input className="w-111.5 h-8 rounded-full bg-[rgba(0,0,0,.4)] border-2 border-white-font px-10 placeholder-white-font text-font-p mx-auto text-white-font" 
            type="text"
            placeholder="Busca tu libro por autor, género o tema"
        />
        </article>
    </section>
  )
}
