'use client'
import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '@/app/theme-provider';
import useContext from 'react'

export default function Sidebar() {
 const { theme,setTheme,buttonBurguer } = React.useContext(ThemeContext);
 
 const onChangeLayout = (e) =>{
        e.preventDefault();
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return (
        <section className={(buttonBurguer===true)?styles.Sidebar__hidden:styles.Sidebar}>
            <h1 className={styles.Sidebar__tittle}>Biblioteams</h1>  
            <Link href={'/cathalog'}>Catálogo</Link>
            <Link href={''}>Eventos</Link>
            <Link href={''}>Regístrate</Link>
            <button className={styles.Sidebar__theme_button} onClick={onChangeLayout}>
                <div className={(theme==='light')?styles.Sidebar__theme_button_icon:styles.Sidebar__theme_button_icon_move}><Image
                    src={(theme==='light')?'/solar_sun-broken.svg':'/line-md_moon.svg'}
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
