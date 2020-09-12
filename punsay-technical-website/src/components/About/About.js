import React from 'react';
import Common from '../Common/Common';
import web from '../../images/about.png';

const About = () => {
    return (
        <>
            <Common 
            imgSrc={web}
            name="Welcome to about page"
            visit="/contact"
            btnName="Contact Now"  />
        </>
    );
};

export default About;