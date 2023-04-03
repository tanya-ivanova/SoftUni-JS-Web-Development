import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api';

export const CharacterFilms = () => {
    const [films, setFilms] = useState([]);
    const { characterId } = useParams();

    //fetch something like /people/${characterId}/films but there is no such thing
    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results);
            });
    }, [characterId]);
    
    return (
        <>
            <h1>Character Films</h1>

            {films.map(x => {
                const filmId = x.url.split('/').filter(x => x).pop();

                return <li key={filmId}>
                    <Link to={`/films/${filmId}`}>
                        {x.title}
                    </Link>
                </li>
            })}
        </>
    );
};