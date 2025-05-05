import React from 'react';
import HeroSection from '../HeroSection';
import Principles from './UI/Principles';
import About from './About';
import Slider from './UI/Slider';
import OurCompanies from './OurCompanies';
import OurPrinciples from './OurPrinciples';
import Offerings from './Offerings';
import Reviews from './UI/Reviews';
import SubBlog from './UI/SubBlog';
import NewsEvents from './UI/NewsEvents';
import AboutSection from './UI/AboutSection';
import NewTeam from './UI/NewTeam';
import Images from './UI/Images';
import WhyChooseInkarp from './UI/WhyChooseInkarp';
import BlogCardList from './UI/BlogCardList';
import NewAbout from './UI/NewAbout';
import MagicImage from './UI/MagicImage';
import Comments from './Home/Comments';
import Carousel from './Home/Carousel';
import LogoBurst from './Home/LogoBurst';

const Home = () => {
    return (
        <>
            <HeroSection />
            <LogoBurst />
            <Carousel />
            <Comments />
            {/* <WhyChooseInkarp/>
            <BlogCardList /> */}
            {/* <NewAbout/> */}
            {/* <MagicImage /> */}
            {/* <Offerings /> */}
            {/* <Principles /> */}
            {/* <About /> */}
            {/* <Images /> */}
            {/* <NewTeam /> */}
            {/* <AboutSection/>
            <Slider /> */}
            {/* <OurCompanies /> */}
            {/* <OurPrinciples /> */}

            {/* <Reviews />
            <SubBlog />
            <NewsEvents /> */}
        </>
    );
};

export default Home;