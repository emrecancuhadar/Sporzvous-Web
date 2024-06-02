import React from "react";
import { createPortal } from "react-dom";

const InformationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-3xl mx-4 relative overflow-auto max-h-full">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#FF5C00] mb-6">Welcome to Sporzvous!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Step into the world of Sporzvous, where your passion for sports meets cutting-edge technology!
            Our app is designed to bring sports enthusiasts together, offering a dynamic platform to create,
            join, and participate in a wide range of sports events. Experience seamless interaction, robust
            event management, and a thriving community of like-minded individuals, all at your fingertips.
          </p>
          <h2 className="text-3xl font-bold text-[#FF5C00] mb-4">Features:</h2>
          <ul className="list-disc list-inside mb-6 text-left text-gray-700 mx-auto max-w-lg text-lg">
            <li>Users can create or join existing events for a variety of sports.</li>
            <li>Users can rate others based on their performance in events.</li>
            <li>Users must join events if they want to participate. Bad intentions will be punished upon reports of other users.</li>
            <li>Duration of events is determined by the organizer. Ratings are available when events are finished.</li>
            <li>Users can organize events with players of similar skill levels, ensuring balanced and enjoyable matches.</li>
          </ul>
          <h2 className="text-3xl font-bold text-[#FF5C00] mb-4">Community Guidelines:</h2>
          <p className="text-lg text-gray-700 mb-6">
            We prioritize respect and courtesy within our community. When using the in-app chat feature,
            please adhere to our general courtesy rules. Always communicate respectfully and uphold the
            spirit of sportsmanship. Users who do not follow these guidelines will be banned upon receiving
            reports from other users.
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("info-portal")
  );
};

export default InformationPopup;
