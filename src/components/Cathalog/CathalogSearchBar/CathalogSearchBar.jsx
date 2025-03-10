"use client"
import React from 'react';
import Image from "next/image";
import styles from './CathalogSearchBar.module.css';
import { ThemeContext } from '@/app/theme-provider';

export default function CathalogSearchBar() {
  const [filterBars, setFilterBars] = React.useState(false);
  const { theme, setTheme } =React.useContext(ThemeContext);
  

  const onChangeFilterBar = () =>{
    setFilterBars(!filterBars)
    console.log(filterBars)
  }

  return (
    <form className={styles.Cathalog__search_bar}>
    <label className={styles.Cathalog__search_bar_container}>
        <section className={styles.Cathalog__search_bar_layout}>
            <input type="text" placeholder="Buscar por título, autor, género o tema"/>
            <button className={styles.Cathalog__search_bar_button}>
                <Image
                src={theme==="light"?"/navbar-dark-loop.svg":"/navbar-light-loop.svg"} 
                height={20}
                width={20}
                alt={'navbar-logo'}
                />
            </button>
        </section>
    </label>
    <section className={filterBars===false?styles.Cathalog__filter_bar:styles.Cathalog__filter_bar__extended}>
        <header className={styles.Cathalog__filter_tittle} onClick={onChangeFilterBar}>
          <p>Buscar por</p>
          <Image 
            width={12}
            height={12}
            src={theme==="light"?"/ep_arrow-black.svg":"/ep_arrow-white.svg"}
            alt='down-arrow'
          />
        </header>
        <article className={styles.Cathalog__grid_buttons}>
        <label className={styles.Cathalog__filter_selector}>
          <p>Título</p>
          <input type="radio" name="filterBooks" value="tittle"/>
          <span className={styles.Cathalog__radio}></span>
        </label>
        <label className={styles.Cathalog__filter_selector}>
          <p>Autor</p>
          <input type="radio" name="filterBooks" value="author"/>
          <span className={styles.Cathalog__radio}></span> 
        </label>
        <label className={styles.Cathalog__filter_selector}>
          <p>Tema</p>
          <input type="radio" name="filterBooks" value="topic"/>
          <span className={styles.Cathalog__radio}></span>
        </label>
      </article>
    </section>
    <section className={styles.Cathalog__filter_results}>
      <p className={styles.Cathalog__results__tittle}>Resultado para:</p> <p className={styles.Cathalog__results_output}>Resultado de libro</p>
      <p className={styles.Cathalog__results__tittle}>Total resultado:</p> <p className={styles.Cathalog__results_output}>9 de 12 libros</p>
    </section>  
    <section className={styles.Cathalog__filter_options}>
      <p>Filtrar y ordenar búsqueda</p>
      <Image
        width={16}
        height={16}
        src={theme==="light"?"/filter-black-icon.svg":"/filter-white-icon.svg"}
        alt="icono de filtro"
      />
    </section>
    </form>
  )
}
