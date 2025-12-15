import { workshopCardList } from "./data"

const WorkShops:React.FC = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 h-full">
       {
          workshopCardList.map((workshop)=>(
            <article className={workshop.className.classNameElement}>
              <h3 className="font-bold text-font-h2-28">{workshop.tittle}</h3>
              <p className="text-font-h3-24 w-2/3" >{workshop.description}</p>
              <p className="text-font-h3-24">{workshop.schedule}</p>
              <button className={workshop.className.classNameButton}>{workshop.button}</button>
            </article>
          ))
       }   
    </section>
  )
}

export default WorkShops
