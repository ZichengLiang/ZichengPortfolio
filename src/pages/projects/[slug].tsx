import { GetStaticProps, GetStaticPaths } from "next";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getMDXContent } from "@/lib/mdx";
import { useState, useEffect } from "react";
import MDXComponents from "@/components/MDXComponents";

interface SerializedProject extends Omit<Project, 'startTime' | 'endTime'> {
  startTime: string;
  endTime: string | null;
}

interface ProjectDetailProps {
  project: SerializedProject;
  mdxSource?: MDXRemoteSerializeResult;
}

export default function ProjectDetail({ project, mdxSource }: ProjectDetailProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to Project List 
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

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              {/* Project Description */}
              {project.detailedDescription && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-200 mb-4">Overview</h2>
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {project.detailedDescription}
                  </div>
                </section>
              )}

              {/* The Problem */}
              {project.problem && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-200 mb-4">The Problem</h2>
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {project.problem}
                  </div>
                </section>
              )}

              {/* The Solution */}
              {project.solution && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-200 mb-4">The Solution</h2>
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {project.solution}
                  </div>
                </section>
              )}

              {/* MDX Content (if available) */}
              {mdxSource && (
                <section className="mb-8 mt-12 pt-8 border-t border-slate-700">
                  <div className="max-w-none">
                    <MDXRemote {...mdxSource} components={MDXComponents} />
                  </div>
                </section>
              )}

              {/* Challenges & Learnings */}
              {project.challenges && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-200 mb-4">Challenges & Learnings</h2>
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {project.challenges}
                  </div>
                </section>
              )}

              {/* Next Steps */}
              {project.nextSteps && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-200 mb-4">Next Steps</h2>
                  <div className="text-slate-300 whitespace-pre-wrap">
                    {project.nextSteps}
                  </div>
                </section>
              )}
            </div>
          </main>

          {/* Sidebar - Articles Only */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Articles/Reports */}
              {project.articles && project.articles.length > 0 && (
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-slate-200 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {project.articles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/projects/${project.slug}/${article.slug}`}
                        className="block p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors"
                      >
                        <h4 className="text-slate-200 font-semibold mb-2">
                          {article.title}
                        </h4>
                        {article.description && (
                          <p className="text-slate-400 text-sm">
                            {article.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-slate-500 text-xs">
                            Click to read more
                          </span>
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </aside>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
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

  // Try to load MDX content if contentPath is specified
  let mdxSource = null;
  if (project.contentPath) {
    mdxSource = await getMDXContent(`projects/${project.contentPath}`);
  }

  return {
    props: {
      project: serializedProject,
      ...(mdxSource && { mdxSource }),
    },
  };
};