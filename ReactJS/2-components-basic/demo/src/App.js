import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
//import Header from './components/Header';
import { BookList } from './components/BookList';
import {Timer} from './components/Timer';
import {Clicker} from './components/Clicker';
import {Counter} from './components/Counter';

function App() {
    const headerElement = React.createElement(Header, { title: 'Hello from props!' });

    const books = [
        { "title": "Northanger Abbey", "author": "Austen, Jane", "year": 1814, "edition": "Penguin", "price": 18.2 },
        { "title": "War and Peace", "author": "Tolstoy, Leo", "year": 1865, "edition": "Penguin", "price": 12.7 },
        { "title": "Anna Karenina", "author": "Tolstoy, Leo", "year": 1875, "edition": "Penguin", "price": 13.5 },
        { "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year": 1925, "edition": "Harcourt Brace", "price": 25 },
        { "title": "The Hours", "author": "Cunnningham, Michael", "year": 1999, "edition": "Harcourt Brace", "price": 12.35 },
        { "title": "Huckleberry Finn", "author": "Twain, Mark", "year": 1865, "edition": "Penguin", "price": 5.76 }
    ];

    return (
        <div className="App">
            <header className="App-header">
                {/*<Header title="Library" />*/}
                <Header>Library</Header>
                {headerElement}

                <Counter />

                <Clicker />
                
                <Timer start={1} />
                <Timer start={10} />
                <Timer start={90} />

                <BookList bookList={books}/>
                                
                <img src={logo} className="App-logo" alt="logo" />

            </header>
        </div>
    );
}

export default App;
