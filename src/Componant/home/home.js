import Navbar from "../common/navbar";
import HomeSlider from "./HomeSlider/HomeSlider";
import Footer from '../common/footer'
import HomeVideo from "./HomeVideo/HomeVideo";
import ProjectTeam from "./projectTeam/ProjectTeam";
import ArchtechLast from "./AboutArchtech/Archtech";
import Certification from "./Certification/Cartification";
const Home = () => {
    return (
        <div>
          <Navbar />
          <HomeSlider />
          <HomeVideo />
          <ProjectTeam />
          <ArchtechLast />
          <Certification/>
          <Footer />
        </div>
    );
}
export default Home