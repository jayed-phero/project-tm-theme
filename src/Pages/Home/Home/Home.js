// import { Footer } from 'flowbite-react';
import React from 'react';
import About from '../About/About';
import HomeCarosel from '../Carousel/HomeCarosel';
import ClientSays from '../ClientSays/ClientSays';
import Events from '../Events/Events';
import FreequrntlyAQ from '../FreequentlyAQ/FreequrntlyAQ';
import Gallery from '../Gallery/Gallery';
import PrincipalSpeech from '../PrincipalSpeech/PrincipalSpeech';
import ShortDetails from '../ShortDetails/ShortDetails';
import TeamMembers from '../TeamMembers/TeamMembers';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';

const Home = () => {
    return (
        <div className=''>
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
            <Events></Events>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;