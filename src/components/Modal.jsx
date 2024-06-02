import React from 'react';
import ReactDOM from 'react-dom';
import qrcode from '../images/qrcode.png';


const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white p-8 rounded shadow-md z-10 w-full max-w-lg mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none text-2xl custom-close-btn" // Add text-2xl class
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">Woah! The Sporzvous app is wayyy too cool! 😍</h2>
                <p className="mb-4">Book easily, find players & double down on the fun.</p>
                <div className="flex justify-center mb-4">
                    <div className="">
                        <img src={qrcode} alt="QR Code"  />
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="bg-[#FF5C00] hover:bg-[#e05500] text-white py-2 px-4 rounded">Google Play</a>
                    <a href="#" className="bg-[#FF5C00] hover:bg-[#e05500] text-white py-2 px-4 rounded">App Store</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
