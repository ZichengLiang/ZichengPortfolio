import ProjectCard from "@/components/ProjectCard";
import EventCard from "@/components/EventCard";
import { projects } from "@/data/projects";
import { events } from "@/data/events";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <main className="min-h-screen px-6 py-12">
        {/* Header with navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-3 items-center gap-8 mb-8">
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 transition duration-200"
            >
              ← Back to Homepage
            </Link>
            <h1 className="text-3xl font-bold text-center">
              Project Archive
            </h1>
          </div>
        </div>

        {/* Selected Projects Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-300">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(
              (project) =>
                project.selected && (
                  <ProjectCard key={project.title} project={project} />
                )
            )}
          </div>
        </div>

        {/* Activities & Events Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-300">
            Activities & Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(
              (event) =>
                event.selected && <EventCard key={event.title} event={event} />
            )}
          </div>
        </div>

        {/* Footer navigation */}
        <div className="max-w-6xl mx-auto pt-8 mt-16 border-t border-slate-700">
          <div className="flex justify-center">
            <Link 
              href="/"
              className="flex items-center gap-2 px-6 py-3 text-blue-400 hover:text-blue-300 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
