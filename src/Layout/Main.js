import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import HeroNavbar from '../Pages/Shared/HeroNavbar/Hero/HeroNavbar';
import HomeHeader from '../Pages/Shared/HomeHeader/HomeHeader';
import ResBar from '../Pages/Shared/ResBar/ResBar';

const Main = () => {
    return (
        <div>
            <HomeHeader />
            <HeroNavbar />
            {/* <ResBar/> */}
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;