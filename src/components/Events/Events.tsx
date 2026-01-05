import type { JSX } from "react";
import { EventCardElements } from "./data"
import type { EventCardProps } from './types';

const EventCard:React.FC<EventCardProps> = ({topic,eventTittle,eventDate,eventSchedule,eventDescription,eventImageClassName}) =>{
    return(
    <div className="w-full h-full p-3 border-2 border-black rounded-xl flex flex-col max-cellphone-hor:grid max-cellphone-hor:grid-cols-[265px_1fr] max-cellphone-hor:p-1.5 gap-3
    max-cellphone:flex max-cellphone:flex-col">
        <header className={eventImageClassName}>
            <p className="text-white bg-black rounded-md ml-auto w-22 h-6 text-center flex items-center justify-center text-font-p">{topic}</p>
        </header>
        <section>
          <h3 className="text-xl font-bold text-tittle-blue ">{eventTittle}</h3>
          <p className="text-font-p">{eventDescription}</p>
          <p className="inline-flex text-font-p max-cellphone-hor:flex pt-2"><img className="mr-1.5 w-6 h-6" src="/assets/black-calendar-icon.svg" alt="icono-evento"/>{eventDate}</p>
          <p className="inline-flex text-font-p max-cellphone-hor:flex pt-2"><img className="mr-1.5 w-6 h-6" src="/assets/black-clock-icon.svg" alt="icono-fecha"/>{eventSchedule}</p>
        </section>
    </div>
    )
}

export default function Events():JSX.Element{
  return (
    <section className="w-full">
       <div className="w-[95%] mx-auto max-w-344 max-cellphone-hor:w-[90%]"> 
        <h1 className="font-bold text-font-h1-32 text-tittle-blue text-center mt-4 max-cellphone-hor:text-font-h3-24">Eventos</h1> 
        <article className="h-auto w-full grid grid-cols-4 gap-5 mt-4 max-cellphone-hor:flex max-cellphone-hor:flex-col max-cellphone-hor:mt-2
        max-tablet-hor:grid max-tablet-hor:grid-cols-2 max-tablet-hor:grid-rows-2 max-tablet-hor:w-150 max-tablet-hor:mx-auto max-cellphone-hor:w-full">
          {EventCardElements.map((event)=>(<EventCard 
                topic={event.topic}
                eventTittle={event.eventTittle}
                eventImageClassName={event.eventImageClassName} 
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
                eventSchedule={event.eventSchedule}
                />))}
        </article>
       </div>
    </section>
  )
}
