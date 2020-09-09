import React from 'react';

import Card from './Cards';
import SData from './SData';

// const favSeries = "amazon";

const App = () => {
    return (
        <>
            <h1 className="heading__style">List of top 5 Netflix series in 2020</h1>
            {SData.map((val) => {
                return (
                    <Card
                        key={val.id}
                        imagesrc={val.imgscr}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                )
            })}
        </>
    )
}

export default App;