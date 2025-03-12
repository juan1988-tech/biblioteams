"use client"
import { useState, useContext } from 'react';
import styles from './CathalogFilterBooks.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/app/theme-provider';

export default function CathalogFilterBooks() {
  const { theme } = useContext(ThemeContext);  
  const [cathalogClassList, setCathalogClasslist] = useState(58.8);
  const [cathalogAuthor,setCathalogAuthor] = useState(styles.Cathalog__author_grid)
  const [cathalogYear, setCathalogYear] = useState(styles.Cathalog__year_grid)
  const [cathalogTopic, setCathalgoTopic] = useState(styles.Cathalog__topic_grid) 
  const [cathalogAvailable, setCathalogAvailable] = useState(styles.Chatalog__available_grid) 

  const changeFilterAuthor = () =>{
       if(cathalogAuthor===styles.Cathalog__author_grid){
            setCathalogAuthor(styles.Cathalog__author_grid_hidden);
            setCathalogClasslist(num=>num-10);
       }else{
            setCathalogAuthor(styles.Cathalog__author_grid);
            setCathalogClasslist(num=>num+10);
       }   
  } 

  const changeFilterYear = () =>{
    if(cathalogYear===styles.Cathalog__year_grid){
         setCathalogYear(styles.Cathalog__year_grid_hidden)   
         setCathalogClasslist(num=>num-10);
    }else{
        setCathalogYear(styles.Cathalog__year_grid)
         setCathalogClasslist(num=>num+10);
    }   
 }

 const changeFilterTopic = () =>{
    if(cathalogTopic===styles.Cathalog__topic_grid){
        setCathalgoTopic(styles.Cathalog__topic_grid_hidden)   
         setCathalogClasslist(num=>num-13);
    }else{
         setCathalgoTopic(styles.Cathalog__topic_grid)
         setCathalogClasslist(num=>num+13);
    }   
 }

const changeFilterAvailability = () =>{
    if(cathalogAvailable===styles.Chatalog__available_grid){
         setCathalogAvailable(styles.Chatalog__available_grid_hidden)   
         setCathalogClasslist(num=>num-4.7);
    }else{
         setCathalogAvailable(styles.Chatalog__available_grid)
         setCathalogClasslist(num=>num+4.7);
    }   
}

  return (
    <form  className={styles.Cathalog__filter_books} style={{height: `${cathalogClassList}rem`}}>
            <h1 className={styles.Cathalog__main_tittle}>Filtro</h1>
            <article className={styles.Cathalog__author_buttons}>
            <header className={styles.Cathalog__filter_header} onClick={changeFilterAuthor}>
                <h3>Autor</h3>
                <Image
                width={14}
                height={14}
                src={theme==="light"?'/ep_arrow-blue-bold.svg':'/ep_arrow-light-blue-bold.svg'}
                alt={'blue bold arrow'}
                />
            </header>
            <section className={cathalogAuthor}>
                <label className={styles.Cathalog__author_selector}>
                    <input type="checkbox" name="author" value="Autor 1"/>
                    <p>Autor 1</p>
                </label>
                <label className={styles.Cathalog__author_selector}>
                    <input type="checkbox" name="author" value="Autor 2"/>
                    <p>Autor 2</p>
                </label>
                <label className={styles.Cathalog__author_selector}>
                    <input type="checkbox" name="author" value="Autor 3"/>
                    <p>Autor 3</p>
                </label>
            </section>
            </article> 
            <article className={styles.Cathalog__year_buttons}>
            <header className={styles.Cathalog__filter_header} onClick={changeFilterYear}>
                <h3>Año</h3>
                <Image
                width={14}
                height={14}
                src={theme==="light"?'/ep_arrow-blue-bold.svg':'/ep_arrow-light-blue-bold.svg'}
                alt={'blue bold arrow'}
                />
            </header>
                <section className={cathalogYear}>
                <label className={styles.Cathalog__year_selector}>
                    <input type="checkbox" name="year" value="Autor 1"/>
                    <p>2004</p>
                </label>
                <label className={styles.Cathalog__year_selector}>
                    <input type="checkbox" name="year" value="Autor 2"/>
                    <p>2018</p>
                </label>
                <label className={styles.Cathalog__year_selector}>
                    <input type="checkbox" name="year" value="Autor 3"/>
                    <p>2022</p>
                </label>
                </section>
            </article>
            <article className={styles.Cathalog__topics_buttons}>
            <header className={styles.Cathalog__filter_header} onClick={changeFilterTopic}>
                <h3>Temas</h3>
                <Image
                width={14}
                height={14}
                src={theme==="light"?'/ep_arrow-blue-bold.svg':'/ep_arrow-light-blue-bold.svg'}
                alt={'blue bold arrow'}
                />
            </header>
            <section className={cathalogTopic}>
                <label className={styles.Cathalog__topic_selector}>
                    <input type="checkbox" name="author" value="Autor 1"/>
                    <p>Descripción tema 1</p>
                </label>
                <label className={styles.Cathalog__topic_selector}>
                    <input type="checkbox" name="author" value="Autor 2"/>
                    <p>Descripción tema 2</p>
                </label>
                <label className={styles.Cathalog__topic_selector}>
                    <input type="checkbox" name="author" value="Autor 3"/>
                    <p>Descripción tema 3</p>
                </label>
            </section>
            </article>
            <article className={styles.Cathalog__topics_buttons}>
            <header className={styles.Cathalog__filter_header} onClick={changeFilterAvailability}>
                <h3>Disponibilidad</h3>
                <Image
                width={14}
                height={14}
                src={theme==="light"?'/ep_arrow-blue-bold.svg':'/ep_arrow-light-blue-bold.svg'}
                alt={'blue bold arrow'}
                />
            </header>
            <section className={cathalogAvailable}>
                <label className={styles.Cathalog__topic_selector}>
                    <input type="checkbox" name="author" value="Autor 1"/>
                    <p>Disponible</p>
                </label>
                <label className={styles.Cathalog__topic_selector}>
                    <input type="checkbox" name="author" value="Autor 2"/>
                    <p>No Disponible</p>
                </label>
                </section>
            </article>
            <button className={styles.Cathalog__clean_search}>Limpiar filtro</button>    
    </form>
  )
}

