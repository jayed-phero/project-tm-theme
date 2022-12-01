import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='h-[35rem] w-full flex items-center justify-center'>
            <div className='flex items-center gap-5 flex-col md:flex-row'>
                <Link className='h-20 w-44 flex items-center justify-center  rounded-lg bg-orange-400 text-white font-semibold border-4 border-gray-500'>
                    <h3>Users Login</h3>
                </Link>
                <Link className='h-20 w-44 flex items-center justify-center rounded-lg bg-orange-400 text-white font-semibold border-4 border-gray-500'>
                    <h3>Employee Login</h3>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;