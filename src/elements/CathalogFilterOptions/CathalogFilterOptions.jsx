"use client"
import styles from './CathalogFilterOptions.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/app/theme-provider';
import { useContext } from 'react';

export default function CathalogFilterOptions() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.Cathalog__filter_options}>
      <p>Filtrar y ordenar búsqueda</p>
      <Image
        width={16}
        height={16}
        src={theme==="light"?"/filter-black-icon.svg":"/filter-white-icon.svg"}
        alt="icono de filtro"
      />
    </section>
  )
}
