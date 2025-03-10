"use client"

import styles from './Hero.module.css';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className={styles.Hero}>
    <div className={styles.Hero__container}>   
    <article className={styles.Hero__tittle_grid}>
      <h1 className={styles.Hero__first_tittle}>Biblioteams</h1>
      <h3 className={styles.Hero__second_tittle}>Un espacio de formación para niños y jóvenes</h3>
      <Image
        src="/images/hero/iconos-hero.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image}
      />
      <Image
        src="/images/hero/iconos-hero-1.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image_1}
      />
      <Image
        src="/images/hero/iconos-hero-2.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image_2}
      />
       <Image
        src="/images/hero/iconos-hero-3.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image_3}
      />
      <Image
        src="/images/hero/iconos-hero-4.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image_4}
      />
      <Image
        src="/images/hero/iconos-hero-5.png"
        alt="bilbioteams: imágen de hero"
        width={96}
        height={96}
        className={styles.Hero__image_5}
      />
    </article>
    <figure className={styles.Hero__main_image}>
      <Image 
      src="/images/hero/libro-hero.png"
      alt="imagen del hero"
      width={500}
      height={500}
      />
    </figure>
    </div>
  </section>
  )
}

export default Hero
