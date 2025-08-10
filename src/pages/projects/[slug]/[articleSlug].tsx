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

interface ArticlePageProps {
  project: SerializedProject;
  article: {
    id: string;
    title: string;
    description?: string;
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

export default function ArticlePage({ project, article, mdxSource }: ArticlePageProps) {
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
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Link href="/projects" className="hover:text-slate-300 transition">
              Projects
            </Link>
            <span>/</span>
            <Link 
              href={`/projects/${project.slug}`} 
              className="hover:text-slate-300 transition"
            >
              {project.title}
            </Link>
            <span>/</span>
            <span className="text-slate-200">{article.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <Link 
              href={`/projects/${project.slug}`} 
              className="text-blue-400 hover:text-blue-300 transition text-sm"
            >
              ← Back to {project.title}
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-200 mb-4">
            {article.title}
          </h1>
          
          {article.description && (
            <p className="text-xl text-slate-300 mb-6">
              {article.description}
            </p>
          )}

          {/* Project Context */}
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-300">Part of Project:</h3>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  {project.title}
                </Link>
              </div>
              <div className="text-right">
                <h4 className="text-sm font-semibold text-slate-300 mb-1">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1 justify-end">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-slate-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="max-w-none">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </main>

        {/* Related Articles */}
        {project.articles && project.articles.length > 1 && (
          <section className="mt-16 pt-8 border-t border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-6">More from this project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.articles
                .filter(otherArticle => otherArticle.id !== article.id)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/projects/${project.slug}/${relatedArticle.slug}`}
                    className="block p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors"
                  >
                    <h3 className="text-slate-200 font-semibold mb-2">
                      {relatedArticle.title}
                    </h3>
                    {relatedArticle.description && (
                      <p className="text-slate-400 text-sm">
                        {relatedArticle.description}
                      </p>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        )}

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
  const paths: { params: { slug: string; articleSlug: string } }[] = [];
  
  projects.forEach((project) => {
    if (project.articles) {
      project.articles.forEach((article) => {
        paths.push({
          params: {
            slug: project.slug,
            articleSlug: article.slug,
          },
        });
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  
  if (!project || !project.articles) {
    return {
      notFound: true,
    };
  }

  const article = project.articles.find((a) => a.slug === params?.articleSlug);
  
  if (!article) {
    return {
      notFound: true,
    };
  }

  // Load MDX content for the article
  const mdxSource = await getMDXContent(`articles/${project.slug}/${article.slug}.mdx`);
  
  if (!mdxSource) {
    return {
      notFound: true,
    };
  }

  // Serialize project dates
  const serializedProject = {
    ...project,
    startTime: project.startTime.toISOString(),
    endTime: project.endTime?.toISOString() || null,
  };

  return {
    props: {
      project: serializedProject,
      article,
      mdxSource,
    },
  };
};