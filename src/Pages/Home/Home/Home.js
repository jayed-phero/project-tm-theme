// import { Footer } from 'flowbite-react';
import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import CaroGrid from '../../CaroGrid/CaroGrid';
import PreviousNextMethods from '../../CaroGrid/Gri';
import CaroselSlider from '../../CaroselSlider/CaroselSlider';
import CommingEvents from '../../CommingEvent/CommingEvents';
import ImportantSpeech from '../../ImportantSpeech/ImportantSpeech';
import LikePortfolio from '../../LikePortfolio/LikePortfolio';
import OurTeacher from '../../OurTeacher/OurTeacher';
import OurTeam from '../../OurTeam/OurTeam';
import UCSkeleton from '../../Shared/Skeleton/UCSkeleton';
import About from '../About/About';
import HomeCarosel from '../Carousel/HomeCarosel';
import NewCarosel from '../Carousel/NewCarosel';
import Blogs from '../Events/Blogs';
import FreequrntlyAQ from '../FreequentlyAQ/FreequrntlyAQ';
import Gallery from '../Gallery/Gallery';
import PrincipalSpeech from '../PrincipalSpeech/PrincipalSpeech';
import ShortDetails from '../ShortDetails/ShortDetails';
import TeamMembers from '../TeamMembers/TeamMembers';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';
import Navbar from '../../Shared/NewNavbar/Navbar/Navbar'
import HeroSideButton from '../../Shared/HeroSideButton/HeroSideButton';

const Home = () => {
    return (
        <div className=''>
            <ScrollToTop/>
            {/* <Navbar/> */}
            <NewCarosel/>
            {/* <HeroSideButton/> */}

            {/* <CaroselSlider/> */}
            {/* <HomeCarosel/> */}
            {/* <Bar/> */}
            <PrincipalSpeech></PrincipalSpeech>
            <OurTeacher/>
            {/* <ImportantSpeech/> */}
            {/* <CaroGrid/> */}
            {/* <PreviousNextMethods/> */}
            {/* <OurTeam/> */}
            {/* <UpcommingEvents></UpcommingEvents> */}
            <CommingEvents/>
            {/* <UCSkeleton/> */}
            <ShortDetails></ShortDetails>
            {/* <About/> */}
            <LikePortfolio/>
            {/* <TeamMembers/> */}
            <FreequrntlyAQ/>
            <Gallery/>
            {/* <ClientSays/> */}
            <Blogs/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;