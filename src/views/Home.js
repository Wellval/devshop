import React from "react";
import BecomeATeamSection from "../components/HomePage/BecomeATeamSection";
import BookCallSection from "../components/HomePage/BookCallSection";
import HeroSection from "../components/HeroSection";
import OtherSitesSection from "../components/HomePage/OtherSitesSection";
import OurWork from "../components/HomePage/OurWork";
import PersonSection from "../components/HomePage/PersonSection";
import ReadyToStartSection from "../components/HomePage/ReadyToStartSection";
import ReviewSection from "../components/HomePage/ReviewSection";
import RiskFreeSection from "../components/HomePage/RiskFreeSection";
import TrustedSection from "../components/TrustedSection";
import WaveSection from "../components/WaveSection";
import Button from "../components/Button";
import {ReactComponent as HeroImage} from '../assets/hero-image.svg';



function Home() {
    return (
        <React.Fragment>
            <HeroSection >
                <div className="hero-content content hero-wrapper">
                    <h1>Your Website, Software As A Service Or Mobile Application On Time And On Budget, Or It's On Us.</h1>
                    <p className="hero-p">We specialise in node.js, .net for the backend, and react & angular for frontend, wordpress or flutter, react native for your mobile applications.</p>
                    <Button classname="w-button" content="estimate my project" />
                </div>
                <div className="hero-content content">
                    <HeroImage />
                </div>
            </HeroSection>
            <TrustedSection />
            <ReviewSection />
            <PersonSection />
            <OtherSitesSection />
            <OurWork />
            <BookCallSection />
            <WaveSection />
            <ReadyToStartSection />
            <RiskFreeSection />
            <BecomeATeamSection />
        </React.Fragment>
    )
}

export default Home;