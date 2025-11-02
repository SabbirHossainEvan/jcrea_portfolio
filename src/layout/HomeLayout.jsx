import React from 'react';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Navbar></Navbar>
            </section>
        </div>
    );
};

export default HomeLayout;