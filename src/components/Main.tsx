import ProjectCard from "./ProjectCard";
import EventCard from "./EventCard";
import { projects } from "@/data/projects";
import { events } from "@/data/events";
import Link from "next/link";

export default function Main() {
  const selectedProjects = projects.filter(project => project.selected);
  const selectedEvents = events.filter(event => event.selected);

  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <section id="about">
        Welcome to my portfolio, it is a space for you to discover my thoughts, experiments, failures, and growth beyond the bullet points on my CV.
        <br/><br/>
        It includes my school and personal projects with details from initial ideas to final products, along with reflections on the hackathons and workshops I have attended.
        <br/><br/>
        I hope you will enjoy exploring my work and learning about my journey. Feel free to reach out if you have any questions or feedback.
      </section>
      
      <br/>
      
      <section id="projects">
        <h3 className="text-xl font-bold mb-4 text-slate-200">Selected Projects</h3>
        <div className="space-y-4">
          {selectedProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-4">
          <Link 
            href="/projects" 
            className="text-blue-400 hover:text-blue-300 transition text-sm"
          >
            View all projects →
          </Link>
        </div>
      </section>
      
      <br/>
      
      <section id="activities">
        <h3 className="text-xl font-bold mb-4 text-slate-200">Activities</h3>
        <div className="space-y-4">
          {selectedEvents.map(event => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
