import Navbar from '../../common/navbar';
import HeroAbout from './hero/hero';
import AboutContent from './About-content/About-content';
import WorkCertification from './AboutSection3/AboutCertification';
import AboutMission from './aboutmissin/AboutMission';
import AboutLeadership from './About leadership/Leadership';
import AboutWinning from './About-winning/wining';
import Footer from '../../common/footer';
const About = () => {
    return (
        <div>
            <Navbar />
            <HeroAbout />
            <AboutContent/>
            <WorkCertification/>
            <AboutMission/>
            <AboutLeadership/>
            <AboutWinning/>
            <br></br>
            <Footer/>
           
        </div>
    );
};

export default About;