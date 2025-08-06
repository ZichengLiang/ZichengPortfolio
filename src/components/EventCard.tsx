import React from "react";
import { Event } from "../types/event";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-400/60 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
            {event.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>

        {/* Footer - Push to bottom */}
        <div className="mt-auto">
          {event.date ? (
            <div className="flex items-center gap-2 text-amber-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
            </div>
          ) : (
            <div className="h-6"></div>
          )}
        </div>

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default EventCard;
