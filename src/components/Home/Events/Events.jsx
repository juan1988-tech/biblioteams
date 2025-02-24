"use client"
import React from 'react';
import styles from './Events.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/app/theme-provider';

const EventTarget = ({event__category,event__label,event__tittle,event__description,event__book_date,event__book_schedule}) => {
  const { theme } = React.useContext(ThemeContext); 

  return (
    <article className={styles.EventTarget}>  
      <header className={event__label}>
         <p className={styles.Event__category}>{event__category}</p>   
      </header>
      <section>
        <h1 className={styles.Event__tittle}>{event__tittle}</h1>
        <p className={styles.Event__description}>{event__description}</p>
        <div className={styles.Event__book_date}><Image
            src={(theme==='light')?'/black-calendar-icon.svg':'/white-calendar-icon.svg'} 
            width={24}
            height={24}
            alt={`${event__tittle}-evento`}
        /> <p>{event__book_date}</p></div>
        <div className={styles.Event__book_schedule}><Image
            src={(theme==='light')?"/black-clock-icon.svg":"/white-clock-icon.svg"}
            width={24}
            height={24}
            alt={`${event__tittle}-evento`}
        /> <p>{event__book_schedule}</p></div>
      </section>
    </article>
  )
}

export default function Events() {
  return (
    <section className={styles.Events}>
        <h1 className={styles.Events__tittle}>Eventos</h1>
        <article className={styles.Events__container}>
        <EventTarget
            event__category="Teatro"
            event__label={`${styles.Event__image} ${styles.Event__image_1}`}
            event__tittle="Bogotá crónica"
            event__description="Obra de teatro, donde muestra la relación de la arquitectura y la ciudad y su forma"
            event__book_date="14 de febrero de 2025"
            event__book_schedule="09:00 a.m. - 10:30 a.am"
        />
        <EventTarget
            event__category="Ciencia"
            event__label={`${styles.Event__image} ${styles.Event__image_2}`}
            event__tittle="Mujeres en la ciencia"
            event__description="Exposición de pintura en la que se ven la contribución de las mujeres en la ciencia"
            event__book_date="21 de febrero de 2025"
            event__book_schedule="09:00 a.m. - 10:30 a.am"
        />
        <EventTarget
            event__category="Cine"
            event__label={`${styles.Event__image} ${styles.Event__image_3}`}
            event__tittle="Proyectando miradas"
            event__description="A través de lo audiovisual conmemoramos el día mundial a los humedales"
            event__book_date="05 de marzo de 2025"
            event__book_schedule="09:00 a.m. - 10:30 a.am"
        />
        <EventTarget
             event__category="Literatura"
             event__label={`${styles.Event__image} ${styles.Event__image_4}`}
             event__tittle="Proyectando miradas"
             event__description="Sesión de juegos para ver la ciencia y la naturaleza desde las voces de las niñas"
             event__book_date="15 de marzo de 2025"
             event__book_schedule="09:00 a.m. - 10:30 a.am"
        />
        </article>
    </section>
  )
}
