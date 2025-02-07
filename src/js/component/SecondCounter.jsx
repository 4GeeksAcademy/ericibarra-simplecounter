import React, { useEffect, useState } from "react";

const secondCounter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [counter]);

    return (
        <div className="contador">Contador: {counter}</div>
    );
}

export default secondCounter;