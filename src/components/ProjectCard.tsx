import React from "react";
import Link from "next/link"
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-2xl border-2 border-solid border-black shadow-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl text-black font-semibold mb-2">{project.title}</h2>
      <p className="text-sm text-black mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="text-xs text-black bg-gray-100 px-2 py-1 rounded">
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
            className="text-blue-500 text-sm hover:underline"
          >
            View Source Code
          </Link>
        )}
        {project.deploymentLink && (
          <Link
            href={project.deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            View Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;