import FilterCathalog from "../../components/FilterCathalog/FilterCathalog"

const Cathalog = () => {
  return (
    <main className="mt-8">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-full">
            <FilterCathalog/>
        </aside>
        <section className="col-span-9">
            <h1>Reso de la página</h1>
        </section>
      </div>
    </main>
  )
}

export default Cathalog
