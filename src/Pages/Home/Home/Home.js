// import { Footer } from 'flowbite-react';
import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import CaroGrid from '../../CaroGrid/CaroGrid';
import PreviousNextMethods from '../../CaroGrid/Gri';
import CaroselSlider from '../../CaroselSlider/CaroselSlider';
import ImportantSpeech from '../../ImportantSpeech/ImportantSpeech';
import LikePortfolio from '../../LikePortfolio/LikePortfolio';
import OurTeam from '../../OurTeam/OurTeam';
import UCSkeleton from '../../Shared/Skeleton/UCSkeleton';
import About from '../About/About';
import HomeCarosel from '../Carousel/HomeCarosel';
import Blogs from '../Events/Blogs';
import FreequrntlyAQ from '../FreequentlyAQ/FreequrntlyAQ';
import Gallery from '../Gallery/Gallery';
import PrincipalSpeech from '../PrincipalSpeech/PrincipalSpeech';
import ShortDetails from '../ShortDetails/ShortDetails';
import TeamMembers from '../TeamMembers/TeamMembers';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';

const Home = () => {
    return (
        <div className=''>
            <ScrollToTop/>
            {/* <CaroselSlider/> */}
            <HomeCarosel/>
            {/* <Bar/> */}
            <PrincipalSpeech></PrincipalSpeech>
            {/* <ImportantSpeech/> */}
            {/* <CaroGrid/> */}
            <PreviousNextMethods/>
            {/* <OurTeam/> */}
            <UpcommingEvents></UpcommingEvents>
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