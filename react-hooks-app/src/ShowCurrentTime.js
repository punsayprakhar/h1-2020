import React, { useState } from 'react';

const ShowCurrentTime = () => {

    let newTime = new Date().toLocaleTimeString();

    const [cTime, setTime] = useState(newTime);

    let updateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (
        <>
            <h1>{cTime}</h1>
            <button onClick={updateTime}>Get Time</button>
        </>
    );
}

export default ShowCurrentTime;