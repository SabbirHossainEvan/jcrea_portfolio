import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const HomeLayout = () => {
    return (
        <div>
            <section className='max-w-7xl bg-black  mx-auto px-4 sm:px-6 lg:px-8'>
                <Navbar></Navbar>
            </section>
            <main>
                <section className='max-w-7xl mx-auto px-4 mt-20'>
                    <HeroSection></HeroSection>
                </section>
                <section>
                    <ServicesSection></ServicesSection>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;