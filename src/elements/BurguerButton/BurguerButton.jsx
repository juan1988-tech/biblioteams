'use client'
import styles from './BurguerButton.module.css';
import ThemeProvider, { ThemeContext } from "@/app/theme-provider";
import React from 'react';

export default function BurguerButton() {
    const {buttonBurguer,setButtonBurguer} = React.useContext(ThemeContext)

    const clickButton = () =>{
      setButtonBurguer(!buttonBurguer);
    }  

    return (
      <article className={styles.Burguer__button} onClick={clickButton}>
          <div className={styles.Burguer__first_line}></div>
          <div className={buttonBurguer?styles.Burguer__second_line:styles.Burguer__second_line_move}></div>
          <div className={buttonBurguer?styles.Burguer__third_line:styles.Burguer__third_line_move}></div>    
      </article>
    )
}
