import Card from "./Home/Card";
import ClientReviews from "./OurStory/ClientReviews";
import Mission from "./OurStory/Mission";
import Quotes from "./OurStory/Quotes";
import SmallTeams from "./OurStory/SmallTeams";
import Team from "./OurStory/Team";
import TeamButton from "./OurStory/TeamButton";
import TeamInfo from "./OurStory/TeamInfo";
import TeamIntro from "./OurStory/TeamIntro";
import TrustedClients from "./OurStory/TrustedClients";
import NewCard from "./UI/NewCard";


const OurStory = () => {
    return (
        <>
            <Mission />                     
            <TeamIntro />
            <TeamInfo />
            <SmallTeams />
            <TrustedClients />
            <Quotes />  
            <ClientReviews />
            {/* <Team /> */}
            {/* <Card />   */}
            {/* <NewCard /> */}
            {/* <TeamButton /> */}
        </>
    );
};

export default OurStory;
