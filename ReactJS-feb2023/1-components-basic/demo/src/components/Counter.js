import { useState } from "react";

const getTitle = (count) => {
    switch(count) {
        case 1:
            return 'First blood';
            break;
        case 2:
            return 'Double kill';
            break;
        case 3:
            return 'Triple kill';
            break;
        case 4:
            return 'Multi kill';
            break;
        case 5:
            return 'Ustoppable';
            break;
        default:
            return 'Counter';
            break;
    }
};

const Counter = (props) => {
    const [counter, setCounter] = useState(0);    

    const incrementCounterHandler = (e) => {
        setCounter(oldCounter => oldCounter + 1);
    };

    const decrementCounterHandler = (e) => {
        setCounter(oldCounter => oldCounter - 1);
    };

    const clearCounterHandler = (e) => {
        setCounter(0);
    };

    return (
        <div>
            <p style={{fontSize: Math.max(counter, 1) + 'em'}}>{counter > 5 ? "Godlike" : getTitle(counter)}: {counter}</p>
            <button onClick={decrementCounterHandler}>-</button>
            {props.canReset && <button onClick={clearCounterHandler}>clear</button>}
            {counter < 10
                ? <button onClick={incrementCounterHandler}>+</button>
                : null
            }

        </div>
    );
};

export default Counter;