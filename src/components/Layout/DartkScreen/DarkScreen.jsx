"use client"
import React, { useContext } from 'react'
import styles from './DarkScreen.module.css'
import { ThemeContext } from '@/app/theme-provider'

 export default function DarkScreen({buttonBurguer}){
 //const { theme } = useContext(ThemeContext)
 
 if(buttonBurguer===true){
    return (
        <section className={styles.Dark__screen_hidden}>
    
        </section>
      )
 }else{
    return (
        <section className={styles.Dark__screen}>
    
        </section>
    )
 }   
}
