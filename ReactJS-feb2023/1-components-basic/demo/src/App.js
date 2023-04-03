import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
    const movies = [
        {title: 'Man of Steel', year: '2008', cast: ['Henry Cavil', 'Kevin Kostner']},
        {title: 'Harry Potter', year: '2010', cast: ['Daniel', 'Ema']},
        {title: 'Lord of the Rings', year: '2012', cast: ['Orlando Bloom']},
    ];

    const Heading = (props) => {
        return <h1>Hello from {props.title}</h1>
    }      

    return (
        <div className="App">
            <h1>React demo</h1>

            <Counter canReset />
            <Timer start={0} />

            <header className="App-header">
                <Heading title="React" />                
            </header>
            
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
