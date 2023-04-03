import { useEffect } from "react";
import styles from './Movie.module.css';

export default function Movie({
    id,
    Title,
    Year,
    Plot,
    Images,
    Director,
    selected,
    onMovieDelete,
    onMovieSelect
}) {
    useEffect(() => {
        console.log(`Movie ${Title} - mounted!`);

        return () => {
            console.log(`Movie ${Title} - unmounted!`)
        };

    }, [Title]);

    useEffect(() => {
        console.log(`Movie ${Title} - updated!`);
    }, [selected, Title]);
    

    return (
        <article className={styles['movie-article']}>
            <h3>{Title}, {Year}</h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={Images} alt={Title} />
                <p>{Plot}</p>
            </main>
            <footer>
                <p>Director: {Director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
        </article>
    );
}