"use client"
import styles from './BookActionTarget.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '@/app/theme-provider';

export default function BookActionTarget() {
const { theme } = React.useContext(ThemeContext);

  return (
    <section className={styles.Book__action_target}>
        <button className={styles.Book__reserve_button}><p>Reservar</p>
          <Image 
            width={16}
            height={16}
            src='/reserve-black-book.svg'
          />
        </button>
        <article className={styles.Book__available_state}>
          <p>Disponible</p>
          <p>No disponible</p>
        </article>
        <article className={styles.Book__profile_options}>
          <p><Link href={'/'}>Ingresa</Link> o <Link href={'/'}>Regístrate</Link></p>
          <p>Recuerda que para reservar o compartir debes ser un usuario registrado</p>
        </article>
         <article className={styles.Book_actions_button}>
                    <p>Favorito</p>
                    <Image
                        width={12}
                        height={12}
                        src={theme==="light"?"/favourite-black-book.svg":"/favourite-white-book.svg"}
                        alt="icono de libro"
                    />
          </article>
          <article className={styles.Book_actions_button}>
            <p>Compartir</p>
            <Image
                width={12}
                height={12}
                src={theme==="light"?'/share-black-whatsapp.svg':"/share-white-whatsapp.svg"}
                alt="icono de libro"
            />
        </article>
    </section>
  )
}

