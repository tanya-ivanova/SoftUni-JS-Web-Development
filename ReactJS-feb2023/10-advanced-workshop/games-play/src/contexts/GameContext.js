import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { gameServiceFactory } from '../services/gameService';

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const [games, setGames] = useState([]);
    const gameService = gameServiceFactory(); //auth.accessToken

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);
        setGames(state => [...state, newGame]);

        navigate('/catalog');
    };

    const onGameEditSubmit = async (values) => {
        const result = await gameService.edit(values._id, values);

        setGames(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
    };

    const getGame = (gameId) => {
        return games.find(game => game._id === gameId);
    };

    const deleteGame = (gameId) => {
        setGames(state => state.filter(game => game._id !== gameId));
    };

    const contextValues = {
        games,
        onCreateGameSubmit,
        onGameEditSubmit,
        getGame,
        deleteGame
    };

    return (
        <GameContext.Provider value={contextValues}>
            {children}
        </GameContext.Provider>
    );
};