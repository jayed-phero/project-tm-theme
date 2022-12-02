import { Spinner } from 'flowbite-react';
import React from 'react';

const SpinnerRound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <Spinner aria-label="Default status example" />
            </div>
        </div>
    );
};

export default SpinnerRound;