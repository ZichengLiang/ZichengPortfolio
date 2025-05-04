import React from "react";
import { Event } from "../types/event";

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="rounded-2xl border-2 border-solid border-black shadow-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl text-black font-semibold mb-2">{event.title}</h2>
      <p className="test-sm text-black mb-2">{event.description}</p>
    </div>
  );
};

export default EventCard;