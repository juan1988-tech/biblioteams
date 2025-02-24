import React from 'react';
import styles from './Workshop.module.css';


const WorkshopClassList =[
  `${styles.Workshop__target} ${styles.Workshop__target_one}`,
  `${styles.Workshop__target} ${styles.Workshop__target_two}`,
  `${styles.Workshop__target} ${styles.Workshop__target_three}`,
  `${styles.Workshop__target} ${styles.Workshop__target_four}`,
]

const WorkshopTarget = ({workshop__tittle,workshop__description,workshop__schedule,workshop__classname_number}) => {
  return (
    <article className={workshop__classname_number}>
      <h1 className={styles.Workshop__tittle}>{workshop__tittle}</h1>
      <p className={styles.Workshop__description}>{workshop__description}</p>
      <p className={styles.Workshop__schedule}>{workshop__schedule}</p>
      <button>Quiero más información</button>
    </article>
  )
}

export default function Workshops() {
  return (
    <section className={styles.Workshops}>
        <WorkshopTarget
            workshop__tittle="Club de lectura Infantil"
            workshop__description="Actividades de fomento de lectura  y actividades lúdicas para niños y jóvenes"
            workshop__schedule="Viernes: 05: 00 p.m. - 06: 00 p.m."
            workshop__classname_number={`${styles.Workshop__target} ${styles.Workshop__target_one}`}
        />
        <WorkshopTarget
            workshop__tittle="Club de Ajedrez"
            workshop__description="Club para fomentar y patrocinar la práctica y la cultura del ajedrez"
            workshop__schedule="Sábado: 09: 00 a.m. - 10: 00 a.m."
            workshop__classname_number={`${styles.Workshop__target} ${styles.Workshop__target_two}`}
        />
        <WorkshopTarget
            workshop__tittle="Pre-icfes"
            workshop__description="Taller con actividades para alcanzar los puntajes de los exámenes de Estado y llegar a las mejores Universidades"
            workshop__schedule="Sábado: 10: 00 a.m. - 11: 00 a.m."
            workshop__classname_number={`${styles.Workshop__target} ${styles.Workshop__target_three}`}
        />
        <WorkshopTarget
            workshop__tittle="Taller de Inglés"
            workshop__description="Actividades de leer, escribir, hablar y escuchar en el idioma Inglés para acceder a muchas oportunidades"
            workshop__schedule="Jueves: 05: 00 p.m. - 06: 00 p.m."
            workshop__classname_number={`${styles.Workshop__target} ${styles.Workshop__target_four}`}
        />
    </section>
  )
}



