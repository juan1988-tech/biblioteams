import CathalogBook from "@/components/Cathalog/CathalogBook/CathalogBook";
import CathalogSearchBar from "@/components/Cathalog/CathalogSearchBar/CathalogSearchBar";
import styles from './cathalog.module.css';

export default function Page() {
    return(
        <>
         <CathalogSearchBar/>
         <main className={styles.Cathalog__book_container}>
            <CathalogBook/>
         </main>
        </>
    ) 
  }