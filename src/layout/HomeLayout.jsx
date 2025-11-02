import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const HomeLayout = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Navbar></Navbar>
            </section>
            <main>
                <section>
                    <HeroSection></HeroSection>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;