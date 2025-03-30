import Navbar from '../../common/navbar';
import Footer from '../../common/footer';
import BannerCareer from './hero/mainHero';
import Certification from './Cetification/Certification';
import Talent from './Talent/CareerTalent';
import TalentTeam from './OurTeam/LatentTeam';
import TeamCulture from './Culture/TeamCulture';
import Values from './value/Values';
import Benefits from './Benifit/Benifit';
import Pace from './pase/Pace';

const Career = () => {
    return (
        <div>
            <Navbar />
            <BannerCareer />
            <Certification />
            <Talent />
            <TalentTeam />
            <TeamCulture />
            <Values />
            <Benefits />
            <Pace/>
            <Footer />
           
</div>
    )
}

export default Career