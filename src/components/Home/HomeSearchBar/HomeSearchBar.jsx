import React from 'react';
import styles from './HomeSearchBar.module.css';
import Image from 'next/image';


const HomeSearchBar = () => {
  return (
    <form className={styles.Home__search_bar}>
        <label className={styles.Home__search_bar_container}>
            <span className={styles.Home__search_bar_description}>Encuentra tu libro aquí</span>
            <section className={styles.Home__search_bar_layout}>
                <input type="text" placeholder="Buscar por título, autor, género o tema"/>
                <button className={styles.Home__search_bar_button}>
                    <Image
                    src="/navbar-loop.svg"
                    height={20}
                    width={20}
                    alt={'navbar-logo'}
                    />
                </button>
            </section>
        </label>
    </form>
  )
}

export default HomeSearchBar;
