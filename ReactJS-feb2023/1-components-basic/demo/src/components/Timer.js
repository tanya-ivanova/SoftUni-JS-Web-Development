import { useState } from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.start);

    setTimeout(() => {
        //setSeconds(seconds + 1);
        setSeconds(oldSeconds => oldSeconds + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer</h3>
            Time: {seconds}s
        </div>
    );
};

export default Timer;