import ClientReviews from "./OurStory/ClientReviews";
import Mission from "./OurStory/Mission";
import Quotes from "./OurStory/Quotes";
import SmallTeams from "./OurStory/SmallTeams";
import TeamButton from "./OurStory/TeamButton";
import TeamInfo from "./OurStory/TeamInfo";
import TeamIntro from "./OurStory/TeamIntro";
import WhyChooseUsSection from "./OurStory/WhyChooseUsSection";
import NewCard from "./UI/NewCard";


const OurStory = () => {
    return (
        <>
            <Mission />
            <WhyChooseUsSection />
            {/* <NewCard /> */}
            <TeamIntro />
            <TeamInfo />
            <SmallTeams />
            <Quotes />
            {/* <TeamButton /> */}
            
            <ClientReviews />
        </>
    );
};

export default OurStory;
