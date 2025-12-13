import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <section className="h-full w-full bg-white-font">
        <Header />
        <figure className="w-125 h-125">
          <img src="/images/hero/libro-hero.png" alt="Libro Hero" className="w-full h-full" />
        </figure>
      </section>
    </>
  )
}

export default App
