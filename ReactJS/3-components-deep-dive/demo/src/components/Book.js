// export const Book = (props) => {
//     return (
//         <li>
//             <article>
//                 <h2>{props.data.title}</h2>
//                 <div>Year: {props.data.year}</div>
//                 <div>Price: {props.data.price}</div>
//                 <footer>Author: {props.data.author}</footer>
//             </article>
//         </li>
//     );
// };

import { useState, useEffect } from "react";
//import './Book.css';
import styles from './Book.module.css';


export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const[deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting');
    }, []);

    useEffect(() => {
        console.log('Updating');
    }, [highlighted, deleted]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue';
    }

    if(deleted) {
        return <h2>Deleted</h2>
    }
    

    return (
        <li style={style} className={`${styles["book-item"]} ${styles["other-class"]}`}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: {props.price}</div>
                <footer>
                    <button onClick={clickHandler} >Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span className={styles.author}>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    );
};