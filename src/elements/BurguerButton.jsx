import styles from './BurguerButton.module.css';

export default function BurguerButton({buttonBurguer,setButtonBurguer}) {
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
