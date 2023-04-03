import RandomJoke from './components/RandomJoke';
import ErrorBoundary from './components/common/ErrorBoundary';
import './App.css';

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <header className="App-header">
                    <RandomJoke />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ErrorBoundary>
    );
}

export default App;
