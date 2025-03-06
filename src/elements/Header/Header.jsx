"use client"
import { ThemeContext } from '@/app/theme-provider';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import React from 'react'

export const Header =  () => {
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
              href={'/cathalog'}
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
