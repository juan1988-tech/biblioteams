import { workshopCardList } from "./data"

const WorkShops:React.FC = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 h-full">
       {
          workshopCardList.map((workshop)=>(
            <article className={`h-105 ${workshop.className.classNameElement} bg-no-repeat bg-cover text-white-font ps-4`}>
              <h3 className="font-bold text-font-h2-28 max-tablet:text-font-p">{workshop.tittle}</h3>
              <p className="text-font-h3-24 max-desktop-1280:w-full h-14" >{workshop.description}</p>
              <p className="text-font-h3-24 mt-4 max-tablet:text-font-p">{workshop.schedule}</p>
              <button className={workshop.className.classNameButton}>{workshop.button}</button>
            </article>
          ))
       }   
    </section>
  )
}

export default WorkShops
