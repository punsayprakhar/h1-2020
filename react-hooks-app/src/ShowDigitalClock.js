import React, { useState } from 'react';

const ShowDigitalClock = () => {

    let time = new Date().toLocaleTimeString();

    const [cTime, setCTime] = useState();

    const upadteTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }

    setInterval(upadteTime,1000);

    return(
        <h1>{cTime}</h1>
    );
}

export default ShowDigitalClock;
