"use client"
import styles from './CathalogOrderBooks.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/app/theme-provider';
import { useState } from 'react';

export default function CathalogOrderBooks() {
  const { theme } = useContext(ThemeContext);
  const [filterOder, setFilterOrder] = useState(false);
  const [filter,setFilter] = useState('')

  const onChangeFilterOrder = () =>{
    setFilterOrder(!filterOder)
  }

  const onChangeInput = (e) =>{
      setFilter(e.target.value)
  }

  return (
    <section className={filterOder===false?styles.Cathalog__filter_bar:styles.Cathalog__filter_bar__extended}>
        <header className={styles.Cathalog__filter_tittle} onClick={onChangeFilterOrder}>
                  <p>Ordenar por <strong>{filter}</strong></p>
                  <Image 
                    width={12}
                    height={12}
                    src={theme==="light"?"/ep_arrow-black.svg":"/ep_arrow-white.svg"}
                    alt='down-arrow'
                  />
        </header>
        <article className={styles.Cathalog__grid_buttons} >
          <label className={styles.Cathalog__filter_selector}>
            <p>Título</p>
              <input type="radio" name="filterBooks" value="Título" onChange={onChangeInput}/>
              <span className={styles.Cathalog__radio}></span>
           </label>
            <label className={styles.Cathalog__filter_selector}>
               <p>Autor</p>
               <input type="radio" name="filterBooks" value="Autor" onChange={onChangeInput}/>
               <span className={styles.Cathalog__radio}></span> 
            </label>
            <label className={styles.Cathalog__filter_selector}>
                <p>Tema</p>
                <input type="radio" name="filterBooks" value="Tema" onChange={onChangeInput}/>
                <span className={styles.Cathalog__radio}></span>
            </label>
        </article>
    </section>
  )
}
