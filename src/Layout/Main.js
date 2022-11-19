import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/HeroNavbar/Nav';
import HeroSideButton from '../Pages/Shared/HeroSideButton/HeroSideButton';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <HeroSideButton></HeroSideButton>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;