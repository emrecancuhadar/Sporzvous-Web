import React from 'react';

const Navbar = ({ onAboutClick }) => {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50 bg-opacity-60">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-orange-600">Sporzvous</a>
                <div className="space-x-4">
                    <a href="#features" className="text-gray-700 hover:text-orange-600">Features</a>
                    <a href="#about" onClick={onAboutClick} className="text-gray-700 hover:text-orange-600 cursor-pointer">About</a>
                    <a href="#download" className="text-gray-700 hover:text-orange-600">Download</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
