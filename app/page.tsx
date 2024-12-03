"use client"; // Marks this as a Client Component

import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider - Hidden on Mobile */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed opacity-80 animate-fade-1"
          style={{ backgroundImage: `url('/slider1.jpg')` }}
        />
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed opacity-80 animate-fade-2"
          style={{ backgroundImage: `url('/slider2.jpg')` }}
        />
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed opacity-80 animate-fade-3"
          style={{ backgroundImage: `url('/slider3.jpg')` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black opacity-70" />

      {/* Main Card with Video */}
      <div className="relative flex flex-col justify-center items-center h-screen text-center text-white px-4 sm:px-8">
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 sm:p-8 rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-90 max-w-md w-full">
          {/* Video Player */}
          <video
            src="/invitation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Action Buttons Below the Card in One Container */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-x-4 sm:gap-x-8 w-full">
          {/* Save Date Button */}
          <button
            onClick={() =>
              window.open("https://calendar.google.com/", "_blank")
            }
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg w-auto whitespace-nowrap"
          >
            <Image
              src="/calendar.png"
              alt="Google Calendar Icon"
              width={20}
              height={20}
            />
            <span>Save Date</span>
          </button>

          {/* Share Button */}
          <button
            onClick={() =>
              navigator.share({
                title: "Housewarming Invitation",
                text: "Join us for our housewarming!",
                url: window.location.href,
              })
            }
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg w-auto whitespace-nowrap"
          >
            <Image
              src="/share.png"
              alt="Share Icon"
              width={20}
              height={20}
            />
            <span>Share</span>
          </button>

          {/* Location Button */}
          <button
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=123+New+Street,+Your+City",
                "_blank"
              )
            }
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 via-yellow-600 to-orange-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg w-auto whitespace-nowrap"
          >
            <Image
              src="/maps.png"
              alt="Map Icon"
              width={20}
              height={20}
            />
            <span>Location</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
