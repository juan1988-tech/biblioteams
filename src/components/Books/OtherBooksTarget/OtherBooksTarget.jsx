import styles from './OtherBooksTarget.module.css';
import Image from 'next/image';

export default function OtherBooksTarget() {
  return (
    <article className={styles.Other__books_target}>
      <figure className={styles.Other__books_image}>
        <Image
            width={80}
            height={80}
            src={"/images/blue-book.png"}
            alt="Imagen de libro: Biblioteams"
        />
      </figure>
      <section className={styles.Other__books_information}>
        <h1>Dios creó los números</h1>
        <p className={styles.Other__books_author}>Stephen Hawking</p>
        <p className={styles.Other__books_publisher}>Editorial Planeta S.A.</p>
        <p className={styles.Other__books_year}>2006</p>
        <article className={styles.Other__books_topics}>
            <p>Matemáticas</p>
            <p>Historia de las matemáticas</p>
        </article>
      </section>
    </article>
  )
}
