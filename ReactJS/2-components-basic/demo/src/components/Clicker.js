import { useState } from "react";

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (event) => {
        console.log(event);

        setClicks(oldClicks => oldClicks + 1);
    };

    const dangerClicks = clicks > 20;

    if(clicks > 30) {
        return (
            <h1>Finished clicks</h1>
        );
    }

    return (
        <div>
            {dangerClicks && <h1>Danger clicks</h1>}
            <div>{
                clicks > 10 
                ? <h3>'Medium clicks</h3> 
                : 'Normal clicks'}
            </div>
            <button onClick={clickHandler}>{clicks}</button>
        </div>
    );
};