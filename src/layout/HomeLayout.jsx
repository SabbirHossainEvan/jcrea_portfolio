import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkExperience from '../components/WorkExperience';
import HireMeSection from '../components/HireMeSection';
import PortfolioSection from '../components/PortfolioSection';
import PortfolioSectionDown from '../components/PortfolioSectonDown';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectDiscussSection from '../components/ProjectDiscussSection';

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
                <section>
                    <WorkExperience></WorkExperience>
                </section>
                <section>
                    <HireMeSection></HireMeSection>
                </section>
                <section>
                    <PortfolioSection></PortfolioSection>
                </section>
                <section>
                    <PortfolioSectionDown></PortfolioSectionDown>
                </section>
                <section>
                    <TestimonialsSection></TestimonialsSection>
                </section>
                <section>
                    <ProjectDiscussSection></ProjectDiscussSection>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;