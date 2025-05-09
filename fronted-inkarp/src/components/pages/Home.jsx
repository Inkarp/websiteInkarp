import React from 'react';
import HeroSection from './Home/HeroSection';
import Offerings from './Home/Offerings';
import NewsEvents from './Home/NewsEvents';
import Principles from './Home/Principles';
import PickProduct from './Home/PickProduct';
import NewAbout from './Home/NewAbout';
import ExperienceSection from './Home/ExperienceSection';
import InsightGrid from './Home/InsightGrid';



const Home = () => {
    return (
        <>
            <HeroSection />
            <PickProduct />
            <NewAbout />
            <ExperienceSection />
            <Principles />
            <Offerings />
            <InsightGrid /> 
            <NewsEvents />
        </>
    );
};

export default Home;