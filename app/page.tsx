"use client"; // Marks this as a Client Component

import React from "react";
import Image from "next/image";

const Home = () => {
  const addEventToCalendar = () => {
    const eventTitle = "Housewarming Party";
    const startDate = "20241220T180000Z"; // Example: Dec 20, 2024, 6:00 PM UTC
    const endDate = "20241220T210000Z"; // Example: Dec 20, 2024, 9:00 PM UTC
    const details = "Join us for our housewarming celebration!";
    const location = "Bengaluru, India";

    const calendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    window.open(calendarURL, "_blank");
  };

  const shareInvitation = () => {
    const title = "You're Invited to Our Housewarming!";
    const text = `Join us for a housewarming celebration in Bengaluru. Check out the event details and location here: ${window.location.href}`;
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Card */}
      <div className="relative flex flex-col justify-center items-center h-screen text-center text-white px-4 sm:px-8">
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 sm:p-8 rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-90 max-w-md w-full">
          <Image
            src="/invitation.svg"
            alt="Housewarming SVG"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-x-4 sm:gap-x-8 w-full">
          {/* Save Date Button */}
          <button
            onClick={addEventToCalendar}
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
            onClick={shareInvitation}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg w-auto whitespace-nowrap"
          >
            <Image src="/share.png" alt="Share Icon" width={20} height={20} />
            <span>Share</span>
          </button>

          {/* Location Button */}
          <button
            onClick={() =>
              window.open("https://maps.google.com/?q=Bengaluru", "_blank")
            }
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 via-yellow-600 to-orange-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg w-auto whitespace-nowrap"
          >
            <Image src="/maps.png" alt="Map Icon" width={20} height={20} />
            <span>Location</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
