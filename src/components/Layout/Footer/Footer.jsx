import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
        <h1 className={styles.Footer__tittle}>Biblioteams</h1>
        <section className={styles.Footer__first_column}>
        <article className={styles.Footer__social_media}>
            <Image
                src='/instagram.svg'
                width={32}
                height={32}
                alt={'instagram_biblioteams'}
            />
            <Image
                src='/logos_facebook.svg'
                width={32}
                height={32}
                alt={'facebook_biblioteams'}
            />
        </article>
        <h3>Dirección</h3>
        <p>Calle 130c #93 17</p>
        <h3>Horario de atención</h3> 
        <p>Lunes a viernes 06:00 p.m. - 09:00 p.m.</p>
        <p>Sábado 09:00 a.m. - 12:00 a.m.</p>
        </section>
        <section className={styles.Footer__second_column}>
            <h3>Contáctanos</h3>
            <p>correo@micorreo.com</p>
            <h3>WhatsApp</h3> 
            <p>Lunes a viernes 06:00 p.m. - 09:00 p.m.</p>
        </section>
        <section className={styles.Footer__links_developers}>
            <h3>Diseño y desarrollo:</h3>
            <Link href={'https://www.linkedin.com/in/jfranco-webdev/'}>Felipe Guerrero</Link>
            <Link href={'https://www.linkedin.com/in/rodcruzh/'} target='_blank'>Rodrigo Cruz</Link>
            <Link href={'https://www.linkedin.com/in/jfranco-webdev/'} target='_blank'>Juan David Franco</Link>
        </section>
    </footer>
  )
}
