import React from 'react';
import HeroSection from '../HeroSection';
import Principles from './UI/Principles';
import About from './About';
import Slider from './UI/Slider';
import OurCompanies from './OurCompanies';
import OurPrinciples from './OurPrinciples';
import Offerings from './Offerings';

const Home = () => {
    return (
        <>
        <HeroSection/>
        <Principles/>
        <About/>
        <Slider/>
        <OurCompanies/>
        <OurPrinciples/>
        <Offerings/>
        </>
    );
};

export default Home;