import styles from './CathalogBook.module.css';
import Image from 'next/image';


export default function CathalogBook() {
  return (
    <section className={styles.Cathalog__book}>
      <header className={styles.Cathalog__book_tittle}>
        <h1 className={styles.Cathalog__number}>1</h1>
        <h1>Paranormal Colombia</h1>
      </header>
      <article className={styles.Cathalog__book_information}>
        <h3 className={styles.Cathalog__book_author}>Autor:</h3>
        <p className={styles.Cathalog__book_author_name}>Mario Mendoza</p>
        <h3 className={styles.Cathalog__book_author_publisher}>Editorial:</h3>
        <p className={styles.Cathalog__book_author_publisher_name}>Editorial Planeta Colombia S.A.</p>
        <h3 className={styles.Cathalog__book_author_year}>Año:</h3>
        <p className={styles.Cathalog__book_author_year_name}>2014</p>
        <h3 className={styles.Cathalog__book_topic}>Temas</h3>
        <div className={styles.Cathalog__book_topics_set}>
            <p>Parapsicología y fenómenos paranormales <br/>
            Historia de Colombia</p>
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
                src={'/favourite-black-book.svg'}
            />
        </section>
        <section className={styles.Cathalog__book_actions_button}>
            <p>Compartir</p>
            <Image
                width={12}
                height={12}
                src={'/share-black-whatsapp.svg'}
            />
        </section>
        <section className={styles.Cathalog__book_actions_button}>
            <p>Reservar</p>
            <Image
                width={16}
                height={16}
                src={'/reserve-black-book.svg'}
            />
        </section>
      </article>
    </section>
  )
}

