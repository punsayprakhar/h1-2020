import React from 'react';
import Common from '../Common/Common';
import web from '../../images/home.png';

const Home = () => {
    return (
        <>
            <Common 
            imgSrc={web}
            name="Grow your business with"
            visit="/"
            btnName="Get Started"/>
        </>
    );
};

export default Home;