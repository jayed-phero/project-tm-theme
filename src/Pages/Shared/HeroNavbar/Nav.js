import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex items-center justify-center text-xl py-5 text-center'>
            <Link to='/login'>Login</Link>
            <Link className='px-5' to='/signup'>Sign Up</Link>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Nav;