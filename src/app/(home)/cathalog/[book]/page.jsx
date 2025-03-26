import styles from './book.module.css';
import Image from 'next/image';
import BookActionTarget from '@/components/Books/BookActionTarget/BookActionTarget';
import OtherBooksTarget from '@/components/Books/OtherBooksTarget/OtherBooksTarget';

export default function Page() {
  return ( 
      <main className={styles.Book_main_container}>
      <div className={styles.Book__container_grid}>  
      <section className={styles.Book_main_information}>
        <h1 className={styles.Book_main_tittle}>HTML, CSS y Jquery</h1>
        <figure className={styles.Book_image_container}>
            <Image 
            width={74}
            height={74}
            src='/images/blue-book.png'
            />
        </figure>
        <article className={styles.Book_author}>
          <h3>Autor</h3>
          <p>Jose Antonio Recio García</p>
        </article>
        <article className={styles.Book_year}>
          <h3>Año</h3>
          <p>2018</p>
        </article>
        <article className={styles.Book_publisher}>
          <h3>Editorial</h3>
          <p>Ediciones de la U</p>
        </article>
        <article className={styles.Book_topics}>
          <h3>Temas</h3>
          <div className={styles.Book_topics_dewey}>
            <p>Medios interactivos y diseño de interfaces</p>
            <p>Bibliotecología y ciencias de la información</p>
          </div>
        </article>
        <article className={styles.Books_description}>
          <h3>Descripción</h3>
          <p>Este libro ofrece una experiencia docente acumulada por el autor en sus clases universitarias sobre las tecnologías más populares del desarrollo web: HTML, CSS, y JavaScript/JQuery.</p>
          <p>Gracias a dicha experiencia nos presenta una visión que nos permitirá entender fácilmente cómo encajan las diferentes tecnologías en cualquier sistema web, para luego profundizar en aquellas fundamentales para desarrollar webs de calidad.</p>
          <p>Desde un espíritu pragmático, centrándose en aquellos elementos que son relevantes para el desarrollo, se detallan los contenidos necesarios para crear un sitio web profesional y moderno</p>
        </article>
      </section>
      <BookActionTarget/>
      </div>
      <section className={styles.Books_recommended}>
        <h1 className={styles.Book__main_tittle}>Otros libros relacionados</h1>
        <article className={styles.Other__Books_target}>
          <OtherBooksTarget/>
          <OtherBooksTarget/>  
        </article>
      </section>
      </main> 

  )
}
