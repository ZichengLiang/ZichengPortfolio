import React from "react";
import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-2xl border-2 border-solid p-4 hover:border-blue-400 transition">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-sm mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 rounded border-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.sourceCodeLink && (
          <Link
            href={project.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm hover:underline"
          >
            View Source Code
          </Link>
        )}
        {project.deploymentLink && (
          <Link
            href={project.deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 text-sm hover:underline"
          >
            View Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
