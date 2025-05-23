import React from 'react';
import Hero from '../components/pages/Home/Hero';
import PickProduct from '../components/pages/Home/PickProduct';
import WhyChooseUsSection from '../components/pages/Home/WhyChooseUsSection';
import ExperienceSection from '../components/pages/Home/ExperienceSection';
import NewAbout from '../components/pages/Home/NewAbout';
import Principles from '../components/pages/Home/Principles';
import Offerings from '../components/pages/Home/Offerings';
import FeaturedBlogs from '../components/pages/Home/FeaturedBlogs';
import NewsEvents from '../components/pages/Home/NewsEvents';
import Reviews from '../components/pages/Home/Reviews';
import Button from '../components/pages/UI/Button';



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
            {/* <BackgroundVideoSection /> */}
            <Principles />
            <Offerings />  
            {/* <ServiceCarousal /> */}
            <FeaturedBlogs />        
            <NewsEvents />
            <Reviews />
            <Button />
        </>
    );
};

export default Home;