import React from "react";
import { Event } from "../types/event";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="rounded-2xl border-2 border-solid p-4 hover:border-amber-400 transition">
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="test-sm mb-2">{event.description}</p>
    </div>
  );
};

export default EventCard;
