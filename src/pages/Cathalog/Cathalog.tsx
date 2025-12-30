import { useEffect, useState } from "react"
import FilterCathalog from "../../components/FilterCathalog/FilterCathalog"

type availableState = "Disponible" | "No Disponible"

interface cathalogBook {
    title:string,
    author: string | string[],
    editorial: string,
    year:string,
    topics:string[],
    availability: availableState,
    description?: string,
    image?:string,
    favoriteMark?: () => void,
    shareBook?: () => void,
    reserve?: () => void
}

const Cathalog = () => {
  const [cathalog,setCathalog]  = useState<cathalogBook[]>([]);

  const getInformationCathalog = async () =>{
    const request = await fetch('/api/cathalogBook.json');
    const data = await request.json();
    try {
      if(data){
        setCathalog(data);
      }  
    } catch (error) {
      console.error(`Error al cargar los dato: ${error}`)
    }
  }

  useEffect(()=>{
    getInformationCathalog()
  },[])

  console.log(cathalog);
  return (
    <main className="mt-8">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-full">
            <FilterCathalog/>
        </aside>
        <section className="col-span-9">
            <h1>Resto de la página</h1>
        </section>
      </div>
    </main>
  )
}

export default Cathalog
