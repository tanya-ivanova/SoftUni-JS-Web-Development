import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { MainNavigation } from './components/MainNavigation';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/characters' element={<CharacterList />} />
                    <Route path='/characters/:characterId/*' element={<Character />} />
                    <Route path='*' element={<h1>404</h1>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
