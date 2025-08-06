import React from "react";
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
        <p>
          Welcome to my website, here I&#39;m not trying to impress with flashy stacks or big claims. Instead, I want this space to reflect how I think, how I work, and how I learn.
        </p>
        <br />
        <p>
          Much of what I share here begins with a question or a moment of friction—and takes shape through isolating problems, testing ideas, and learning from the missteps along the way.
        </p>
        <br />
        <p>
          For example, you&#39;ll find how I approached building an agentic music generation workflow — what worked, what didn&#39;t, and how I refined it over time. Or how I designed MiaoNance, a smart notebook that weaves together personal research and live crypto market data, inspired by the needs of investors like my mother.
        </p>
        <br/>
        <p>
         My hope is that, as you explore this site, you will get a sense of how I work—with care, adaptability, and a steady sense of ownership over the things I build. 
        </p>
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
