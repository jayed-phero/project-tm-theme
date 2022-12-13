// import { Footer } from 'flowbite-react';
import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
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
            <HomeCarosel/>
            {/* <Bar/> */}
            <PrincipalSpeech></PrincipalSpeech>
            <UpcommingEvents></UpcommingEvents>
            <ShortDetails></ShortDetails>
            <About/>
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