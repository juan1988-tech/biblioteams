"use client"
import styles from './book.module.css';
import Image from 'next/image';
import BookActionTarget from '@/components/Books/BookActionTarget/BookActionTarget';
import OtherBooksTarget from '@/components/Books/OtherBooksTarget/OtherBooksTarget';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  //obtener la url 
  const pathName = usePathname();
  const [book,setBook] = useState([])
  const descriptionReferernce = useRef(null);

  //sacar el ultimo fragmento de la url
  const match = pathName.match(/[^/]+$/);
  const lastFragment = match[0]
  
  //hacer el llamado de la API por libro
  const requestBook = async () =>{
    const url =  `http://localhost:3002/api/book/one-book/${lastFragment}`;
    await fetch(url)
    .then(data=>data.json())
    .then((item)=>{
      let { book } = item;
      setBook(book)
    })
  }

  useEffect(()=>{
    requestBook();
  },[])
  
  /*transformar el texto de la descripción e insertarlo cómo una cadena html*/
  useEffect(()=>{
    const node = descriptionReferernce.current;
    node.innerHTML = `${book.description}`;
  })
  
  if(book){
    return ( 
      <main className={styles.Book_main_container}>
      <div className={styles.Book__container_grid}>  
      <section className={styles.Book_main_information}>
        <h1 className={styles.Book_main_tittle}>{book.name}</h1>
        <figure className={styles.Book_image_container}>
            <Image 
            width={74}
            height={74}
            alt='imagen de libro'
            src='/images/blue-book.png'
            />
        </figure>
        <article className={styles.Book_author}>
          <h3>Autor</h3>
          <p>{book.author}</p>
        </article>
        <article className={styles.Book_year}>
          <h3>Año</h3>
          <p>{book.year}</p>
        </article>
        <article className={styles.Book_publisher}>
          <h3>Editorial</h3>
          <p>{book.publisher}</p>
        </article>
        <article className={styles.Book_topics}>
          <h3>Temas</h3>
          <div className={styles.Book_topics_dewey}>
            <p>{book.topic_1}</p>
            <p>{book.topic_2}</p>
          </div>
        </article>
        <article className={styles.Books_description}>
          <h3>Descripción</h3>
          <p ref={descriptionReferernce}></p>
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
}
