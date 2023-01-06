import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import HeroNavbar from '../Pages/Shared/HeroNavbar/Hero/HeroNavbar';
import HeroSideButton from '../Pages/Shared/HeroSideButton/HeroSideButton';
import HomeHeader from '../Pages/Shared/HomeHeader/HomeHeader';
import Navbar from '../Pages/Shared/NewNavbar/Navbar/Navbar';
import NewNavbar from '../Pages/Shared/NewNavbar/NewNavbar';
import ResBar from '../Pages/Shared/ResBar/ResBar';

const Main = () => {
    return (
        <div>
            <HomeHeader />
            {/* <NewNavbar/> */}
            <Navbar/>
            <HeroSideButton/>
            {/* <HeroNavbar /> */}
            {/* <ResBar/> */}
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;