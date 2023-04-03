import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App" >
                <main className="App-header">
                    <h1>TODO List</h1>
                    <TaskList />
                </main>
            </div>
        );
    }
}


export default App;
