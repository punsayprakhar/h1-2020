import React from 'react';

import Card from './Cards'

import SData from './SData';

const Netflix = () => {
    return (
        <Card
        key={SData[1].id}
        imagesrc={SData[1].imgscr}
        title={SData[1].title}
        sname={SData[1].sname}
        link={SData[1].link}
    />
    )
}

export default Netflix;