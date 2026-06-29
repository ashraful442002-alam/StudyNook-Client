import React from 'react';
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-study-room.jpg";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
            Study Room Booking Platform
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find Your Perfect
            <span className="block text-blue-600">
              Study Room
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Browse and book quiet, private study rooms in your library.
            Reserve your ideal space in minutes or list your own study room
            for others to book.
          </p>

          <div className="mt-8">
            <Link
              to="/rooms"
              className="inline-flex rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Modern Study Room"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;