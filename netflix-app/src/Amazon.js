import React from 'react';

import Card from './Cards'

import SData from './SData';

const Amazon = () => {
    return (
        <Card
        key={SData[2].id}
        imagesrc={SData[2].imgscr}
        title={SData[2].title}
        sname={SData[2].sname}
        link={SData[2].link}
    />
    )
}

export default Amazon;