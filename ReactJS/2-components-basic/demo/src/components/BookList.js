import { Book } from "./Book";

export const BookList = (props) => {
    return (
        <ul>
            <li>
                <Book
                    title={props.bookList[0].title}
                    author={props.bookList[0].author}
                    year={props.bookList[0].year}
                    price={props.bookList[0].price}
                />
            </li>
            <li>
                <Book
                    title={props.bookList[1].title}
                    author={props.bookList[1].author}
                    year={props.bookList[1].year}
                    price={props.bookList[1].price}
                />
            </li>
            <li>
                <Book
                    title={props.bookList[2].title}
                    author={props.bookList[2].author}
                    year={props.bookList[2].year}
                    price={props.bookList[2].price}
                />
            </li>

        </ul>
    );
};