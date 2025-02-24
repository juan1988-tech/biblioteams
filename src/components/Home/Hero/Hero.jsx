"use client"
import React from 'react'
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '@/app/theme-provider';

const Header =  () => {
 const { theme,setTheme } = React.useContext(ThemeContext);
 
 const onChangeLayout = (e) =>{
  e.preventDefault();
  if(theme==="light"){
      setTheme("dark")
  }else{
      setTheme("light")
  }
}
  
      return (
        <header className={styles.Header}>
          <ul className={styles.Header__list}>
            <li>
              <Link
              href={''}
              >Catálogo</Link>
            </li>
            <li>
              <Link
              href={''}
              >Eventos</Link>
            </li>
            <li>
              <Link
              href={''}
              >Regístrate</Link>
            </li>
            <li>
              <Link
              href={''}
              >Ingresa</Link>
            </li>
            <section className={styles.Header__general_settings}>
            <button className={styles.Header__theme_button} onClick={onChangeLayout}>
                <div className={(theme==='light')?styles.Header__theme_button_icon:styles.Header__theme_button_icon_move}><Image
                    src={(theme==='light')?'/solar_sun-broken.svg':'/line-md_moon.svg'}
                    width={14}
                    height={14}
                    alt={'sun-icon'}
                /></div>
            </button>
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
          
            </section>
          </ul>
        </header>
      )
  }

const Hero = () => {
  return (
    <section className={styles.Hero}>
    <div className={styles.Hero__container}>   
    <Header/>
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
