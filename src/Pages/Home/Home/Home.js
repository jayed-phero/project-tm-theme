import React from 'react';
import About from '../About/About';
import Events from '../Events/Events';
import OurTeachers from '../OurTeachers/OurTeachers';
import ShortDetails from '../ShortDetails/ShortDetails';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';

const Home = () => {
    return (
        <div>
            {/* <PrincipalSpeech></PrincipalSpeech> */}
            <UpcommingEvents></UpcommingEvents>
            <ShortDetails></ShortDetails>
            <About></About>
            <OurTeachers></OurTeachers>
            <Events></Events>
            {/* <Nav></Nav> */}
            {/* <HeroNavbar></HeroNavbar> */}
        </div>
    );
};

export default Home;