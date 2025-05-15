import React from 'react';
import HeroSection from './Home/HeroSection';
import Offerings from './Home/Offerings';
import NewsEvents from './Home/NewsEvents';
import Principles from './Home/Principles';
import PickProduct from './Home/PickProduct';
import NewAbout from './Home/NewAbout';
import ExperienceSection from './Home/ExperienceSection';
import Reviews from './Home/Reviews';
import Card from './Home/Card';
import Blogs from './Home/Blogs';
import WhyHome from './Home/WhyHome';
import FeaturedBlogs from './Home/FeaturedBlogs';
import WhyChooseUsSection from './Home/WhyChooseUsSection';


const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <Card /> */}
            <PickProduct />
            <WhyChooseUsSection />
            {/* <WhyHome /> */}
            <ExperienceSection />
            <NewAbout />
            <Principles />
            <Offerings />  
            <FeaturedBlogs />        
            {/* <Blogs />            */}
            <NewsEvents />
            <Reviews />
        </>
    );
};

export default Home;