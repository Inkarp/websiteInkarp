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
import Hero from './Home/Hero';
import ServiceCarousal from './Home/ServiceCarousal';
import HeroTextAnimation from './Home/HeroTextAnimation';


const Home = () => {
    return (
        <>
            {/* <HeroSection /> */}
             {/* <HeroTextAnimation /> */}
            <Hero />          
            <PickProduct />
            <WhyChooseUsSection />
            <ExperienceSection />
            <NewAbout />
            <Principles />
            <Offerings />  
            {/* <ServiceCarousal /> */}
            <FeaturedBlogs />        
            <NewsEvents />
            <Reviews />
        </>
    );
};

export default Home;