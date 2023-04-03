import { Routes, Route } from 'react-router-dom';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Catalog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';
import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';
import { EditGame } from './components/EditGame/EditGame';
import { withAuth } from './hoc/withAuth';
import { RouteGuard } from './components/common/RouteGuard';
import { GameProvider } from './contexts/GameContext';
import { GameOwner } from './components/common/GameOwner';

function App() {

    const EnhancedLogin = withAuth(Login);

    return (
        <AuthProvider>
            <GameProvider>
                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<EnhancedLogin />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/create-game' element={
                                <RouteGuard>
                                    <CreateGame />
                                </RouteGuard>
                            } />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:gameId' element={<GameDetails />} />
                            <Route element={<RouteGuard />}>
                                <Route path='/catalog/:gameId/edit' element={
                                    <GameOwner>
                                        <EditGame />
                                    </GameOwner>
                                } />
                            </Route>
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </GameProvider>
        </AuthProvider >
    );
}

export default App;
