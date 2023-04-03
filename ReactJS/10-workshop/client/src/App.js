import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import { UserProvider } from './contexts/UserContext';
import './App.css';


function App() {    
    
    return (
        <div>
            <Header />
            
            <UserProvider>
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />
                </section>
            </main>
            </UserProvider>

            <Footer />
        </div>
    );
}

export default App;
