export const Book = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <div>Year: {props.year}</div>
            <div>Price: {props.price}</div>
            <footer>Author: {props.author}</footer>
        </article>
    );
};