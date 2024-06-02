import React from 'react';

const Footer = ({ onGetAppClick }) => {
    return (
        <footer className="text-gray-400 py-8 bg-[#C9C9C9]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h3 className="text-5xl font-bold text-[#FF5C00]">Sporzvous</h3>
                    <p className="mt-2 text-gray-500">Your Sports Community App</p>
                    <div className="mt-4 space-x-2">
                        <button onClick={onGetAppClick} className="text-white py-2 px-4 rounded hover:bg-[#e05500] bg-[#FF5C00]">Get the App</button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-500">About Us</a></li>
                        <li><a href="#" className="text-gray-500">Contact</a></li>
                        <li><a href="#" className="text-gray-500">Careers</a></li>
                        <li><a href="#" className="text-gray-500">Partner With Us</a></li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0">
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-500">FAQs</a></li>
                        <li><a href="#" className="text-gray-500">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-500">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-500">Cancellation Policy</a></li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#" className="text-gray-500"><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="#" className="text-gray-500"><i className="fab fa-instagram fa-lg"></i></a>
                        <a href="#" className="text-gray-500"><i className="fab fa-linkedin-in fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
                <p>© 2024 Sporzvous. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
