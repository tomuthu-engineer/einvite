"use client"; // Marks this as a Client Component

import React from "react";
import Image from "next/image";

const Home = () => {
  const addEventToCalendar = () => {
    const eventTitle = "Wedding Celebration";
    const startDate = "20241220T180000Z"; // Example: Dec 20, 2024, 6:00 PM UTC
    const endDate = "20241220T210000Z"; // Example: Dec 20, 2024, 9:00 PM UTC
    const details = "Join us for our wedding celebration!";
    const location = "Bengaluru, India";

    const calendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    window.open(calendarURL, "_blank");
  };

  const shareInvitation = () => {
    const title = "You&apos;re Invited to Our Wedding!";
    const text = `Join us for our wedding celebration in Bengaluru. Check out the event details and location here: ${window.location.href}`;
    const location = "Bengaluru";

    if (navigator.share) {
      navigator
        .share({
          title,
          text: `${text}\nLocation: ${location}`,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden bg-gray-50">
      {/* Left Container */}
      <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-teal-500 via-blue-400 to-green-300">
        <Image
          src="/event1.png"
          alt="Wedding Couple SVG"
          width={500}
          height={500}
          className="rounded-lg shadow-xl"
        />
      </div>

      {/* Right Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center p-8 bg-white relative">
        {/* Top Image */}
        <div className="absolute top-0 w-full hidden md:block">
          <Image
            src="/tora.png"
            alt="Toranam Decoration"
            width={1000}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Top Text */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-700 font-serif mt-24">
          You&apos;re cordially invited to the
        </h2>

        {/* Horizontal Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-400 mt-4 mb-2"></div>

        {/* Event Name */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-cursive mb-2">
          Our Wedding
        </h1>

        {/* Horizontal Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-400 mt-2 mb-4"></div>

        {/* Event Details */}
        <div className="text-gray-600 font-light text-lg md:text-xl mb-6">
          <p>December 20, 2024</p>
          <p>6:00 PM - 9:00 PM</p>
          <p>Bengaluru, India</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Save Date Button */}
          <button
            onClick={addEventToCalendar}
            className="relative flex items-center justify-center bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all text-sm md:text-lg">
            <Image
              src="/calendar.png"
              alt="Google Calendar Icon"
              width={24}
              height={24}
            />
            <span className="ml-2 font-semibold">Save Date</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>
          </button>

          {/* Share Button */}
          <button
            onClick={shareInvitation}
            className="relative flex items-center justify-center bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all text-sm md:text-lg">
            <Image src="/share.png" alt="Share Icon" width={24} height={24} />
            <span className="ml-2 font-semibold">Share</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>
          </button>

          {/* Location Button */}
          <button
            onClick={() =>
              window.open("https://maps.google.com/?q=Bengaluru", "_blank")
            }
            className="relative flex items-center justify-center bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all text-sm md:text-lg">
            <Image src="/maps.png" alt="Map Icon" width={24} height={24} />
            <span className="ml-2 font-semibold">Location</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
