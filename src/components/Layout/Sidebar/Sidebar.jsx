import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({buttonBurguer,setButtonBurguer}) {
  return (
    <section className={(buttonBurguer===true)?styles.Sidebar__hidden:styles.Sidebar}>
        <h1 className={styles.Sidebar__tittle}>Biblioteams</h1>  
        <Link href={''}>Catálogo</Link>
        <Link href={''}>Eventos</Link>
        <Link href={''}>Regístrate</Link>
        <button className={styles.Sidebar__theme_button}>
            <div className={styles.Sidebar__theme_button_icon}><Image
                src={'/solar_sun-broken.svg'}
                width={14}
                height={14}
                alt={'sun-icon'}
            /></div>
        </button>
        <article className={styles.Sidebar__social_media}>
            <Image
                src="/logos_facebook.svg"
                width={28}
                height={28}
                alt={'facebook_biblioteams'}
            />
            <Image
                src="/instagram.svg"
                width={28}
                height={28}
                alt={'instagram_biblioteams'}
            />
        </article>
    </section>
  )
}
