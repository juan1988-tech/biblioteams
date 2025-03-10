"use client"
import styles from './CathalogBook.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/app/theme-provider';
import { useContext } from 'react';


export default function CathalogBook({Cathalog__number,Cathalog__name,Cathalog__author,Cathalog__publisher,Cathalog__year,Cathalog__topic_1,Cathalog__topic_2,Cathalog__available}) {
  const { theme } = useContext(ThemeContext);
  return  (
    <section className={styles.Cathalog__book}>
      <header className={styles.Cathalog__book_tittle}>
        <h1 className={styles.Cathalog__number}>{Cathalog__number}</h1>
        <h1>{Cathalog__name}</h1>
      </header>
      <article className={styles.Cathalog__book_information}>
        <h3 className={styles.Cathalog__book_author}>Autor:</h3>
        <p className={styles.Cathalog__book_author_name}>{Cathalog__author}</p>
        <h3 className={styles.Cathalog__book_author_publisher}>Editorial:</h3>
        <p className={styles.Cathalog__book_author_publisher_name}>{Cathalog__publisher}</p>
        <h3 className={styles.Cathalog__book_author_year}>Año:</h3>
        <p className={styles.Cathalog__book_author_year_name}>{Cathalog__year}</p>
        <h3 className={styles.Cathalog__book_topic}>Temas</h3>
        <div className={styles.Cathalog__book_topics_set}>
            <p>{Cathalog__topic_1}<br/>
            {Cathalog__topic_2}</p>
        </div>
      </article>
      <article className={styles.Cathalog__book_availabilty}>
        <h3 className={styles.Cathalog__book_available}>Disponible</h3>
        <h3 className={styles.Cathalog__book_not_available}>No disponible</h3>
      </article>
      <article className={styles.Cathalog__book_actions}>
        <section className={styles.Cathalog__book_actions_button}>
            <p>Favorito</p>
            <Image
                width={12}
                height={12}
                src={theme==="light"?"/favourite-black-book.svg":"/favourite-white-book.svg"}
                alt="icono de libro"
            />
        </section>
        <section className={styles.Cathalog__book_actions_button}>
            <p>Compartir</p>
            <Image
                width={12}
                height={12}
                src={theme==="light"?'/share-black-whatsapp.svg':"/share-white-whatsapp.svg"}
                alt="icono de libro"
            />
        </section>
        <section className={styles.Cathalog__book_actions_button}>
            <p>Reservar</p>
            <Image
                width={16}
                height={16}
                src={theme==="light"?'/reserve-black-book.svg':"/reserve-white-book.svg"}
                alt="icono de libro"
            />
        </section>
      </article>
    </section>
  )
}

