import ProjectCard from "@/components/ProjectCard";
import EventCard from "@/components/EventCard";
import { projects } from "@/data/projects";
import { events } from "@/data/events";
import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <main className="min-h-screen bg-gray-50 px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-gray-800">
                        Selected Projects
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        project.selected && <ProjectCard key={project.title} project={project} />
                    ))}
                    </div>
                    <br/>
                    <Link href="\" className="text-m text-blue-500"> View Full Project Archive</Link>
                    <br/><br/>
                </div>
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8 text-gray-800">
                        Activities & Events
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        event.selected && <EventCard key={event.title} event={event} />
                    ))}
                    </div>
                    <br/>
                </div>
            </main>
        </>
    );
}