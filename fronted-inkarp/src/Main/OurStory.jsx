import ClientReviews from "../components/pages/OurStory/ClientReviews";
import Mission from "../components/pages/OurStory/Mission";
import Quotes from "../components/pages/OurStory/Quotes";
import SmallTeams from "../components/pages/OurStory/SmallTeams";
import TeamInfo from "../components/pages/OurStory/TeamInfo";
import TeamIntro from "../components/pages/OurStory/TeamIntro";
import TrustedClients from "../components/pages/OurStory/TrustedClients";
import Button from "../components/pages/UI/Button";



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
            <Button />
            {/* <Team /> */}
            {/* <Card />   */}
            {/* <NewCard /> */}
            {/* <TeamButton /> */}
        </>
    );
};

export default OurStory;
