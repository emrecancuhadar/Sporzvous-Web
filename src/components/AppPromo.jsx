// src/components/AppPromo.js
import React from 'react';
import appPromoImage from '../images/promoteImg.png'; // Adjust the path accordingly

const AppPromo = ({ onGetAppClick }) => {
    return (
        <section id="download" className="py-20">
            <div className="relative flex flex-col-reverse items-center  md:flex-row">
                <span className="mt-12 m-5 flex-col space-y-4">
                    <img src={appPromoImage} alt="Sporzvous App" className="w-fit" />
                </span>
                <div className="flex flex-col items-center justify-between space-y-6 md:items-start">
                    <h2 className="text-6xl font-bold">Get Fit The Fun Way!</h2>
                    <p className="mt-4 text-gray-600">Join the community of 2+ million users - find games</p>
                    <p className="mt-4 text-gray-600">book with a few taps, and be a part of the amateur sports revolution!</p>
                    <div className="mt-8 space-x-4 ">
                        <button onClick={onGetAppClick} className="bg-[#FF5C00] hover:bg-[#e05500] text-white py-2 px-4 rounded">Download the App</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPromo;
