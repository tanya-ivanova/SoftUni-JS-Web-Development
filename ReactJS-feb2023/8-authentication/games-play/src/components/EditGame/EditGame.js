import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm"; 
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";

export const EditGame = ({
    onGameEditSubmit
}) => { 
    const {gameId} = useParams();  
    
    const gameService = useService(gameServiceFactory);

    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    }, onGameEditSubmit);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                changeValues(result);
            })
    }, []);

    
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} onChange={changeHandler} type="number" id="maxLevel" name="maxLevel" min="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
};