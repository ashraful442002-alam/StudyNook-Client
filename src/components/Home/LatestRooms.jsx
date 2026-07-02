import React from 'react';
import { useEffect, useState } from "react";
import api from "../../services/api";

const LatestRooms = () => {
  const [rooms, setRooms] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestRooms = async () => {
      try {
        const { data } = await api.get("/rooms/latest");
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch latest rooms:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchLatestRooms();
  }, []);
  if (loading) {
    return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">
        Latest Study Rooms
      </h2>

      <p className="mt-3 text-center text-gray-600">
        Discover newly added quiet and comfortable study spaces.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {rooms.map((room) => (
    <div
      key={room._id}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={room.image}
        alt={room.roomName}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900">
          {room.roomName}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {room.description.length > 100
            ? room.description.slice(0, 100) + "..."
            : room.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Floor:</span> {room.floor}
          </p>

          <p>
            <span className="font-semibold">Capacity:</span>{" "}
            {room.capacity} People
          </p>

          <p>
            <span className="font-semibold">Rate:</span> $
            {room.hourlyRate}/hr
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {item}
            </span>
          ))}

          {room.amenities.length > 3 && (
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs">
              +{room.amenities.length - 3} More
            </span>
          )}
        </div>

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};
  }

  

export default LatestRooms;