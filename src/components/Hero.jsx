import React from 'react';
import heroImage from '../images/hero.jpg'; // Adjust the path accordingly

const Hero = ({ onJoinClick }) => {
    return (
        <div className="hero-section relative h-screen flex flex-col-reverse items-center justify-center md:flex-row">
            <div className="absolute inset-0 w-full h-full flex overflow-hidden">
                <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative container mx-auto text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">Organized Played Conquered</h1>
                <p className="mt-4 text-lg md:text-xl">World's Biggest Sports Community</p>
                <div className="mt-8 space-x-4">
                    <button onClick={onJoinClick} className="bg-[#FF5C00] hover:bg-[#e05500] text-white py-2 px-4 rounded">Join Sporzvous</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
