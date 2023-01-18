import { Book } from "./Book";


export const BookList = (props) => {
    /*const bookElements = [];

    for (const book of props.books) {
        bookElements.push(
            <li>
                <article>
                    <h2>{book.title}</h2>
                    <div>Year: {book.year}</div>
                    <div>Price: {book.price}</div>
                    <footer>Author: {book.author}</footer>
                </article>
            </li>
        );
    }*/

    // const bookElements = props.books.map(book => (
    //     <li>
    //         <article>
    //             <h2>{book.title}</h2>
    //             <div>Year: {book.year}</div>
    //             <div>Price: {book.price}</div>
    //             <footer>Author: {book.author}</footer>
    //         </article>
    //     </li>
    // ));

    // const bookElements = props.books.map(book => <Book 
    //     title={book.title} 
    //     year={book.year}
    //     price={book.price}
    //     author={book.author}
    // />);

    //const bookElements = props.books.map(book => <Book data={book} />);

    

    const bookElements = props.books.map(book => <Book {...book} />);

    // return (
    //     <ul>
    //         {props.books.map(book => <Book {...book} />)}
    //     </ul>
    // );

    return (
        <ul>
            {bookElements}
        </ul>
    );
};