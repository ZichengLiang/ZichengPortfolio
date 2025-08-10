import Link from "next/link";
import { ReactNode } from "react";

interface MDXProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

interface LinkProps extends MDXProps {
  href?: string;
}

interface ImageProps extends MDXProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const MDXComponents = {
  h1: (props: MDXProps) => (
    <h1 className="text-4xl font-bold text-slate-200 mb-6 mt-8 first:mt-0" {...props} />
  ),
  h2: (props: MDXProps) => (
    <h2 className="text-3xl font-bold text-slate-200 mb-4 mt-8 first:mt-0" {...props} />
  ),
  h3: (props: MDXProps) => (
    <h3 className="text-2xl font-bold text-slate-200 mb-3 mt-6" {...props} />
  ),
  h4: (props: MDXProps) => (
    <h4 className="text-xl font-semibold text-slate-200 mb-2 mt-4" {...props} />
  ),
  h5: (props: MDXProps) => (
    <h5 className="text-lg font-semibold text-slate-200 mb-2 mt-4" {...props} />
  ),
  h6: (props: MDXProps) => (
    <h6 className="text-base font-semibold text-slate-200 mb-2 mt-4" {...props} />
  ),
  p: (props: MDXProps) => (
    <p className="text-slate-300 mb-4 leading-relaxed" {...props} />
  ),
  a: ({ href, ...props }: LinkProps) => (
    <Link
      href={href || ''}
      className="text-blue-400 hover:text-blue-300 underline transition-colors"
      {...props}
    />
  ),
  ul: (props: MDXProps) => (
    <ul className="text-slate-300 mb-4 pl-6 space-y-2 list-disc" {...props} />
  ),
  ol: (props: MDXProps) => (
    <ol className="text-slate-300 mb-4 pl-6 space-y-2 list-decimal" {...props} />
  ),
  li: (props: MDXProps) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: MDXProps) => (
    <blockquote className="border-l-4 border-slate-500 pl-4 py-2 mb-4 italic text-slate-400 bg-slate-800/30 rounded-r" {...props} />
  ),
  code: (props: MDXProps) => (
    <code className="bg-slate-800 text-slate-200 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: MDXProps) => (
    <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg mb-6 overflow-x-auto border border-slate-700" {...props} />
  ),
  strong: (props: MDXProps) => (
    <strong className="font-semibold text-slate-200" {...props} />
  ),
  em: (props: MDXProps) => (
    <em className="italic text-slate-300" {...props} />
  ),
  hr: (props: MDXProps) => (
    <hr className="border-slate-600 my-8" {...props} />
  ),
  table: (props: MDXProps) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-slate-600" {...props} />
    </div>
  ),
  thead: (props: MDXProps) => (
    <thead className="bg-slate-800" {...props} />
  ),
  tbody: (props: MDXProps) => (
    <tbody {...props} />
  ),
  tr: (props: MDXProps) => (
    <tr className="border-b border-slate-600" {...props} />
  ),
  th: (props: MDXProps) => (
    <th className="border border-slate-600 px-4 py-2 text-left text-slate-200 font-semibold" {...props} />
  ),
  td: (props: MDXProps) => (
    <td className="border border-slate-600 px-4 py-2 text-slate-300" {...props} />
  ),
  img: ({ src, alt, ...props }: ImageProps) => (
    <img 
      src={src} 
      alt={alt || ''} 
      className="rounded-lg mb-6 max-w-full h-auto" 
      {...props} 
    />
  ),
};

export default MDXComponents;