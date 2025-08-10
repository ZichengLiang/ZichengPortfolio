import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="relative h-full flex flex-col rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-500 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 bg-slate-700/70 text-slate-300 rounded-full border border-slate-600 transition-colors group-hover:bg-slate-600/70 group-hover:text-slate-200"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2.5 py-1 bg-slate-700/70 text-slate-400 rounded-full border border-slate-600">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Footer - Push to bottom */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
            <span>Read more</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="flex items-center gap-3">
            {project.sourceCodeLink && (
              <div className="flex items-center gap-1 text-slate-500">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-xs">Code</span>
              </div>
            )}
            {project.deploymentLink && (
              <div className="flex items-center gap-1 text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-xs">Live</span>
              </div>
            )}
          </div>
        </div>

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
};

export default ProjectCard;
