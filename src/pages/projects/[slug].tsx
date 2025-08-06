import { GetStaticProps, GetStaticPaths } from "next";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import Link from "next/link";

interface SerializedProject extends Omit<Project, 'startTime' | 'endTime'> {
  startTime: string;
  endTime: string | null;
}

interface ProjectDetailProps {
  project: SerializedProject;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-200 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.deploymentLink && (
              <a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            )}
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 transition"
              >
                Source Code
              </a>
            )}
          </div>
        </header>

        {/* Project Details */}
        <main className="prose prose-invert max-w-none">
          {project.detailedDescription && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">Overview</h2>
              <div className="text-slate-300 whitespace-pre-wrap">
                {project.detailedDescription}
              </div>
            </section>
          )}

          {project.problem && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">The Problem</h2>
              <div className="text-slate-300 whitespace-pre-wrap">
                {project.problem}
              </div>
            </section>
          )}

          {project.solution && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">The Solution</h2>
              <div className="text-slate-300 whitespace-pre-wrap">
                {project.solution}
              </div>
            </section>
          )}

          {project.challenges && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">Challenges & Learnings</h2>
              <div className="text-slate-300 whitespace-pre-wrap">
                {project.challenges}
              </div>
            </section>
          )}

          {project.nextSteps && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">Next Steps</h2>
              <div className="text-slate-300 whitespace-pre-wrap">
                {project.nextSteps}
              </div>
            </section>
          )}

          {/* Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Timeline</h2>
            <div className="text-slate-300">
              <p>
                <strong>Started:</strong> {new Date(project.startTime).toLocaleDateString()}
              </p>
              {project.endTime && (
                <p>
                  <strong>Completed:</strong> {new Date(project.endTime).toLocaleDateString()}
                </p>
              )}
            </div>
          </section>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Navigation Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex justify-between">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition">
              ← Back to Home
            </Link>
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition">
              View All Projects →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  // Serialize dates to strings for JSON compatibility
  const serializedProject = {
    ...project,
    startTime: project.startTime.toISOString(),
    endTime: project.endTime?.toISOString() || null,
  };

  return {
    props: {
      project: serializedProject,
    },
  };
};