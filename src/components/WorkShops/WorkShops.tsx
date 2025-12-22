import { workshopCardList } from "./data"

const WorkShops:React.FC = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 h-full max-cellphone-hor:grid-cols-1">
       {
          workshopCardList.map((workshop)=>(
            <article className={`h-105 ${workshop.className.classNameElement} bg-no-repeat bg-cover text-white-font ps-4 max-tablet-hor:h-82.5 flex flex-col max-cellphone:p-2`}>
              <h3 className="font-bold text-font-h2-28 max-cellphone-hor:text-font-h3-24 max-cellphone:text-font-h4-20">{workshop.tittle}</h3>
              <p className="text-font-h3-24 max-desktop-1280:w-full h-14 max-tablet-hor:h-24 max-cellphone-hor:text-font-h4-20 max-cellphone-hor:w-87.5 max-cellphone:w-72 leading-7 max-cellphone:text-font-p">{workshop.description}</p>
              <p className="text-font-h3-24 mt-4 max-tablet:text-font-p max-cellphone-hor:text-font-h4-20 max-cellphone:text-font-p">{workshop.schedule}</p>
              <button className={`block w-[256px] h-12 rounded-full text-font-h4-20 text-center ${workshop.className.classNameButton} text-black border-2 border-black mx-auto hover:bg-main-black hover:text-white-font hover:duration-400 pointer justify-self-end mt-44 max-tablet-hor:mt-18 max-cellphone-hor:w-64 max-cellphone:w-53.5 max-cellphone:text-font-p
                `}>{workshop.button}</button>
            </article>
          ))
       }   
    </section>
  )
}

export default WorkShops
