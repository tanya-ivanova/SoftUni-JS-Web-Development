import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from "../../contexts/GameContext";

export const GameOwner = ({
    children
}) => {
    const {gameId} = useParams();
    const {getGame} = useContext(GameContext);
    const {userId} = useContext(AuthContext);

    const currentGame = getGame(gameId);

    if(currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/catalog/${gameId}`} replace />
    }

    return children ? children : <Outlet />
};