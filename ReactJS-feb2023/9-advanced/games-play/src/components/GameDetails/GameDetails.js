import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";

import { gameServiceFactory } from '../../services/gameService';
import * as commentService from '../../services/commentService';

import { AddComment } from "./AddComment/AddComment";
import { gameReducer } from "../../reducers/gameReducer";

export const GameDetails = () => {
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);    

    const { gameId } = useParams();
    //const [game, setGame] = useState({});
    const [game, dispatch] = useReducer(gameReducer, {});    

    const gameService = useService(gameServiceFactory);

    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentService.getAll(gameId)
        ])        
            .then(([gameData, comments]) => {
                const gameState = {
                    ...gameData,
                    comments
                };

                dispatch({type: 'GAME_FETCH', payload: gameState});

                //setGame(gameState);
            })
    }, [gameId]);

    const onCommentSubmit = async (values) => {
        const result = await commentService.create(gameId, values.comment);        

        dispatch({
            type: 'COMMENT_ADD',
            payload: result,
            userEmail
        });

        // setGame(state => ({
        //     ...state,
        //     comments: [...state.comments, {
        //         ...result,
        //         author: {email: userEmail}
        //     }]
        // }));        
    };

    const onDeleteClick = async () => {
        await gameService.delete(game._id);

        navigate('/catalog');
    };

    const isOwner = game._ownerId === userId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments && game.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {game.comments?.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>


                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>

            {isAuthenticated && !isOwner && <AddComment onCommentSubmit={onCommentSubmit} />}

        </section>
    );
};