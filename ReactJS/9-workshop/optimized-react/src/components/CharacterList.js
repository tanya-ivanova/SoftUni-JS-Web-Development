import { useState, useCallback, useMemo } from "react";
import CharacterItem from "./CharacterItem";

function wait(ms) {
    var start = Date.now(),
    now = start;
    while(now - start < ms) {
        now = Date.now();
    }
}

const CharacterList = ({
    characters
}) => {
    const [favourite, setFavourite] = useState('');

    const selectFavourite = useCallback((name) => {
        setFavourite(name);
    }, []);

    
    const meaningOfLife = useMemo(() => {
        wait(500);
        return 42;
    }, []);

    return (
        <>
            <h2>{favourite || 'Select Favourite'}</h2>
            <h3>{meaningOfLife}</h3>
            <ul>
                {characters.map(x => <CharacterItem
                    key={x.name}
                    name={x.name}
                    onClick={selectFavourite}
                />)}
            </ul>
        </>
    );
}

export default CharacterList;