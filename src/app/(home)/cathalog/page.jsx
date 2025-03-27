import CathalogBook from "@/components/Cathalog/CathalogBook/CathalogBook";
import CathalogSearchBar from "@/components/Cathalog/CathalogSearchBar/CathalogSearchBar";
import styles from './cathalog.module.css';
import CathalogFilterBooks from "@/components/Cathalog/CathalogFilterBooks/CathalogFilterBooks";

export default async function Page() {
    const API = "http://localhost:3002/api/book/list-book";
    const request = await fetch(API);
    const data = await request.json();
    const { list } = data
        return(
            <>
            <CathalogSearchBar/>
            <main className={styles.Cathalog__Main_grid}>
             <CathalogFilterBooks/>  
             <section className={styles.Cathalog__book_container}>
                {list.length>0?list.map((book,index)=>{
                    index = index + 1;
                    const bookCollections = {...book,index}

                    return <CathalogBook 
                    Cathalog__number={bookCollections.index}
                    Cathalog__name={bookCollections.name}
                    Cathalog__author={bookCollections.author}
                    Cathalog__publisher={bookCollections.publisher}
                    Cathalog__year={bookCollections.year}
                    Cathalog__topic_1={bookCollections.topic_1}
                    Cathalog__topic_2={bookCollections.topic_2}
                    Cathalog__available={bookCollections.available}
                    Cathalog__link={bookCollections.link}
                /> 
                }):'Oh vaya no encontramos los libros en tu consulta'}
             </section>
             </main>
             </>
        ) 
}