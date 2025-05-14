import ClientReviews from "./OurStory/ClientReviews";
import Mission from "./OurStory/Mission";
import Quotes from "./OurStory/Quotes";
import SmallTeams from "./OurStory/SmallTeams";
import TeamButton from "./OurStory/TeamButton";
import TeamInfo from "./OurStory/TeamInfo";
import WhyChooseUsSection from "./OurStory/WhyChooseUsSection";


const OurStory = () => {
    return (
        <>
            <Mission />
            <WhyChooseUsSection />
            <TeamInfo />
            <SmallTeams />
            <Quotes />
            {/* <TeamButton /> */}
            
            <ClientReviews />
        </>
    );
};

export default OurStory;
