import React from "react";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import heroImage from '../assets/tech-bg.png';
import TrustedSection from "../components/TrustedSection";
import todd from "../assets/todd.png";
import WhyUsSection from "../components/TechnologiesPage/WhyUsSection";
import PrototypingProcess from "../components/TechnologiesPage/PrototypingProcessSection";
import Design from "../components/TechnologiesPage/DesignSection";
import ProgrammingChops from "../components/TechnologiesPage/ProgrammingChopsSection";
import Testing from "../components/TechnologiesPage/TestingSection";
import Guarantee from "../components/TechnologiesPage/GuaranteeSection";

function Technologies() {
    return (
        <React.Fragment>
            <HeroSection >
                <div className="hero-content content hero-wrapper">
                    <h1>So, What Types of TECHNOLOGY Can We Handle?</h1>
                    <p className="hero-p">Basically, Everything. Speak with one of our software entrepreneurs with experience on dozens of software projects</p>
                    <Button classname="btn n-button" content="book your call" />
                </div>
                <div className="hero-content content">
                    <img alt="" src={heroImage}></img>
                </div>
            </HeroSection>
            <TrustedSection />
            <div className="section blue">
                <div className="container"><div className='testimonial-wrapper no-margin'>
                    <img alt="portrait" className='portrait' src={todd}></img>
                    <div className='testimonial-text-wrapper'>
                        <div className='testimonial-text'>
                            <p className="testimonial-text p-20">"Our team has been planning for MVP for the last year. While searching job boards, linkedin, angel's
                                list for possible teams to work with we came across Geordie and OneStop DevShop.  After briefing Geordie,
                                he understood the core of our vision, work with them more in the future and can't recommend them highly enough. "</p>
                        </div>
                        <div className='testimonial-name'>Luke Bragg</div>
                    </div>
                </div></div>
            </div>
            <WhyUsSection />
            <div className="section dark">
                <div className="container column">
                    <div className="content">
                        <h2 className="title-content w no-right-margin">You are ONE click away from
                        <br/>
                        your million dollar software business.
                        </h2>
                        <Button classname="btn w-button" content="book your call" />                       
                    </div>
                </div>
            </div>
            <PrototypingProcess />
            <Design />
            <ProgrammingChops />
            <Testing />
            <Guarantee />
        </React.Fragment>
    )
}

export default Technologies;